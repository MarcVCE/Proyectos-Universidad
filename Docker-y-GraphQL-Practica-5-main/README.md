Para esta quinta práctica, se pide realizar un front para la siguiente aplicación
Star Wars's Graph | GraphOS Studio The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!

SWAPI GraphQL API


Este front contará de las siguientes páginas:

    Index: Tendrá botones que dirijan a las siguientes páginas
        películas
        planetas
        Vehículos
    Películas: Mostrará un listado de las películas
        Cada película será un enlace a su detalle
        Cada elemento deberá mostrar:
            El número de la película en grande y número romano. Mínimo 50px de fuente
            el nombre más pequeño
    Detalle Película: Se mostrará el detalle de la película siguiendo este formato
        Todos los campos deberán tener una label y no estarán formateados en formato lista
        Se pintarán estos datos
            Número de la película en formato romano
            Director
            título
            Fecha de salida
            Listado de caracteres
                Nombre
                Será un enlace al detalle del autor
    Planetas: Mostrará una lista con los planetas
        Se debe ver el número de planetas totales
        Cada elemento tendrá la siguiente información
            Círculo con color en función de su población
                Rojo: de 0 a 6000000
                Verde: de 6000000 a 4500000000
                Morado: resto de poblaciones
            Nombre
            Población
            Gravedad
    Vehículos: Mostrará un listado con los vehículos
        Se mostrará el número de vehículos totales
        Cada elemento tendrá la siguiente información
            Coste en créditos en grande
            Nombre
            Modelo
            Longitud
            Pasajeros
            Capacidad
    Detalle autor: Se mostrará el detalle del personaje
        Se mostrará siguiendo el estilo del detalle de una película
            Nombre
            cumpleaños
            color de los ojos
            género
            altura
            Nombre del planeta de nacimiento
            Nombre de la especie


Cosas a tener en cuenta:
Todos los elementos que pertenezcan a listados deberán tener el siguiente formato (rectángulo en vertical con sombreado)


 

IMPORTANTE:

    Se deberá crear una imagen de Docker donde se lanzara el front. (1 punto)
    Se tendrá en cuenta los estilos y el uso de CSS (no que sea bonito, pero si no se usa css no se obtendrá la máxima puntuación)
