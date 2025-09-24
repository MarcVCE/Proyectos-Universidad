package Practica1;

public class thinksIthoughtofwriting {
	  /*you are unable to create an object of the class where you are, because it´s not only useless
	  it is unlogical and java doesn´t allow it; Ej:creating Library l=new Library() here without
	  java marking the error, so the only logical way to access from one method to other is by
	  making it static and being able to use it commonly, that or creating a new file with a class
	  that has that method and make it static to, so you can access with it;Ej:creating a file Menu
	  with a class Menu, that has a method theMenu() and being able to access using Menu.TheMenu();*/
	
	//No need to put Library.Menu() because to already are in class Library

	//just in other method different from Menu()=>you are in the main method.
	
	/*Book b1= new Book(namebook11,nameauthor11,numidentifier11,numpages11);
	library.remove(Library.delete(b1, library));
	Try it to do it as you see in green but just marked me this error:
	Exception in thread "main" java.lang.IndexOutOfBoundsException: Index -1 out of bounds for length (size)
	*/

	/*a solid message that is final
	impossible to modify and can be accessed by the class name without needing a object of the class.
	=>String MESSAGE*/
	
	/* String / Object => equals
	   primitive typem => ==
	*/
	
	/*Te sirve para comprobar si los métodos del programa funcionan correctamente=>think I create in 
	Booktest class*/
	
	//LIKE A DNI OF THE BOOK=> int identifier
}
