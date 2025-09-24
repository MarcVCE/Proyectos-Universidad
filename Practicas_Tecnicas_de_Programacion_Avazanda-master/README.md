# - Disfrutando la informática
![imageneinformatica](https://user-images.githubusercontent.com/43180462/66385883-8c1a3b00-e9c1-11e9-8a5b-0a86489eed21.jpg)

This README is available [in English](README_English.md)

# - Prácticas
Prácticas de Técnicas de Programación Avanzada de Marc:

[Práctica 1](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica1)

[Práctica 2](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica2)

[Práctica 3](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica3)

[Práctica 4](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica4)

[Práctica 5](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica5)
# - Qué ofrece el usuario
**1.Claridad :** El Lenguaje se ha programado de forma que su lectura y comprensión de código sea fácil de entender para el usuario con cierto conocimiento de programación,todo esto habiendo pasado por rigurosos cambios y una evolución por lo menos para el creador positiva.

**2.Esfuerzo :** Horas de trabajo y constancia a la hora de realizarlo para dar lo mejor posible en aquello que lo merece

**3.Ilusión :** Esa que tienes para mejorar, para ver resultados fructíferos(normalmente en caso de que lo hayas trabajado) en lo que te gusta.  
# - Características del programa
   #   · Práctica 1:
**1. 8 clases:** 

    1.1 Clase Book para el código de las características de un libro(crear la clase para instanciar un objeto libro).

    1.2 Clase Menu para mostrar al usuario las opciones a elegir que tiene.

    1.3 Clase SwithCase para todo el código que hay tras esas opciones escogidas en la Clase Menu(todo lo que habría en un switch-case). 

    1.4 Clase Library que es la clase principal y dónde hacemos uso de otras clases 

    1.5 Clase thinkithoughtofwriting que es donde están todos los comentarios y pensamientos que tuve y escribí, más bien está clase es     más que nada para hacer más nítidas y claras las otras clases, sin tanto código de por medio.

    1.6 Clase BookTest para comprobar métodos de la Clase Book y ver que estaban bien.
    
    1.7 Clase SwitchCaseTest para comprobar métodos de la Clase SwithCase y ver que estaban bien.
    
    1.8 Clase MenuTest para comprobar métodos de la Clase Menu y ver que estaban bien.

**2. Métodos:** Uso de métodos en todas las clases.

**3. Uso de static y final:** El static me vino muy bien para ciertos métodos y el final para variables (de tipo String creo que eran las variables).
   #   · Práctica 2:
 **1. 12 clases(Entre las que se encuentra una superclase y 3 subclases) y 3 ficheros:** 
 
    1.1 Superclase  SwitchCase  como Clase padre que tiene los métodos que heredaran las clases hijas, y utilizando a mi favor la herencia
    añado a mis clases Hijas información de más.
    
    1.2 Subclases SwitchCaseFrench,SwitchCaseGerman,SwitchCaseEnglish,SwitchCaseItalian que son las clases hijas del SwitchCase,heredan los
    métodos delete y bookfound del SwitchCase,en ellas aparece todos los mensages del SwitchCase que tuve en la clase idioma en sus     respectivos idiomas.
    
    1.3 File_fr_FR.properties,File_de_DE.properties,File_it_IT.properties son 3 ficheros que tienen todos los mensajes que nos harán falta en las clases de cada idioma,son útiles dado que dan orden y claridad a las clases en las que se utilizan,sus errores son fáciles de encontrar dado que java te avisa de ello en caso de que por ejemplo "la etiqueta" de un fichero no coincida con una que has puesto tú en la 
    
    clase en cuestión que no existe en tal fichero y son fáciles de utilizar en varios idiomas(lo que viene siendo una ganga), para ello utilizamos el Locale para declarar toda acción que se vaya a realizar con el objeto de Locale como aquella al país e idioma que se ha elegido,todo esto también es gracias a ResourceBundle que con su getBundle hace que esto se cargue en el objeto ResourceBundle, de tal forma 
    
    que ahora sí que sí tenemos nuestro objeto Resource listo en el idioma establecido y que puede utilizar nuestros ficheros, para sacar mensajes almacenados en las etiquetas de los ficheros, utilizamos el getString y haciendo por ejemplo: objetoResourceBundle.getString("Etiquetaencuestión") lo sacamos.
    
    1.4 Una clase Menu que tiene 4 métodos estáticos de menú, cada uno en el idioma correspondiente, todo esto tiene un fin útil, dado que los métodos de Menú no eran tan largos como para ponerlos en clases aparte a diferencia de los SwitchCase, pues es una ventaja que he usado a mi favor.
    
    1.5 LibraryEnglish,LibraryFrench,LibraryItalian,LibraryGerman que son 4 clases cada uno en su idioma,vamos son la clase Library de la Practica1 en 4 idiomas.
    
    1.6 Aquí es dónde empieza lo bueno, cuál era el objetivo de los esto pues crear una clase llamada LanguageofYourProgram que lo que hace es dar a escoger a el usuario el idioma en el que quiere usar su programa y ejecutarlo libremente, básicamente es una Practica1 mejorada ya que te da a escoger la ejecución del programa en 4 idiomas y se adapta a todo el mundo dentro de los países escogidos, sin tener que tener restricciones de idioma  
    
    1.7 Clase Book para el código de las características de un libro(crear la clase para instanciar un objeto libro).
    
    1.8 Clase Testing para comprobar métodos del progrma en general y ver que estaban bien.
    
**2. Métodos:** Uso de métodos en todas las clases.

**3. Uso de static,final,abstract y extends:** El static me vino muy bien para ciertos métodos , el final para variables (de tipo String creo que eran las variables) y el extends para heredar de la superclase, el abstract para evitar poder instanciar la superclase(sirve como molde), no podía poner el método de la superclase como estático porque si no las clases herederas no lo podían ni sobrescribir ni utilizar a menos de que estas fueran también static,pero aún así hice un gran uso de ello en los métodos de las subclases. 

 #   · Práctica 3:
 **1.    Modificación , refactorización , optimización del programa además de haber añadido una Interfaz:**
         
    1.1 Interfaz Interfaceofmyclasses que tiene implícitamente métodos abstractos y atributos estáticos y públicos que son implementados por      las clases Doogy y Persona , que comparten ciertas características y comportamientos en común si tener ningún tipo de relación lo suficientemente fuerte para que las dos clases hereden de una superclase.
    
    1.2 He refactorizado el código de la práctica 2, de forma que los idiomas sean utilizables en únicas clases en vez de tener varias clases por idiomas, como era el caso de las clases Library y SwitchCase por ejemplo, de esta forma me ahorro problemas a futuro en cuestión 
    de tiempo y corrección de errrores, además de tener un código más claro y nítido, deje el idioma inglés como lengua separada del resto porque quería hacer una distinción clara sobre la importancia del inglés(lengua principal de todo el programa), del resto de lengua que añades en las clases LibraryLanguage,SwitchCaseLanguage y el método estático MenuLanguage de la clase Menu.
    
    1.3 Uso de Javax.Swing con el JOptionPane, que la verdad es un recurso bastante más orientativo y de ayuda que el Scanner para aquellas personas cuyo nivel de informática y manejo básico de ordenadores es nulo como podría ser el caso de la dependienta de una libreria como es que utilice mi programa,además de que gracias al SonarLint pude ver como mejorar código de mi programa.
    
    1.4 Clase TestingInterfaces para seguir aumentado el número de tests.

 #   · Práctica 4:
 **1.Uso de los requisitos pedidos en la práctica 4,siendo estos los génericos,algún método de la clase Math que viene dada por Java
     los Sorts para ordenar arrays,uso de arrays multidimensionales y upcasting.**
     
    1.1 Clase genérica Client que implementa ciertos métodos que se usan posterioremente en la clase principal,que es la de LanguageofYourProgram,y es útil ya que le adjudicamos el tipo String como genérico, de tal forma que posteriormente no sirve para crear un array bidimensional que nos saca el nombre y el trabajo de los clientes Vip de nuestra librería.
    
    1.2 Uso de la clase Math usado en los precios de nuestros libros, ya sea por el alquiler que hacemos sobre ellos o la venta, y uso de los Arrays sort para ordenar de menor a mayor cuales son nuestros ingresos mensuales de media,de forma que podemos ver cuando en que meses es más exitosa nuestra librería.
    
    1.3 Upcasting para acceder a el  método NameClass de nuestra superclase abstracta SwitchCase desde la subclase SwitchCaseEnglish.
    
    1.4 Clase TestingGenerics para seguir aumentado el número de tests.
  
   #   · Práctica 5:
  **1.Uso del patrón Singleton para optimizar el programa y eliminar la falta de recursos futuros que se puedan utilizar inecesariamente al crear objetos de más y uso de hilos.**
    
    1.1 Clase ThreadsOurClient , siendo esta necesaria para activar con el start() un proceso común a los objetos que heredan de Thread que instanciamos, habiendo utilizado un synchronized para que no se produzcan indeterminaciones y pueda dar lugar a fallas en el programa, todo esto lo hice por una simple razón, y es el hecho de que quería mostrar un vector 2 veces, ya que los 2 dueños de la tienda querían ver la lista los clientes vip independiemntemente, sabiendo además que el método main() es un hilo también.  
    
    1.2 TestingThreads para comprobar si el hilo de la clase coincide con el de los objetos creados en la misma clase Testing,todo esto teniendo en cuenta lo complicado que puede resultar hacer tests de Threads siendo su métodos más utilizados de tipo void y no aceptando los tests void como tipo de dato en sus comparaciones. 
    
    1.3 TestingPatrons para poner tests de patrones y comprobar que todo fluye correctamente en ellos, y TestingPrizesBook para ampliar un poco más mi creación de tests y comprobar ciertos métodos que no comprobé en prácticas pasadas, en este caso los de la clase PrizesBooks. 
        
# - ¿Por qué Java?

![imagenjava](https://user-images.githubusercontent.com/43180462/66388917-6c861100-e9c7-11e9-952b-444090092e07.png)

**1.Por su multiplataforma :** funciona en prácticamente cualquier dispositivo, servidor o sistema operativo

**2.Por su robustez:** una instrucción de Java es imposible que pueda corromper la memoria, ni "pisar" o comprometer los datos de otras aplicaciones o del propio sistema operativo, además de eso, gestiona la liberación de memoria de manera automática.

**3.Por ser relativamente fácil de aprender en comparación con otros lenguajes :** gracias en parte a ser uno de los lenguajes más usados, con gran cantidad de sitios y blogs  que pueden resolver tus dudas , en comparación con otros lenguajes menos conocidos y de los cuáles sacar información y resolver tus dudas es más difícil.

**4.Por estar orientada a objetos :** por su orientación a objetos es más fácil crear aplicaciones modulares y reutilizar partes de las mismas, además de que permite implementar mejores patrones de diseño, mejorando así su robustez, además es uno de los motivos de que la propia plataforma sea tan extensible.

**5.Por su funcionalidad de base y mucho código Open Source :** cantidad de bibliotecas con código hecho y reutilizable almacenado en librerías
además de ciertas plataformas para extender la funcionalidad y mejorar la plataforma Java.

# - Bibliografía utilizada
https://www.campusmvp.es/recursos/post/5-motivos-por-los-que-utilizar-java-para-desarrollar-tus-aplicaciones.aspx
# - Licencia
Estos documentos no poseen una licencia de momento
