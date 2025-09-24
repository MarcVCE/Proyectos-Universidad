Para esta practica voluntaria se pide desarrollar un blog.

Se usará la siguiente API: https://practicaopcional.deno.dev/graphql

IMPORTANTE: En caso de no poder acceder, os dejo el repositorio del servidor. Os lo podéis clonar y correr en local:
GitHub - Fernando2706/urban-winner Contribute to Fernando2706/urban-winner development by creating an account on GitHub. GitHub


Se piden las siguientes paginas:

    index: En esta pagina se mostraran las 3 ultimas entradas (posts) del blog
        Cada entrada será clicable
        Se deberán mostrar en fila
    create/user: En esta página habra un formulario para crear un usuario
    create/post: En esta pagina habrá un formulario para crear un post
    posts/: En esta página se encontraran todos los posts. Deberá estar paginado
        Cada post será clicable y te llevara a su detalle
    posts/[id]: En esta pagina estará el post
        Constara de dos partes
            Titulo y cuerpo del post
            Caja de comentarios
                Habrá un formulario para añadir un nuevo comentario. Se deberá ver el nuevo comentario en la página
                Después del formulario se encontraran todos los comentarios restantes. Debéis poner el numero de comentarios del post
                En cada comentario/respuesta de mostrara el nombre/email y debajo el comentario


En las paginas de index y posts se deberá mostrar cada elemento siguiendo esta estructura:

    Titulo
    Imagen (150px x 150px) se deberá ver la imagen entera
    Enlace "Ver más"


Puntos extras:

    El cuerpo del post se podrá estilizar y luego en el detalle se vera estilizado. +1 Punto
        Ejemplo: tener etiquetas html o usar Markdown
    Se podrán responder a los comentarios, cada respuesta a los comentarios deberá tener un margen a la izquierda. +0.5 Puntos
