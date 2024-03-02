# Huellitas API

[Documentation in Spanish](README_es.md)

## Description

This project is an API for the Huellitas application. It provides endpoints to manage users and pets.

## Installation

1. Clone the repository.

2. Run the command `npm install` to install the dependencies.

3. Run the command `npm run start` to start the server in development mode.

## Configuration

1. Copy the .env.example file to a new file called .env and fill in the necessary environment variables.

2. Run docker-compose up to start the database.

## Endpoints

### Users

- **GET /api/v1/users :** Gets a list of all users.

- **POST /api/v1/users :** Registers a new user.

- **GET /api/v1/users/:id :** Gets the details of a user.

- **PATCH /api/v1/users/:id :** Updates a user.

- **DELETE /api/v1/users/:id :** Deletes a user.

### Pets

- **GET /api/v1/pets :** Gets a list of all pets.

- **POST /api/v1/pets :** Creates a new pet.

- **GET /api/v1/pets/:id :** Gets the details of a pet.

- **PATCH /api/v1/pets/:id :** Updates a pet.

- **DELETE /api/v1/pets/:id :** Deletes a pet.

### Authentication

- **POST /api/v1/auth/login :** Logs in with an existing user.

- **POST /api/v1/auth/recovery :** Sends an email with a link to reset the password.

- **POST /api/v1/auth/change-password :** Resets a user's password based on a token sent from recovery.

- **POST /api/v1/auth/change-password-local :** Resets a user's password when they are logged in.

## Contribution

If you wish to contribute to this project, please do not modify the package.json file. Feel free to fork the project and send a pull request.

## License

This project is licensed under the MIT license. For more details, please read the LICENSE file.

## Author

[Victor Alejandro Díaz Jáuregui](https://twitter.com/v_alediaz_ "Victor Alejandro Díaz Jáuregui")

### Contact

If you have any questions or concerns about Huellitas, do not hesitate to contact me through my Twitter profile or by sending me an email at:

<div align="center" >
 <a href="https://twitter.com/v_alediaz_" target="_blank">
   <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" width="50" height="50">
 </a>
 <a href="mailto:victor.diaz.jauregui@mi.unc.edu.ar" target="_blank">
   <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Gmail" width="50" height="50">
 </a>
</div>
