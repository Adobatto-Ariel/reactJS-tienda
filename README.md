#Este proyecto está inspirado en la PyMe de un colega "MV KYDEX".
Se dedica a la venta de holster y equipamiento táctico militar, para personal de fuerzas armadas y civiles.

Los colores y fondos de mi proyecto, son acordes a las solicitudes de mi colega.

#Agregue las siguientes dependencias:
-Bootstrap : para iconos y templates
-sweetalert2 : para la personalización de alertas por stock
#También agregue
-fontawesome : para íconos, pero no supe usarla. Leí documentación oficial, pero aún así no pude solucionarlo.

Creé varios componentes, y decidí separarlos en carpetas para mantenerlo ordenado.
Para la navegación por categorías, cree un nuevo componente llamado ItemCategory, el cual reutiliza a ItemList y sus estilos.
Se crearon las funciones en el context utilizadas en el carrito y orden de compra.
Confeccione una orden de compra en la cual, previo a la confirmación de la compra, el usuario debe ingresar sus datos en un formulario.

Los datos de los productos como así también las ordenes de compra son almacenados en Firestore.

El proyecto apunta específicamente a la creación de la tienda en línea junto a sus funcionalidades.

🎬[Recorrido para una compra](https://res.cloudinary.com/arieladobatto/video/upload/v1660094942/videoRecorrido/video-compra_rmnpje.mp4)
