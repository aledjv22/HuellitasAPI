const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('../config/config');
const UsersService = require('./user.service');

const service = new UsersService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }

    delete user.dataValues.password;
    delete user.dataValues.recoveryToken;

    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, config.jwtSecret);

    return {
      user,
      token
    };
  }

  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }

    jwt.verify(user.recoveryToken, config.jwtSecret, (err) => {
      if (!err) throw boom.badRequest('You already have a active token.');
    });

    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, {expiresIn: "15m"});
    const link = `https://aledjv22.github.io/huellitas/recovery?token=${token}`;

    await service.update(user.id, {recoveryToken: token});

    const mail = {
      from: `Huellitas <${config.emailSender}>`,
      to: `${user.email}`,
      subject: 'Email to recover password',
      html: `<b> Enter this link => ${link} </b>`,
    }

    const rta = await this.sendMail(mail);

    return rta;
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);

      if (user.recoveryToken !== token){
        throw boom.unauthorized();
      }

      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, {recoveryToken: null, password: hash});

      return { message: 'password changed' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: config.emailSender,
        pass: config.emailPassword
      }
    });

    await transporter.sendMail(infoMail);

    return { message: 'mail sent'};
  }
}

module.exports = AuthService;
