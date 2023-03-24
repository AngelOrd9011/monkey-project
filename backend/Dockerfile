# Usar como base la imagen oficial de Node v10
FROM node:16-slim

# ARG MONGODB_URI
# ENV MONGODB_URI=${MONGODB_URI}

#directorio de trabajo
WORKDIR /app
# Copiar package.json y yarn.lock y codigo fuente e instalar dependencias NPM
COPY ./config ./config
COPY ./src ./src
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
RUN yarn 
ENV PORT 5000
# Al iniciar un contenedor, ejecutar script start del paquete NPM
# Declarar que este contenedor escucha en el puerto 5000
EXPOSE 5000
CMD /bin/bash -c "yarn start"
