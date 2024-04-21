# Peya Challenge

## Descripción
Este proyecto forma parte del desafío de autenticación de usuarios usando el stack MERN, integrando MongoDB, ExpressJS (con NestJS), React con TypeScript, y NodeJS. El backend gestiona la autenticación y el almacenamiento de datos de usuario, mientras que el frontend proporciona interfaces para el registro, inicio de sesión y visualización del perfil del usuario.

## Tecnologías Utilizadas
- **Node.js con NestJS (backend)**: Utilizado para crear una API robusta.
- **React (frontend)**: Utilizado para construir una SPA (Single Page Application) interactiva.
- **Docker**: Utilizado para contenerizar la aplicación y asegurar la uniformidad entre diferentes entornos de desarrollo y producción.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los datos de los usuarios.
- **TailwindCSS**: Framework de CSS para estilos rápidos y responsivos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB que facilita la definición de esquemas y la interacción con la base de datos.

## Estructura del Proyecto
Descripción breve de cómo está organizado el proyecto:
- `/frontend`: Contiene la interfaz de usuario desarrollada con React.
- `/backend`: Contiene la API desarrollada con NestJS.
- `docker-compose.yml`: Configuración para la orquestación de los contenedores Docker.

## Cómo Ejecutar Localmente
Instrucciones paso a paso para clonar y ejecutar el proyecto:

1. **Clonar el Repositorio**

2. **Ejecutar con Docker Compose**
- Deberías tener Docker y Docker Compose instalados en tu sistema. Luego, ejecutar:
`docker-compose up --build`
Esto va a levantar tanto el backend en el puerto 3000 como el frontend en el puerto 8080.

4. **Acceder a la Aplicación**
- Para el frontend: Abrir `http://localhost:8080` en el navegador
- Backend: El backend estará accesible en `http://localhost:3000` y se puede ver la documentación con Swagger desde `http://localhost:3000/api`

## Funcionalidades
- Autenticación de Usuarios: Registro, inicio de sesión y acceso a la página de perfil protegida.
- Swagger: Documentación y prueba de la API disponible a través de Swagger.
- Responsive Design: Uso de TailwindCSS para asegurar que la aplicación sea responsiva y adaptable a diferentes tamaños de pantalla.
