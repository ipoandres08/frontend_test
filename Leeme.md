Para entorno de desarrollo
En terminal:
simplemente se ejecuta el comando "ng serve"

Entorno de produccion
En terminal:
- Ejecutamos el comando; "ng build" - > este mismo tomara todo nuestro codigo y lo transformara
 en codigo de javascript, asi el navegador pueda entender.

Posterior se creara una carpeta llamada "dist"

- Ahora para entorno de produccion tenemos que ejecutar el comando
	"ng build --prod"
 esto hara que los archivos del dist esten mas comprimidos.

- Instalamos una herrmienta de node
"now", para esto ejecutamos el comando "npm i -g now"
Esta herramienta va a publicar nuestra aplicacion de una manera rapida.

- Para que la herramienta sea publicada, se necesita estar dentro de la carpeta del dist
  y en la terminal ejecutar el comando "now"
