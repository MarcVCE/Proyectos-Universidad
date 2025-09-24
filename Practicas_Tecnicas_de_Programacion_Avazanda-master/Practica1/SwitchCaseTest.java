package Practica1;
import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.Scanner;

import org.junit.jupiter.api.Test;

class SwitchCaseTest {
	
	ArrayList<Book> library=new ArrayList<Book> ();
	
	@Test
	public static int deletes(String name,String author,int identifier,int pages,ArrayList<Book> library) { 
           int position=-1;
   	      for(int i=0;i<library.size();i++) {	
		      if(library.get(i).getAuthor().equalsIgnoreCase(author) && library.get(i).getName().equalsIgnoreCase(name) 
		        && library.get(i).getPages()==pages && library.get(i).getIdentifier()==identifier) {
		    	  position=i;
		       }
	       }
   	      
		return position;
	 }
	
	@Test
	public static boolean bookfounds(String name,ArrayList<Book> library) { 
		for(int i=0;i<library.size();i++) {
	             if(library.get(i).getName().equalsIgnoreCase(name)) {
	    	         return true;
	             }
		  }
		
		return false;
	}
	
	@Test
	void checkSwitchCaseBookfound() {
		assertEquals(SwitchCase.bookfound("The art of war",library),bookfounds("The art of war",library));
	}

	@Test
	void checkSwitchCaseDelete() {
		assertEquals(SwitchCase.delete("1984","George Orwell",6,328,library),deletes("1984","George Orwell",6,328,library));
	}
}
