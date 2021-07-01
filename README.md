# backend-gcc
 backend de la plataforma web Gestión Cuidados Caninos (GCC) programado con JavaScript y con motor de BD SQL Server.

# .env
Crear un archivo .env que aparezca la siguiente información

PORT=3000
DB_USER=admingcc
DB_PASSWORD=gestion123
DB_SERVER=localhost
DB_DATABASE=GCC
DB_PORT=1433

# Instalación back-end

npm i 
npm run dev

# SQL Server

Puede interactuar con los archivos .http enviando información a la base de datos.

Para descargar y configurar SQL Server (Versión gratuita y de desarrollador):

https://www.microsoft.com/es-es/sql-server/sql-server-downloads

Cómo instalar correctamente:

https://neodata.mx/guias/2020/12/1/instalar-sql-server-201-express-para-neodata

Una vez instalada y configurada puede instalar el medio de gestión de datos.

Para descargar SQL Server Management Studio:

https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15

# Creación de Usuario

Dentro de SQL Server Management Studio, dentro de la instancia creada, clickeé en Security, y luego click derecho en Logins y a la opción de New Login...
Dentro de la ventana, seleccione la opción de SQL Server Authetication, en login name: admingcc y en password: gestion123, confirme la password.
Por último, en las opicones de Select a page, en Server Roles, coloque un tick en sysadmin y luego en OK.

# Tablas y base de datos

Último paso, copie y pegue en una nueva consulta la query que está esta carpeta nombrada como 'database.sql' y execute.

# Problemas

Si tiene problemas con un 'request' undefinied al abrir ejemplo localhost:3000/servicio, reinicie su ordenador o los servicios de sql server.

:)