# Este Dockerfile define un 'multistage build' de dos
# fases para construir y servir un proyecto en React
# Primera fase (construir app)
# Usar como base la imagen oficial de Node (v8)
FROM node:16-alpine as build
#Variables de entorno
ARG MINIO_URI
ENV REACT_APP_MINIO_URI=$MINIO_URI

ARG GRAPHQL_URI
ENV REACT_APP_GRAPHQL_URI=$GRAPHQL_URI

ARG MAPS_API_KEY
ENV REACT_APP_MAPS_API_KEY = $MAPS_API_KEY

# Copiar package.json y package-lock.json e instalar dependencias
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
# Copiar el resto del código y construir proyecto
COPY . .
RUN yarn run build
# Segunda fase (servidor web)
# Usar como base la imagen oficial de Nginx
FROM nginx:1.15-alpine
# Por default usar puerto 5000 (requisito de Auto DevOps)
ENV PORT 5000
# Copiar configuración de servidor web
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copiar distribuible a directorio configurado en nginx
COPY --from=build /app/build /www
# Declarar que este contenedor escucha en el puerto 5000
EXPOSE 5000
