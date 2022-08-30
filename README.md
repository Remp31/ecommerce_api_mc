# Ecommerce-backendAvanzado
Proyecto desarrollado en el módulo de backend avanzado. Master en coding DEV.F

# Descripción
​
    Desarrollar una API RESTFULL con nodejs y express, usando una base de mongodb
    de un e-commerce.
​
# Pseudo requerimientos
​
- El sistema cuenta con 3 roles
  - Administrador
  - Cliente
  - Vendedor
- Los clientes se registran llenando el formulario com los siguientes datos:
​
  - Nombre
  - Apellido
  - Dirección 1 de entrega
  - Calle
  - Localidad
  - No. Exterior
  - No. interior (optional)
  - Entre calles
  - Ciudad
  - Pais
  - zip code
  - Referencias
  - Correo
  - Contraseña (8 caracteres min, 1 mayus, 1 minus, 1 signo)
  - Teléfono
  - Contactos personales (este puede estar vacío)
    NOTA: Todos los campos son obligatorios
​
- Para registrar a un vendedor se requieren los siguientes datos:
​
  - Nombre
  - Apellidos
  - Teléfono
  - Correo
  - Contraseña (con los mimso criterios que el cliente)
​
- Los nuevos administradores pueden ser registrados por un admin ya creado con anterioridad
- Los campos para registrar un admin son
  - Nombre
  - Apellidos
  - Teléfono
  - Correo
  - Contraseña (mismos criterios)
- Los productos solo pueden ser registrados por los Vendedores y para registrar un nuevo producto se requieren los siguientes campos
  - Nombre del producto
  - Descripción
  - Especificaciones
  - Categoría (debe haber una categoria creada previamente)
  - Precio unitario
  - Cantidad en almacén
  - Fotos del producto
- Los clientes pueden comprar varios productos a la vez, esto gracias a un carrito de compras
​
- Los clientes pueden crear un carrito de compras y solo podrán tener un carrito activo simultaneo
- Crear un endpoint para realizar un pago el cual pida el id del carrito
- Solo puedo realizar el pago de mis propios carritos de compra
- Se pueden editar los artículos agregados al carrito de compra
- Los datos del carrito son:
  - Total (default 0)
  - Fecha de pago (default null)
  - Artículos [{
    artículo,
    cantidad
    }]
- Cada vez que edita (crear editar o eliminar) un artículo del carrito, se debe calcular de nuevo el total del mismo
- Los clientes no pueden encontrar productos que no tengan stock en inventario
- El cliente puede ver su historial de compras
- Los precios de los artículos de las compras pasadas, no se verán afectados aunque los precios sean editados directamente de los productos
- Al realizar un pago de un carrito, se puede ingresar un cupón de descuento, los son registrados previamente por los mismos vendedores}
- Existen dos tipos de cupones, % y monto
- Los clientes pueden buscar productos, filtrándolos y ordenándolos por
  - Nombre
  - Rango de precios
  - Categoría
  - Descripción
  - Características
- Los vendedores pueden crear, editar y borrar productos
- Los administradores pueden buscar a los vendedores y ordenarlos por número de ventas
- Los adminstradores pueden desactivar/borrar vendedores
- Los clientes pueden dejar un comentario en los productos
- Los clientes pueden ver los comentarios dejados por los otros clientes al buscar un producto en específico
- Las sesiones de los diferentes roles será por medio de la utilización de un token
​
  1.- Crear estructura del proyecto
  2.- Identificar todos los modelos
  3.- 1 Endpoint a la vez (identificar endpoint de entrada