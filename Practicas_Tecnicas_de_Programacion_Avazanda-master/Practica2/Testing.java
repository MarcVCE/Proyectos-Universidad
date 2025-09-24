package Practica2;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.Locale;
import java.util.ResourceBundle;
import java.util.Scanner;

import org.junit.jupiter.api.Test;

import Practica1.Book;

class Testing {

	ArrayList<Book> library=new ArrayList<Book> ();
	
	@Test
	public  int MenuLanguages() {
		int option=-1;
		while(option==-1) {
		   System.out.println("Language options of your program:"+"\n" + 
	       "1.English" +"\n" + "2.French" +"\n" + "3.Italian" +"\n" + "4.German" +"\n" + "5.Exit");
		   Scanner menulan= new Scanner(System.in);
		   option=menulan.nextInt();
		      if(option<1 || option>5) {
		    	  System.out.println("Number option language not available");
		       }
		}
		return option;
	}
	
    @Test
	void testMenuLanguages() {
	   assertEquals(LanguageofYourProgram.MenuLanguage(),MenuLanguages());
	}
}
