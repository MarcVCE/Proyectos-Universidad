package Practica2;

import java.util.*;

public class Menu {
	
	public static int MenuFrench() {   
	   int numberopction1=-1;		
	     while(numberopction1==-1) {
	        Locale french = new Locale("fr", "FR");  
	           ResourceBundle filefrench= ResourceBundle.getBundle("File",french);
	             System.out.println(filefrench.getString("Optionyouhave")); 
	 	            System.out.println("1." + filefrench.getString("Option1"));
	 	            System.out.println("2." + filefrench.getString("Option2"));
	 	            System.out.println("3." + filefrench.getString("Option3"));
	 	            System.out.println("4." + filefrench.getString("Option4"));
	 	            System.out.println("5." + filefrench.getString("Option5"));
	 	            System.out.println("6." + filefrench.getString("Option6"));
	 	            System.out.println("7." + filefrench.getString("Option7"));
	 	            Scanner numberopctioner= new Scanner(System.in);
					System.out.println("Choose Opction:");
					numberopction1=numberopctioner.nextInt();
		  } 
	     return numberopction1;
	   }
	     
		
		public static int MenuItalian() {
		  int numberopction1=-1;		
		     while(numberopction1==-1) {
	            Locale italian = new Locale("it", "IT");
		 	       ResourceBundle fileitalian= ResourceBundle.getBundle("File",italian);
		 	         System.out.println(fileitalian.getString("Optionyouhave")); 
			           System.out.println("1." + fileitalian.getString("Option1"));
			           System.out.println("2." + fileitalian.getString("Option2"));
			           System.out.println("3." + fileitalian.getString("Option3"));	  
			           System.out.println("4." + fileitalian.getString("Option4"));
			           System.out.println("5." + fileitalian.getString("Option5"));
			           System.out.println("6." + fileitalian.getString("Option6"));
			           System.out.println("7." + fileitalian.getString("Option7"));    
			           Scanner numberopctioner= new Scanner(System.in);
					   System.out.println("Choose Opction:");
					   numberopction1=numberopctioner.nextInt();
		       }
		     return numberopction1;
		   }
		  		
		     
		
		 public static int MenuGerman() {
		   int numberopction1=-1;		
	    	  while(numberopction1==-1) {	
		    	 Locale german = new Locale("de", "DE");
		 	        ResourceBundle filegerman= ResourceBundle.getBundle("File",german);//Idioma a aleman
		 	         System.out.println(filegerman.getString("Optionyouhave")); 
		 	            System.out.println("1." + filegerman.getString("Option1"));
			            System.out.println("2." + filegerman.getString("Option2"));
			            System.out.println("3." + filegerman.getString("Option3"));	  
			            System.out.println("4." + filegerman.getString("Option4"));
			            System.out.println("5." + filegerman.getString("Option5"));
			            System.out.println("6." + filegerman.getString("Option6"));
			            System.out.println("7." + filegerman.getString("Option7"));
			            Scanner numberopctioner= new Scanner(System.in);
						System.out.println("Choose Opction:");
						numberopction1=numberopctioner.nextInt();  
		       }
	       return numberopction1;
		 }
		 
	
	 public static int MenuEnglish() {
   	    int numberopction1=-1;		
			while(numberopction1==-1) {
				System.out.println("Opction you have:");	
					 System.out.println("1.Add a new book to your library");
				     System.out.println("2.Delete a book from your library");
			         System.out.println("3.Show information");
		        	 System.out.println("4.Copies of the book of an author");
					 System.out.println("5.Lending a book");
					 System.out.println("6.Number of books in the library");
					 System.out.println("8.Exit");
					 Scanner numberopctioner= new Scanner(System.in);
					 System.out.println("Choose Opction:");
					 numberopction1=numberopctioner.nextInt();   
			   }
		  return numberopction1;
	  }
	 
}
