# monkey-project

### Proyecto integrador de tecnologías

- Frontend: React, Redux, ApolloClient, PrimeReact, Uppy Companion.

  El frontend es un desarrollo en React que se conecta a un endpoint GraphQL, el cual es consumido por el cliente ApolloClient. Este frontend simula una tienda en linea con la posibilidad de ver productos, iniciar sesión y agregar productos a un carrito de compra, si se ingresa como usuario. Sin embargo, ingresando desde el apartado de administrador se pueden agregar, modificar y/o eliminar productos, ademas de manipular algunos contenidos del portal. El estado global que mostrara datos de el usuario así como de el carrito de compras sera generado con Redux. En mayor parte el diseño de componentes es establecido mediante la librería PrimeReact.

  Se puede levantar el frontend en ambiente de desarrollo con Node 16 y se sugiere tener instalado yarn para la gestión de los node_modules, pues Docker utiliza el archivo yarn.lock, para la construcción de la aplicación en el contenedor.

  - Comandos recomendados:
    - cd frontend
    - yarn
    - yarn start

- Backend: Node, Express, ApolloServer, Mongoose, RedisClient, JWT.

  El backend es un desarrollo en Node con los frameworks Express y ApolloServer, siendo este un endpoint GraphQL que permite la manipulación, organización y validación de datos en documentos (modelos) almacenados en una base de datos no relacional (MongoDB). Ademas, este proyecto cuenta con un sistema de autenticación por Json Web Token (JWT), dicha autenticación es tomada del proyecto (https://codevoweb.com/graphql-api-with-node-mongodb-jwt-authentication).

  Se puede levantar el backend en ambiente de desarrollo con Node 16 y se sugiere tener instalado yarn para la gestión de los node_modules, pues Docker utiliza el archivo yarn.lock, para la construcción de la aplicación en el contenedor.

  - Comandos recomendados:
    - cd backend
    - yarn
    - yarn run dev

- Database & Storage: MongoDB, Redis, Minio.

- Docker.

  Las diferentes tecnologías en este proyecto se integran mediante Docker Compose.

  Para ejecutar este multi-contenedor solo es necesario tener instalado Docker y Docker Compose y lanzar el comando (docker-compose up), dentro de la ruta raíz del proyecto.

  Los puertos que requiere el proyecto por defecto son los siguientes:

  - fronend - 80
  - backend - 4000
  - companion - 5002
  - minio - 9000 y 9002
  - redis - 6379
  - mongodb - 27031

Este es un proyecto con propósitos educativos y algunos elementos como las imágenes utilizadas, pueden contar con derechos de autor.
