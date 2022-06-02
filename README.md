## Descripción
API con autenticación de usuarios y creación de productos.
* Usando los Verbos: 
- POST para crear productos.
- GET para listar productos.
- PATCH para actualizar productos.
- DELETE para eliminar productos.
* Excepciones controladas.
* Uso de Http status.
* Guards para protecciones de endpoints.

## Instalación

Clonar 

```
https://github.com/juan963973/api-edge
```

```bash
$ npm install
```

## Correr la APP con este comando

```bash
$ npm run start:dev
```

## Puede entrar al swagger 
```bash
$ http://localhost:3000/doc/
```

## Swagger o Postman
Puede usar el Swagger o puede importar la colección de Postman que está en el mismo repositorio con el nombre de "api-edge.postman_collection.json".

# Modo de uso
Obs: Las rutas protegidas son las de products, sin el token no puede realizar acciones en sus endpoints.
1. Registre un usuario en el endpoint de "/auth/register".
2. Inicie sesión con el usuario registrado recientemente para obtener el token en el endpoint de "/auth/login".
3. Dé clic al botón Authorize en la parte superior derecha del swagger, ingrese el token el en campo de texto sin Bearer y dé clic en el botón Authorize
4. Ya puede usar los endpoints de products con los verbos correspodientes.

# Recursos Utilizados
1. NodeJs V14.18.0
2. Framework para NodeJs (Nest.js)
3. Passport para el token JWT
4. SQLite
5. Swagger
