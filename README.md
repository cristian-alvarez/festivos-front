# Festivos App

## Descripción

Aplicación React JS que consume la API de días festivos argentinos del año 2020, guarda los feriados en la base de datos
local del servidor para su posterior edición, eliminación y visualización.

La aplicación consume y guarda la lista de días en caso de no encontrar algún día guardado.

También permite gestionar usuarios y contiene un formulario de registron y uno de login.

Maneja autenticación con JWT.

Los estilos y maquetación se diseñaron con la ayuda de la librería Ant Design.

## Instalación

Como primer paso, es necesario tener instalada alguna extensión en el navegador que permita enviar peticiones de dominio cruzado CORS entre la app y el servidor back.Activar esta extensión cuando se vaya a usar la app.

Descarga o clona el presente repositorio. Luego en el directorio raíz de la aplicación ejecutar el comando "yarn" para descargar todas las dependencias, una alternativa a este comando sería "npm update". Repetir estos comandos en caso de que la conexión falle u ocurra un error que no permita descargar las librerias.

Una vez esté creada la carpeta node_modules y el servidor back (junto con el motor mongoDB) estén arriba, disponibles y listos, entonces ejecutar "yarn dev".

Al levantar el servidor de la aplicación front, ingresar a la url http://localhost:3000 (en caso de que no se inicie la aplicación de manera automática en el navegador). También es posible tener que refrescar la pestaña del navegador una vez.

## Uso

Crear un usuario mediante el formulario de registro. Se debe ingresar un correo con un formato válido y una contraseña con un tamaño mínimo de seis caracteres.

Si la creación del usuario es correcta, ya se pueden usar sus credenciales para ingresar a la aplicación a través del formulario de login.

Una vez logueados ingresarán al módulo administrador donde se podrán gestionar tanto días festivos como usuarios

## Licensia
[MIT](https://choosealicense.com/licenses/mit/)