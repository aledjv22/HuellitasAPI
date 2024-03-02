# Huellitas API

[Documentación en ingles](README.md)

## Descripción

Este proyecto es una API para la aplicación Huellitas. Proporciona endpoints para gestionar usuarios y mascotas.

## Instalación

1. Clona el repositorio.

2. Ejecuta el comando `npm install` para instalar las dependencias.

3. Ejecuta el comando `npm run start` para iniciar el servidor en modo de desarrollo.

## Configuración

1. Copia el archivo .env.example a un nuevo archivo llamado .env y rellena las variables de entorno necesarias.

2. Ejecuta docker-compose up para iniciar la base de datos.

## Endpoints

### Usuarios

- **GET /api/v1/users :** Obtiene una lista de todos los usuarios.

- **POST /api/v1/users :** Registra un nuevo usuario.

- **GET /api/v1/users/:id :** Obtiene los detalles de un usuario.

- **PATCH /api/v1/users/:id :** Actualiza un usuario.

- **DELETE /api/v1/users/:id :** Elimina un usuario.

### Mascotas

- **GET /api/v1/pets :** Obtiene una lista de todas las mascotas.

- **POST /api/v1/pets :** Crea una nueva mascota.

- **GET /api/v1/pets/:id :** Obtiene los detalles de una mascota.

- **PATCH /api/v1/pets/:id :** Actualiza una mascota.

- **DELETE /api/v1/pets/:id :** Elimina una mascota.

### Autenticación

- **POST /api/v1/auth/login :** Inicia sesión con un usuario existente.

- **POST /api/v1/auth/recovery :** Envía un correo electrónico con un enlace para restablecer la contraseña.

- **POST /api/v1/auth/change-password :** Restablece la contraseña de un usuario en base a un token enviado del recovery.
s
- **POST /api/v1/auth/change-password-local :** Restablece la contraseña de un usuario cuando esta logueado.

## Contribución

Si deseas contribuir a este proyecto, por favor no modifiques el archivo package.json. Siéntete libre de hacer un fork del proyecto y enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Para más detalles, por favor lee el archivo LICENSE.

## Autor

[Victor Alejandro Díaz Jáuregui](https://twitter.com/v_alediaz_ "Victor Alejandro Díaz Jáuregui")

### Contacto

Si tienes alguna pregunta o inquietud acerca de Huellitas, no dudes en contactarme a través de mi perfil de Twitter o enviándome un correo electrónico a:

<div align="center" >
 <a href="https://twitter.com/v_alediaz_" target="_blank">
   <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" width="50" height="50">
 </a>
 <a href="mailto:victor.diaz.jauregui@mi.unc.edu.ar" target="_blank">
   <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Gmail" width="50" height="50">
 </a>
</div>
