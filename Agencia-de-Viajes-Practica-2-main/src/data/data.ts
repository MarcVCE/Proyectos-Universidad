type DataProps = {
    id:string;
    titulo:string;
    descripcion_corta:string;
    descripcion_larga:string;
    imagen_corta:string;
    imagen_larga:string;
}

export const destinos:DataProps[] = [
    {
        id:"1",
        titulo:"Madrid",
        descripcion_corta:"Alberga las sedes de gran parte de las empresas nacionales e internacionales",
        descripcion_larga:"Además de sus conocidos museos, sus animadas avenidas con todo tipo de tiendas, sus restaurantes de cocinas del mundo o su vida nocturna incomparable, Madrid sorprende con tranquilos rincones históricos llenos de encanto por los que pasear, con centenarias tabernas castizas de tradición familiar en las que los amigos se encuentran para tomar algo, con barrios de todos los estilos y con centros culturales alternativos a los circuitos más turísticos. Madrid tiene una autenticidad difícil de igualar. Es hospitalaria y diversa. Madrid es, sin duda, una de las ciudades más interesantes de Europa.",
        imagen_corta: "https://media.discordapp.net/attachments/997268061482647653/1077973994789163050/Peter78987943934968_Madrid_44f59ca6-9dc4-42bf-a582-f74e768e9d82.png?width=578&height=578",
        imagen_larga :"https://media.discordapp.net/attachments/997268061482647653/1077973994789163050/Peter78987943934968_Madrid_44f59ca6-9dc4-42bf-a582-f74e768e9d82.png?width=578&height=578"
    },

    {
        id:"2",
        titulo:"Roma",
        descripcion_corta:"Una de las ciudades con más historia de Europa",
        descripcion_larga: "Roma es una ciudad que atrae visitantes de todo el mundo gracias a sus impresionantes monumentos y restos arqueológicos procedentes de la Antigüedad. Existen infinidad de razones para visitar Roma, enamorarse de la ciudad y desear volver a ella. La gastronomía y su animado ambiente son algunas de ellas.Roma es el recuerdo de los gladiadores luchando a vida o muerte en el Coliseo, las cuadrigas emprendiendo veloces carreras en el Circo Máximo, y también la visión de los sabios romanos paseando por el foro mientras conversaban sobre la democracia.",
        imagen_corta: "https://media.discordapp.net/attachments/997268061482647653/1077975863309639720/Peter78987943934968_roma_25bbb468-13bd-4eb6-827e-a6306c776a12.png?width=578&height=578",
        imagen_larga :"https://media.discordapp.net/attachments/997268061482647653/1077975863309639720/Peter78987943934968_roma_25bbb468-13bd-4eb6-827e-a6306c776a12.png?width=578&height=578"
    },

    {
        id:"3",
        titulo:"Beijing",
        descripcion_corta:"El corazón y el alma de la política china, con grandes lugares a visitar.",
        descripcion_larga:"Beijing es una de las ciudades más grandes de China, además es el eje principal de las comunicaciones, cuenta con una excelente red de líneas de ferrocarriles, autopistas y carreteras. Es considerada como el corazón cultural, político y social de China.Beijing es una ciudad con una larga historia, alrededor de la ciudad existen muchos vestigios de asentamientos humanos que se ubicaron en el lugar, desde mil años a. C., debido a su situación estratégica, desde tiempos remotos ha desempeñado una función defensiva.",
        imagen_corta: "https://media.discordapp.net/ephemeral-attachments/997268061482647653/1078025229844095077/grid_0.webp?width=578&height=578",
        imagen_larga :"https://media.discordapp.net/ephemeral-attachments/997268061482647653/1078025229844095077/grid_0.webp?width=578&height=578"
    },

    {
        id:"4",
        titulo:"Moscu",
        descripcion_corta:"La ciudad más poblada de Rusia y Europa.",
        descripcion_larga:"Moscú, capital de Rusia, es una de las ciudades más vibrantes y sorprendentes de Europa oriental. Ubicada a orillas del río Moscova, sus edificios y monumentos permiten viajar al pasado comunista y zarista, mientras que museos, teatros y galerías de arte hacen de esta ciudad uno de los centros culturales más importantes del mundo.Su maravillosa arquitectura religiosa, concurridas zonas comerciales, vibrantes pubs y restaurantes,  y fantásticos espacios verdes convierten  la visita a esta ciudad en una experiencia asombrosa e inolvidable.",
        imagen_corta: "https://media.discordapp.net/ephemeral-attachments/997268061482647653/1078026449434447932/grid_0.webp?width=578&height=578",
        imagen_larga :"https://media.discordapp.net/ephemeral-attachments/997268061482647653/1078026449434447932/grid_0.webp?width=578&height=578"
    },

    {
        id:"5",
        titulo:"Canberra",
        descripcion_corta:"Capital y una de las ciudades más desconocidas de Australia",
        descripcion_larga:"Canberra no sólo es la capital más joven de Australia sino también la más sorprendente. La capital federal alberga muchas de las instituciones culturales del país, pero también es sede de una próspera comunidad artística y una animada escena de bares y sitios donde comer. Con su diversa mezcla de atracciones artificiales y naturales, Canberra es un lugar para descubrir, aprender y divertirse.Es vital una visita al monumento australiano a la guerra es vital para quienes desean entender la historia australiana. ",
        imagen_corta: "https://media.discordapp.net/attachments/997268061482647653/1078027588955541564/Peter78987943934968_canberra_3aa6b0f5-6f47-46a6-aa8e-3d4c3865f355.png?width=578&height=578",
        imagen_larga :"https://media.discordapp.net/attachments/997268061482647653/1078027588955541564/Peter78987943934968_canberra_3aa6b0f5-6f47-46a6-aa8e-3d4c3865f355.png?width=578&height=578"
    }
] 

//Si te das cuenta, esto es un export const destinos:DataProps[] = []; , no una función