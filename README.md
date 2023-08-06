# monkey-project

### Proyecto integrador de tecnologías

### Frontend: React, Redux, ApolloClient, PrimeReact.

El frontend es un desarrollo en React que se conecta a un endpoint GraphQL, el cual es consumido por el cliente ApolloClient. Este frontend simula una tienda en linea con la posibilidad de ver productos, iniciar sesión y agregar productos a un carrito de compra, si se ingresa como usuario. Sin embargo, ingresando desde el apartado de administrador se pueden agregar, modificar y/o eliminar productos, ademas de manipular algunos contenidos del portal. El estado global que mostrara datos de el usuario así como de el carrito de compras sera generado con Redux. En mayor parte el diseño de componentes es establecido mediante la librería PrimeReact.

Una vez que los contenedores de minio, redis y mongodb se encuentren funcionando, se puede levantar el frontend en ambiente de desarrollo con Node 16 y se sugiere tener instalado yarn para la gestión de los node_modules, pues Docker utiliza el archivo yarn.lock, para la construcción de la aplicación en el contenedor.

- Comandos recomendados:
  - cd frontend
  - yarn
  - yarn start

NOTA: El proyecto incluye un archivo "frontend/.env.example", donde se sugiere sustituir la variable REACT_APP_MAPS_API_KEY por la tu propia API key, esta puede ser generada fácilmente siguiendo el tutorial en: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=es-419.
Esta key hará funcionar el mapa en la sección de Contacto.

### Backend: Node, Express, ApolloServer, Mongoose, RedisClient, JWT, S3.

El backend es un desarrollo en Node con los frameworks Express y ApolloServer, siendo este un endpoint GraphQL que permite la manipulación, organización y validación de datos en documentos (modelos) almacenados en una base de datos no relacional (MongoDB). Ademas, este proyecto cuenta con un sistema de autenticación por JSON Web Token (JWT), dicha autenticación es tomada del proyecto: https://codevoweb.com/graphql-api-with-node-mongodb-jwt-authentication.

Una vez que los contenedores de minio, redis y mongodb se encuentren funcionando, se puede levantar el backend en ambiente de desarrollo con Node 16 y se sugiere tener instalado yarn para la gestión de los node_modules, pues Docker utiliza el archivo yarn.lock, para la construcción de la aplicación en el contenedor.

- Comandos recomendados:
  - cd backend
  - yarn
  - yarn run dev

NOTA: El proyecto incluye un archivo "backend/.env.example", donde se deben sustituir las variables JWT_ACCESS_PRIVATE_KEY y JWT_ACCESS_PUBLIC_KEY, por una llave privada y una llave publica generadas como lo indica el proyecto: https://codevoweb.com/graphql-api-with-node-mongodb-jwt-authentication.
También se sugiere cambiar las variables SMTP_USER y SMTP_PASSWORD, usando su propio usuario de Gmail y generando una contraseña para aplicaciones como se muestra en: https://support.google.com/accounts/answer/185833?hl=es.
Estas variables servirán para mandar correo de validación de nuevos usuarios, sin embargo siempre se puede ingresar con los usuarios por defecto:

    - user@example.com test1234
    - admin@example.com test1234

### Database & Storage: MongoDB, Redis, Minio.

### Docker.

Las diferentes tecnologías en este proyecto se integran mediante Docker Compose.

Para ejecutar este multi-contenedor solo es necesario tener instalado Docker y Docker Compose y lanzar el comando (docker-compose up), dentro de la ruta raíz del proyecto.

Los puertos que requiere el proyecto por defecto son los siguientes:

- frontend - 80
- backend - 4000
- minio - 9000 y 9002
- redis - 6379
- mongodb - 27031

NOTA: El proyecto incluye un archivo "./.env.example", donde se deben sustituir las variables de la manera que señalan las notas anteriores.

Este es un proyecto con propósitos educativos y algunos elementos como las imágenes utilizadas, pueden contar con derechos de autor.
