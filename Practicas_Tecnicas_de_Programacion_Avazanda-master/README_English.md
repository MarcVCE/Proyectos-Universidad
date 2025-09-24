# - Enjoying Computer Science 
![imageneinformatica](https://user-images.githubusercontent.com/43180462/66385883-8c1a3b00-e9c1-11e9-8a5b-0a86489eed21.jpg)

Este README está disponible [en Español](README.md)

# - Practices
Marc's Advanced Programming Techniques Practices: 

[Practice 1](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica1)

[Practice 2](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica2) 

[Practice 3](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica3)

[Practice 4](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica4)

[Practice 5](https://github.com/MarcVCE/Practicas_Tecnicas_de_Programacion_Avazanda/tree/master/Practica5)
# - What the user offers
**1.Clarity :** The language has been programmed in such a way that its reading and comprehension of code is easy to understand for the user with a certain knowledge of programming, all this having gone through rigorous changes and an evolution at least for the positive creator.

**2.Effort :** Hours of work and constancy at the time of doing it to give the best possible in what it deserves. 

**3.Excitment :** The one you have to improve, to see fruitful results (usually in case you have worked it) in what you like.
# - Characteristics of the program 
   #   · Practice 1:
**1. 8 classes:** 

    1.1 Class Book for the code characteristics of a book (create class to instantiate a book object) .

    1.2 Class Menu to show the user the options to choose from .

    1.3 SwithCase Class for all the code behind those options chosen in the Menu Class (everything there would be in a switch-case) . 

    1.4 Class Library which is the main class and where we make use of other classes .

    1.5 Thinkithoughtofwriting class that is where are all the comments and thoughts that I had and wrote, rather this class is more than anything to make the other classes sharper and clearer, without so much code in between .

    1.6 Class BookTest to check methods of the Class Book and to see that they were ok.

    1.7 Class SwitchCaseTest to check methods of the SwithCase Class and see that they were ok.

    1.8 Class MenuTest to check methods of the Class Menu and see that they were ok.

**2. Methods:** Use of methods in all the classes.

**3. Use of static and final:** The static suited me very well for certain methods and the end for variables (String type I think they were the variables).

  #   · Practice 2:
**1. 12 classes (including one superclass and 3 subclasses) and 3 files:**.

    1.1 Superclass SwitchCase as Parent Class that has methods that will inherit daughter classes, and using inheritance in my         favor I add more information to my Daughters classes.

    1.2 Subclasses SwitchCaseFrench,SwitchCaseGerman,SwitchCaseEnglish,SwitchCaseItalian which are the daughter classes of the SwitchCase, inherit the delete and bookfound methods of the SwitchCase, in them appears all the messages of the SwitchCase that I had in the language class in their respective languages.

    1.3 File_fr_FR. properties,File_de_DE. properties,File_it_IT. properties are 3 files that have all the messages we will need in the classes of each language, are useful because they give order and clarity to the classes in which they are used, their errors are easy to find because java warns you of it in case for example &quot;the label"; of a file does not coincide with one that you have put in the

    class in question that does not exist in such a file and are easy to use in several languages (what comes being a bargain), for this we use the Locale to declare any action to be performed with the object of Locale as that to the country and language that has been chosen, all this is also thanks to ResourceBundle with its getBundle makes this is loaded into the object ResourceBundle, in such a way that now we do have our Resource object ready in the set language and that can use our files, to get messages stored in file labels, we use getString and doing for example: objectResourceBundle. getString ("Label in question") we get it.
    

    1.4 A Menu class that has 4 static menu methods, each in the corresponding language, all this has a useful purpose, since the Menu methods were not so long as to put them in separate classes unlike the SwitchCases, as it is an advantage that I have used in my favor.

    1.5 LibraryEnglish,LibraryFrench,LibraryItalian,LibraryGerman that are 4 classes each one in its language, let's go are the class Library of the Practice1 in 4 languages.

    1.6 Here is where the good begins, what was the purpose of this then create a class called LanguageofYourProgram that does is to give the user to choose the language in which you want to use your program and run it freely, basically is a Practice1 improved as it gives you to choose the execution of the program in 4 languages and adapts to everyone within the countries chosen, without having to have language restrictions.

    1.7 Class Book for the code of the characteristics of a book (to create the class to instantiate an object book).

    1.8 Class Testing to check methods of the program in general and to see that they were well.

**2. Methods:** Use of methods in all classes.

**3. Use of static,final,abstract and extends:** the static came to me very well to certain methods , the final variable (of type String I think you were the variables) and extends to inherit from the superclass, the abstract to avoid be able to instantiate the superclass(serves as a template), I could not put the method in the superclass as static because if it's not the classes, the heirs could not or overwriting or use less of that these were also static,but I still made a large use in the methods of the subclasses.

 #   · Practice 3:
 **1.   Modification , refactoring , optimization of the program in addition to having added an Interface :**
         
    1.1 Interface Interfaceofmyclasses that have implicitly abstract methods and static and public attributes that are implemented by the Doogy and Persona classes, that share certain characteristics and behaviors in common without having any type of relationship strong enough for the two classes to inherit from a superclass. 
    
    1.2 I have refactored the code of practice 2, so that the languages can be used in single classes instead of having several classes per language, as was the case of the Library and SwitchCase classes for example, thus saving me future problems in a matter of time and
    correction of errors, besides having a clearer and clearer code, leave English as a separate language from the rest because I wanted to make a clear distinction about the importance of English (the main language of the whole program), from the rest of the language you add in the classes LibraryLanguage,SwitchCaseLanguage and the static MenuLanguage method of the Menu class. 
    
    1.3 Use of Javax. Swing with the JOptionPane, that the truth is a much more orientative and helpful resource than the Scanner for those people whose level of computer science and basic handling of computers is null as it could be the case of the dependent one of a library as it is that uses my program, besides that thanks to the SonarLint I could see how to improve code of my program. 
    
    1.4 Class TestingInterfaces to further increase the number of tests. 
    
# · Practice 4:
**1. Use of the requirements requested in practice 4, being these the generic ones, some method of the Math class that comes given by Java.
Sorts to order arrays, use of multidimensional arrays and upcasting.**

    1.1 Generic Class Client that implements certain methods that are used later in the main class, which is the LanguageofYourProgram, and is useful because we awarded the type String as generic, so that later does not serve to create a two-dimensional array that takes the name and work of the clients Vip of our library.
 
    1.2 Use of the Math class used in the prices of our books, either by the rent we make on them or the sale, and use of the Arrays sort to order from minor to major what are our monthly incomes of average, so that we can see when in which months our bookstore is more successful. 
    
    1.3 Upcasting to access the NameClass method of our abstract superclass SwitchCase from the SwitchCaseEnglish subclass.
    
    1.4 Class TestingGenerics to continue increasing the number of tests. 
    
# · Practice 5:
**1.
Use of the Singleton pattern to optimize the program and eliminate the lack of future resources that can be used unnecessarily when creating more objects and threads.**

    1.1 Class ThreadsOurClient , being this necessary to activate with the start() a common process to the objects that inherit of Thread that we instantiate, having used a synchronized so that indeterminations do not take place and can give rise to failures in the program, all this I did for a simple reason, and it is the fact that I wanted to show a vector 2 times, since the 2 owners of the store wanted to see the list the clients vipemntemente, knowing in addition that the method main() is a thread also. 
 
    1.2 TestingThreads to check if the thread of the class matches that of the objects created in the same Testing class, all this taking into account how complicated it can be to do tests of Threads being its most used methods of type void and not accepting the tests void as type of data in their comparisons. 
    
    1.3 TestingPatrons to put pattern tests and check that everything flows correctly in them, and TestingPrizesBook to extend a little more my creation of tests and check certain methods that I did not check in past practices, in this case those of the PrizesBooks class. 

# - Why Java?

![imagenjava](https://user-images.githubusercontent.com/43180462/66388917-6c861100-e9c7-11e9-952b-444090092e07.png)

**1.Multiplatform  :** Works on virtually any device, server, or operating system 

**2.Robustness:** a Java instruction is impossible to corrupt the memory, nor to step on or compromise the data of other applications or of the own operating system, besides that, it manages the memory release in an automatic way.

**3.Because it is relatively easy to learn compared to other languages  :** thanks in part to being one of the most used languages, with lots of sites and blogs that can solve your doubts, compared to other lesser known languages and from which getting information and resolving your doubts is more difficult. 

**4.Because it is object-oriented :** due to its orientation to objects, it is easier to create modular applications and reuse parts of them, besides allowing to implement better design patterns, improving its robustness, it is also one of the reasons why the platform itself is so extensible. 

**5.For its basic functionality and a lot of Open Source code  :** huge number of libraries with made and reusable code stored in libraries in addition to certain platforms to extend functionality and improve the Java platform .

# - Bibliography used 
https://www.campusmvp.es/recursos/post/5-motivos-por-los-que-utilizar-java-para-desarrollar-tus-aplicaciones.aspx
# - License
These documents do not have a license at the moment. 


