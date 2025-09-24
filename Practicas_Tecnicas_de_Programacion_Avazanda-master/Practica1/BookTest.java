package Practica1;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

class BookTest {
	
	Book quijote= new Book("don Quijote","Pedro Jimenez", 1 ,500);
	ArrayList<Book> library=new ArrayList<Book> ();
	
        @Test
	void testPages() {
	   assertEquals(quijote.getPages(),500);
	}
	
	@Test
	void testName() {
	   assertEquals(quijote.getName(),"don Quijote");
	}
	
	
	@Test
	public static String copiesofBook(String name,String author,ArrayList<Book> library) { 
		int counter=0;
			for(int i=0;i<library.size();i++) {
			      if(library.get(i).getAuthor().equalsIgnoreCase(author) && library.get(i).getName().equalsIgnoreCase(name)) {
			    	  counter++;
			      }
			}
		return "There are "+ counter + " copies of the book you introduce";
	}
	
	@Test
	void testcopiesofBooks() {
	    assertEquals(Book.copiesofBooks("Gilgamesh","Stephen Smith",library),copiesofBook("Gilgamesh","Stephen Smith",library));
	}
	
}
