Para esta cuarta practica se pide crear una web para el siguiente back



Importante el back se debera ejecutar en local siguiendo las instrucciones del README.md

Se piden las siguientes paginas:

    index. En esta pagina se encontraran 3 botones siguiendo el siguiente estilo:
        Cada boton llevara a un listado distinto
        https://dribbble.com/shots/15025442/attachments/6749092?mode=media (Boton Submit)
    books: En esta pagina se mostrara un listado de todos los libros (debe permitir paginación)
        Se debe mostrar el contenido en filas y columnas maximo 3 elementos por filas 
        https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout
        Se mostrara el titulo y el numero de paginas y un color de 100px x 100px simulando la portada: Extra color aleatorio por cada entrada
        Sera un enlace al detalle del libro
    users: En esta pagina se mostrara un listado de todos los users: Extra permite paginacion
        Se debe mostrar el contenido en filas y columnas maximo 3 elementos por filas 
        Se mostrara el EMAIL y el Nombre
        https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout
    authors: En esta pagina se mostrara un listado de todos los autores: Extra permite paginacion
        Se debe mostrar el contenido en filas y columnas maximo 3 elementos por filas 
        https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout
        Se mostrara el nombre del autor
        Sera un enlace al detalle del autor
    Detalle del libro:
        Se mostrara todos los datos que devuelva API
        Se debera buscar al autor del id que devuelva y pintar su nombre
    Detalle del autor:
        Se debera mostrar todos los datos que devuelva el API
        Se debera mostrar el titulo de todos los libros del autor
    Las paginas que contienen listados deberan tener un buton en la esquina superior izquerda que lleve a la creacion respectivamente de
        Authors
        Users
        Books

Datos a tener en cuenta:

    Todo sera Client Side Rendering
    Se debera mostrar un Spinner bloqueando la interaccion en la pagina cuando se este cargando
    Se DEBERAN CONTROLAR todos los errores de API
