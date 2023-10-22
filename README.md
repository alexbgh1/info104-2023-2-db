# info104-2023-2-db
Base de datos mongodb de "comentarios".

## URL
**https://info104-2023-2-db.onrender.com/api/comentarios**

## Métodos

Acá están algunos end-points y los métodos (GET, POST, DELETE) para realizar consultas. Cuando realizamos una petición a cierta **url** en prácticamente cualquier lenguaje de programación, podemos establecer el método que queremos utilizar.

- **GET:** Para recibir información del servidor, ej: recibir todos los comentarios.
- **POST:** Para enviar información generalmente crear algún tipo de dato, ej: crear un comentario.
- **DELETE:** para eliminar un elemento, ej: borrar un comentario.
- ... existen más pero no están implementados (**PUT:** actualizar un dato, [etc](https://developer.mozilla.org/es/docs/Web/HTTP/Methods) )

### GET

Quiero buscar todos los comentarios

```
https://info104-2023-2-db.onrender.com/api/comentarios
```

### GET query param: idApp

Quiero buscar todos los comentarios de mi grupo "test"

```
https://info104-2023-2-db.onrender.com/api/comentarios?idApp=test
```

> **_NOTA:_**  Query significa "consulta", cuando se habla de "query param" generalmente se hace referencia a parámetros de búsqueda. Un ejemplo a esto es cuando en una **url**
> vemos una sintáxis como:<br>
> www google com/**search?q=mi+busqueda**

### GET 1

Quiero buscar un comentario con este id: **6530223106bd02811987fdbe**

```
https://info104-2023-2-db.onrender.com/api/comentarios/6530223106bd02811987fdbe
```

### DELETE

Quiero eliminar un comentario con este id: **6530223106bd02811987fdbe**

```
https://info104-2023-2-db.onrender.com/api/comentarios/6530223106bd02811987fdbe
```

### POST

Quiero crear un comentario con esta información (archivo **json**).

```json
{
  "idApp":"test",
  "idItem": "item-1",
  "usuario": "test",
  "enRespuestaA": null,
  "timestamp": 1697751689623
}
```
```
https://info104-2023-2-db.onrender.com/api/comentarios
```
