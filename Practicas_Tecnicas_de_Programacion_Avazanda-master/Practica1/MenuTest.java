package Practica1;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Scanner;

import org.junit.jupiter.api.Test;

class MenuTest {

	@Test
	 public static int ReferenceMenus() {
   	    int numberopction1=-1;		
			while(numberopction1==-1) {
				System.out.println("Opction you have:");
				
					    System.out.println("1.Add a new book to your library");
					    System.out.println("2.Delete a book from your library");
					    System.out.println("3.Show information");
					    System.out.println("4.Copies of the book of an author");
					    System.out.println("5.Lending a book");
					    System.out.println("6.Number of books in the library");
					    System.out.println("7.Exit");
					    Scanner numberopctioner= new Scanner(System.in);
					    System.out.println("Choose Opction:");
					    numberopction1=numberopctioner.nextInt();
					    
			   }
			
		  return numberopction1;
	   
	  }
	
	@Test
        void MenuTest() {
		assertEquals(Menu.ReferenceMenu(),ReferenceMenus());
	}
}
