# HospitalLaFe

RUN:

- npm run dev -> comando para correr en desarrollo
- npm run build -> comando para buildear
- npm run clean -> comando para clean build
- npm run start -> comando para start
- npm run test -> comando para start

# Rutas

Documentación de TFG apartado API Server Communication.

<https://documenter.getpostman.com/view/18527009/2s8YswRCEP>

## Users

-------------------------------------------------
Rutas relacionadas con Usuarios.

### Auth

Rutas relacionadas con la autentificación.

**<h3 style="color:#FFD903"> ✔️ POST: SIGNUP</h3>**

```JSON
localhost:7878/signup
Crear un usuario.

Bodyraw (json)
json
{
  "username": "ho1la1",
  "password": "hol1a1",
  "email": "hol11a",
  "name": "h1ola"
}
```

**<h3 style="color:#FFD903"> ✔️ POST: LOGIN</h3>**

```JSON
localhost:7878/login
Inicio de sesión de usuario, nos devuelve un JWT

Bodyraw (json)
json
{
  "email": "test",
  "password": "test"
}
```

**<h3 style="color:#4FFF03"> ✔️ GET: Get All Users</h3>**

```JSON
localhost:7878/user
Obtener todas las medidas.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
```

**<h3 style="color:#4FFF03"> ✔️ GET: Get User By ID</h3>**

```JSON
localhost:7878/user/637cee21f941a8adc95ab303
Obtener usuario según su ID.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
```

**<h3 style="color:#FF0303"> ✔️ DEL: Delete User</h3>**

```JSON
localhost:7878/user/637cee21f941a8adc95ab303
Eliminar un usuario.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
```

**<h3 style="color:#FFD903"> ✔️ POST:  Post User</h3>**

```JSON
localhost:7878/users
Crear un usuario. En desuso debido a que se deben crear con Signup.

Request Headers:

    - Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo

Bodyraw (json)
json
{
  "username": "danielei",
  "password": "22312212",
  "email": "dbs99@gmail.com",
  "name": "Daniel"
}
```

**<h3 style="color:#03D1FF"> ✔️ PATCH:  User Edit</h3>**

```JSON
localhost:7878/user/637d01ab4778f16361ad489b
Actualizar un usuario.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
Bodyraw (json)
json
{
  "username": "121",
  "surname": "s2111221212121asd",
  "dni": "2133s",
  "password": "2213123123123",
  "email": "12asd31",
  "name": "213123"
}
```

## Measures

-------------------------------------------------

Rutas relacionadas con las medidas.
**<h3 style="color:#4FFF03"> ✔️ GET: Measure Get </h3>**

```JSON
localhost:7878/measure
Obtiene todas las medidas de la BD.

Request Headers: 
- Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
```

**<h3 style="color:#FFD903"> ✔️ POST:  Measure Post</h3>**

```JSON
localhost:7878/measure
Crea una medida con sus datos.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
Bodyraw (json)
json
{
  "username": "1",
  "surname": "1",
  "dni": "3",
  "password": "2",
  "email": "1",
  "name": "1"
}
```

**<h3 style="color:#03D1FF"> ✔️ PATCH:  Measure Edit</h3>**

```JSON
localhost:7878/measure/6383985d98c300aa7d752f84
Edita una medida obtenida anteriormente.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
Bodyraw (json)
json
{
  "username": "121",
  "surname": "sasd",
  "dni": "2133s",
  "password": "2123",
  "email": "1231",
  "name": "1231"
}
```

**<h3 style="color:#FF0303"> ✔️ DEL: Delete Measure</h3>**

```JSON
localhost:7878/measure/637d1139437dfca24c121dac
Elimina una medida indicando su id.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
```

**<h3 style="color:#4FFF03"> ✔️ GET:Get Measure By ID</h3>**

```JSON
localhost:7878/measure/637d1139437dfca24c121dac
Obtiene una medida concreta según un id.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
Machine
Rutas relacionadas con el proceso de la máquina.
```

**<h3 style="color:#FFD903"> ✔️ POST:  Start Machine OLD VERSION  </h3>**

```JSON
localhost:7878/start
Inicia el proceso de la maquina.

Request Headers
Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
Content-Type
application/json
```

**<h3 style="color:#FFD903"> ✔️ POST:  Stop Machine OLD VERSION </h3>**

```JSON
localhost:7878/stop
Para el proceso de la maquina.

Request Headers
- Authorization
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMDFhYjQ3NzhmMTYzNjFhZDQ4OWIiLCJuYW1lIjoidGVzdCIsImlhdCI6MTY2OTU2NjYwOCwiZXhwIjoxNjY5NzM5NDA4fQ.TDpgIe_CDDShHe3KwtxSegEyqAhKNyyFdub4OVEwyIo
- Content-Type
application/json
```

**<h3 style="color:#FFD903"> ✔️ GET:  Server Test</h3>**

```JSON
localhost:7878
Test del servidor.
```
