# empleadoAPI

La base de datos usada para este proyecto es postgres
La carpeta backend contiene todo lo relacionado a la api y la conexion a base de datos (se deja archivo guia de creacion del base de datos postgres), en lo posible tener la base de datos creada y su tabla de empleados.


** Nota debe recordar que las credenciales para el acceso ala base de datos deben cambiarse en la subcarpeta controller el archivo index.js


Para correr el backend debe como requisitos tener instalado NodeJs preferiblemente de la v16 en adelante (version usada en este proyecto).


Debe contar con npm para la instalacion de paquetes y dependencias del proyecto v8.5 usada en este proyecto.
Una vez estos requisitos se cumplan debe ubicar su consola dentro del carpeta backend y utilizar el comando:


    npm para instalacion de dependencias del proyecto


Si no aparecen errores en las dependencias el proyecto se ejecutaria con el comando:


    node index.js


Debera ver el siguiente log que le indica que puede hacer uso del enlace http://localhost:3000/empleados


    server running fine on port 3000


Asi finalizaria la ejecucion del backend


Para el frontend se debe contar con una version de angular cli en lo posible la 13.3 utilizada en este proyecto
de no contar con ella se puede usar el comando:


    npm install -g @angular/cli


Una vez descargado puede ejecutar el comando:


    npm install o npm i


Esto descargara dependencias para el proyecto en frontend


Luego puede usar el comando:


    ng serve para ejecutar el proyecto


Aparecera un mensaje que dice al final:


     Compiled successfully.


Podra abrir el link:


    http://localhost:4200/

    
Donde encontrara el formulario de creacion y una tabla de read que inicialmente estara vacia, puede usar los comando previamente mencionados de database para poder tener una vista del proyecto en funcion de prueba de concepto.