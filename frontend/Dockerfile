# Etapa de construcción
FROM node:14 as build

# Define el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de paquete.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos y directorios restantes al directorio de trabajo del contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para el servidor HTTP
EXPOSE 80

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
