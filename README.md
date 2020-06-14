# edge_test
Test para edge

# Instalación
Clonar el proyecto y ejecutar el servidor node:
ingresar al proyecto:
`cd ./edge_test`
iniciar el servidor:
`npm start`

# Postman
Para cargar el Postman importar el archivo a postman desde la siguiente ruta:

`edge_test/extra/EDGE_TEST.postman_collection.json`

Una vez importado encontraremos la carpeta EDGE_TEST
Para ejecutar las api primeramente ejecutar el path en Postman que se encuentra en ### usuario/token ###
Los datos de prueba ya se encuentran en el body, solo es cuestión de ejecutarlo.

Esto es para generar el token
Una vez ejecutado el path, nos devuelve el token, ahora podemos hacer las consultas a los Posts

para todos los datos ya existen datos con proceso satisfactorio, pero previamente en el header agregar el value

`Authorization: "token generado en /token"`

Repetir esto para las demás solicitudes

# Swagger
El documento swagger se encuentra en la carpeta:
`edge_test/extra/swagger.yaml`
Importamos el documento en la siguiente url para probarla: 

https://editor.swagger.io/

allí podemos realizar los mismos pasos que hicimos en el Postman, primeramente generando el token
ademas de poder utilizar los datos que tenemos en el postman para ejecutar las peticiones
para generar el token los datos genericos son:
`{
  "name": "edge",
  "password": "123"
}`

Cualquier consulta comunicar.
