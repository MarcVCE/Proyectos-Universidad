package Practica2;

import java.util.ArrayList;
import java.util.Locale;
import java.util.ResourceBundle;
import java.util.Scanner;

public class SwitchCaseGerman extends SwitchCase{ 
	
			public void NameClass() {
					
				System.out.println("Subclass German of SwitchCase");					
			}
			
			public static void LoveGR() {
				
				System.out.println("Deutsch ist die beste Sprache der Welt");
		    }
			
	public static void Switchcasegerman(int opction,ArrayList<Book>library) {
		   
		   Locale german = new Locale("de", "DE");  
	       ResourceBundle filegerman= ResourceBundle.getBundle("File",german);
	   
	                        final int LENDING_DAYS=10;
	  switch(opction) {
	     case 1:
				System.out.println(filegerman.getString("SwitchCase1German"));
				Scanner namebook1= new Scanner(System.in);
				System.out.println(filegerman.getString("NameGerman"));
				String namebook11=namebook1.nextLine();
		
				Scanner numpages1= new Scanner(System.in);
				System.out.println(filegerman.getString("PagesGerman"));
				int numpages11=numpages1.nextInt();
		
				Scanner numidentifier1= new Scanner(System.in);
				System.out.println(filegerman.getString("IdentifyGerman"));
				int numidentifier11=numidentifier1.nextInt();
		
				Scanner nameauthor1= new Scanner(System.in);
				System.out.println(filegerman.getString("AuthorGerman"));
				String nameauthor11=nameauthor1.nextLine();
				Book b= new Book(namebook11,nameauthor11,numidentifier11,numpages11);
				library.add(b);
		 break;
				  
	     case 2:
				System.out.println(filegerman.getString("SwitchCase2German"));
				Scanner namebook2= new Scanner(System.in);
				System.out.println(filegerman.getString("NameGerman"));
				String namebook22=namebook2.nextLine();
		
				Scanner numpages2= new Scanner(System.in);
				System.out.println(filegerman.getString("PagesGerman"));
				int numpages22=numpages2.nextInt();
		
				Scanner numidentifier2= new Scanner(System.in);
				System.out.println(filegerman.getString("IdentifyGerman"));
				int numidentifier22=numidentifier2.nextInt();
		
				Scanner nameauthor2= new Scanner(System.in);
				System.out.println(filegerman.getString("AuthorGerman"));
				String nameauthor22=nameauthor2.nextLine();
				
				if(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library) != -1) {
				  library.remove(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library));
					 }else{
						System.out.println(filegerman.getString("BooknotlibraryGerman"));
				     }
	      break;
				    
		  case 3:
			 System.out.println(filegerman.getString("SwitchCase3German"));
				for(int i=0;i<library.size();i++) {
				  System.out.println("Bücher " + i + " :");
				  System.out.println(filegerman.getString("NameGerman")  + ": " + library.get(i).getName());
				  System.out.println(filegerman.getString("PagesGerman") + ": " + library.get(i).getPages());
				  System.out.println(filegerman.getString("IdentifyGerman") + ": " + library.get(i).getIdentifier());
				  System.out.println(filegerman.getString("AuthorGerman") + ": " + library.get(i).getAuthor());
			 }
		   break;
				    
		   case 4:
			    System.out.println(filegerman.getString("SwitchCase4German"));
			      Scanner namebook3= new Scanner(System.in);
			      System.out.println(filegerman.getString("NameGerman"));
				  String namebook33=namebook3.nextLine();
				  Scanner nameauthor3= new Scanner(System.in);
				  System.out.println(filegerman.getString("AuthorGerman"));
				  String nameauthor33=nameauthor3.nextLine();
				  System.out.println(Book.copiesofBooks(namebook33, nameauthor33, library));
		   break;
					 
		   case 5:
				    System.out.println(filegerman.getString("SwitchCase5German"));
				    System.out.println(filegerman.getString("DaysofLendingGerman") + ": " + LENDING_DAYS);
				    
				    Scanner namebook4= new Scanner(System.in);
				    System.out.println(filegerman.getString("NameGerman"));
					String namebook44=namebook4.nextLine();
		
		        if(SwitchCase.bookfound(namebook44, library)) {
				   System.out.println(filegerman.getString("BookfoundGerman"));
		
				   System.out.println(filegerman.getString("TimeoflendingGerman"));
				   Scanner lend= new Scanner(System.in);			
				   int lending_time=lend.nextInt();
				   
			        if(lending_time>0 && lending_time<=10) {
				         System.out.println(filegerman.getString("DaysoflendingthebookGerman") + ": " + lending_time 
				        		            + filegerman.getString("daysGerman"));
			               }else {
				             System.out.println(filegerman.getString("WrongGerman"));  
			               }
				 }else {
					System.out.println(filegerman.getString("NobookinlibraryGerman"));
				}
		   break;
					    
		   case 6:
			        System.out.println(filegerman.getString("SwitchCase6German"));
				    System.out.println("Es gibt  " + library.size() + " Bücher ");
		   break;
				    
		   case 7:
				    System.out.println(filegerman.getString("SwitchCase7German"));
		   break;
				    
		   default:
				    System.out.println(filegerman.getString("DefaultGerman"));
				    opction=-1;
		   break;
				  
	   }
				    
			    System.out.println("================================");
			    
	}	

}
