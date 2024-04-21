FROM node:16-alpine

# Define el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de paquete.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos y directorios restantes al directorio de trabajo del contenedor
COPY . .

# Expone el puerto que el servidor NestJS usará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
