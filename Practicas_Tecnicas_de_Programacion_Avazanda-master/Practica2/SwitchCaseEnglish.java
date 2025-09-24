package Practica2;

import java.util.ArrayList;
import java.util.Scanner;

public class SwitchCaseEnglish  extends SwitchCase{
		
		   public void NameClass() {
				
				System.out.println("Subclass English of SwitchCase");					
			}
			
			public static void LoveEN() {
				
				System.out.println("English is the best language in the world ");
		    }

	public static void Switchcaseenglish(int opction,ArrayList<Book>library) {
		
                		  final int LENDING_DAYS=10;
	  switch(opction) {
	     case 1:
				System.out.println("Choosen Opction:Add a new book to your library");
				Scanner namebook1= new Scanner(System.in);
				System.out.println(" Name of your book");
				String namebook11=namebook1.nextLine();
		
				Scanner numpages1= new Scanner(System.in);
				System.out.println(" Pages of your book");
				int numpages11=numpages1.nextInt();
		
				Scanner numidentifier1= new Scanner(System.in);
				System.out.println("Identifier of your book");
				int numidentifier11=numidentifier1.nextInt();
		
				Scanner nameauthor1= new Scanner(System.in);
				System.out.println("Author of your book");
				String nameauthor11=nameauthor1.nextLine();
				Book b= new Book(namebook11,nameauthor11,numidentifier11,numpages11);
				library.add(b);
		 break;
				  
	     case 2:
				System.out.println("Choosen Opction:Delete a book from your library");
				Scanner namebook2= new Scanner(System.in);
				System.out.println(" Name of your book");
				String namebook22=namebook2.nextLine();
		
				Scanner numpages2= new Scanner(System.in);
				System.out.println(" Pages of your book");
				int numpages22=numpages2.nextInt();
		
				Scanner numidentifier2= new Scanner(System.in);
				System.out.println("Identifier of your book");
				int numidentifier22=numidentifier2.nextInt();
		
				Scanner nameauthor2= new Scanner(System.in);
				System.out.println("Author of your book");
				String nameauthor22=nameauthor2.nextLine();
				
				if(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library) != -1) {
				  library.remove(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library));
					 }else{
						System.out.println("Book isn´t in our library");
				     }
	      break;
				    
		  case 3:
				 System.out.println("Choosen Opction:Show information");
					for(int i=0;i<library.size();i++) {
						System.out.println("book " + i + " :");
						System.out.println(" Name of your book: " + library.get(i).getName());
						System.out.println(" Pages of your book: " + library.get(i).getPages());
						System.out.println("Identifier of your book: " + library.get(i).getIdentifier());
						System.out.println("Author of your book: " + library.get(i).getAuthor());
		    		 }
		   break;
				    
		  case 4:
			    System.out.println("Choosen Opction:Copies of a book of an author");
			      Scanner namebook3= new Scanner(System.in);
			      System.out.println(" Name of your book");
				  String namebook33=namebook3.nextLine();
				  Scanner nameauthor3= new Scanner(System.in);
				  System.out.println("Author of your book");
				  String nameauthor33=nameauthor3.nextLine();
				  System.out.println(Book.copiesofBooks(namebook33, nameauthor33, library));
		  break;
					 
		   case 5:
				    System.out.println("Choosen Opction:Lending a book");
				    System.out.println("Max days of lending:" + LENDING_DAYS);
				    
				    Scanner namebook4= new Scanner(System.in);
				    System.out.println(" Name of your book");
					String namebook44=namebook4.nextLine();
		
		        if(SwitchCase.bookfound(namebook44, library)) {
				   System.out.println("Book found");
		
				   System.out.println(" Time of lending ");
				   Scanner lend= new Scanner(System.in);			
				   int lending_time=lend.nextInt();
				   
			        if(lending_time>0 && lending_time<=10) {
				         System.out.println(" Days of lending the book: " + lending_time + " days");
			               }else {
				             System.out.println(" Wrong ");  
			               }
				 }else {
					System.out.println("No book in library");
				}
   		   break;
					    
		   case 6:
			        System.out.println("Choosen Opction:Number of books in the library");
				    System.out.println("There are " + library.size() + " books ");
		   break;
				    
		   case 7:
				    System.out.println("Choosen Opction:Exit");
		   break;
				    
		   default:
				    System.out.println("Number not available");
				    opction=-1;
		   break;
				  
				    }
				    
			    System.out.println("================================");
			    
		}
}
