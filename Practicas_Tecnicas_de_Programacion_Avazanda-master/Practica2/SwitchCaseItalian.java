package Practica2;

import java.util.ArrayList;
import java.util.Locale;
import java.util.ResourceBundle;
import java.util.Scanner;

public class SwitchCaseItalian extends SwitchCase{ 
	
			public void NameClass() {
					
				System.out.println("Subclass Italian of SwitchCase");					
			}
			
			public static void LoveIT() {
				
				System.out.println("L'italiano è la migliore lingua del mondo");
		    }
			
	public static void Switchcaseitalian(int opction,ArrayList<Book>library) {
		   
		   Locale italian = new Locale("it", "IT");  
	       ResourceBundle fileitalian= ResourceBundle.getBundle("File",italian);
	   
	                        final int LENDING_DAYS=10;
	  switch(opction) {
	     case 1:
				System.out.println(fileitalian.getString("SwitchCase1Italian"));
				Scanner namebook1= new Scanner(System.in);
				System.out.println(fileitalian.getString("NameItalian"));
				String namebook11=namebook1.nextLine();
		
				Scanner numpages1= new Scanner(System.in);
				System.out.println(fileitalian.getString("PagesItalian"));
				int numpages11=numpages1.nextInt();
		
				Scanner numidentifier1= new Scanner(System.in);
				System.out.println(fileitalian.getString("IdentifyItalian"));
				int numidentifier11=numidentifier1.nextInt();
		
				Scanner nameauthor1= new Scanner(System.in);
				System.out.println(fileitalian.getString("AuthorItalian"));
				String nameauthor11=nameauthor1.nextLine();
				Book b= new Book(namebook11,nameauthor11,numidentifier11,numpages11);
				library.add(b);
		 break;
				  
	     case 2:
				System.out.println(fileitalian.getString("SwitchCase2Italian"));
				Scanner namebook2= new Scanner(System.in);
				System.out.println(fileitalian.getString("NameItalian"));
				String namebook22=namebook2.nextLine();
		
				Scanner numpages2= new Scanner(System.in);
				System.out.println(fileitalian.getString("PagesItalian"));
				int numpages22=numpages2.nextInt();
		
				Scanner numidentifier2= new Scanner(System.in);
				System.out.println(fileitalian.getString("IdentifyItalian"));
				int numidentifier22=numidentifier2.nextInt();
		
				Scanner nameauthor2= new Scanner(System.in);
				System.out.println(fileitalian.getString("AuthorItalian"));
				String nameauthor22=nameauthor2.nextLine();
				
				if(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library) != -1) {
				  library.remove(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library));
					 }else{
						System.out.println(fileitalian.getString("BooknotlibraryItalian"));
				     }
	      break;
				    
		  case 3:
			 System.out.println(fileitalian.getString("SwitchCase3Italian"));
				for(int i=0;i<library.size();i++) {
				  System.out.println("libro " + i + " :");
				  System.out.println(fileitalian.getString("NameItalian")  + ": " + library.get(i).getName());
				  System.out.println(fileitalian.getString("PagesItalian") + ": " + library.get(i).getPages());
				  System.out.println(fileitalian.getString("IdentifyItalian") + ": " + library.get(i).getIdentifier());
				  System.out.println(fileitalian.getString("AuthorItalian") + ": " + library.get(i).getAuthor());
			 }
		   break;
				    
		   case 4:
			    System.out.println(fileitalian.getString("SwitchCase4Italian"));
			      Scanner namebook3= new Scanner(System.in);
			      System.out.println(fileitalian.getString("NameItalian"));
				  String namebook33=namebook3.nextLine();
				  Scanner nameauthor3= new Scanner(System.in);
				  System.out.println(fileitalian.getString("AuthorItalian"));
				  String nameauthor33=nameauthor3.nextLine();
				  System.out.println(Book.copiesofBooks(namebook33, nameauthor33, library));
		   break;
					 
		   case 5:
				    System.out.println(fileitalian.getString("SwitchCase5Italian"));
				    System.out.println(fileitalian.getString("DaysofLendingItalian") + ": " + LENDING_DAYS);
				    
				    Scanner namebook4= new Scanner(System.in);
				    System.out.println(fileitalian.getString("NameItalian"));
					String namebook44=namebook4.nextLine();
		
		        if(SwitchCase.bookfound(namebook44, library)) {
				   System.out.println(fileitalian.getString("BookfoundItalian"));
		
				   System.out.println(fileitalian.getString("TimeoflendingItalian"));
				   Scanner lend= new Scanner(System.in);			
				   int lending_time=lend.nextInt();
				   
			        if(lending_time>0 && lending_time<=10) {
				         System.out.println(fileitalian.getString("DaysoflendingthebookItalian") + ": " + lending_time 
				        		            + fileitalian.getString("daysItalian"));
			               }else {
				             System.out.println(fileitalian.getString("WrongItalian"));  
			               }
				 }else {
					System.out.println(fileitalian.getString("NobookinlibraryItalian"));
				}
		   break;
					    
		   case 6:
			        System.out.println(fileitalian.getString("SwitchCase6Italian"));
				    System.out.println("Ci sono" + library.size() + "libros");
		   break;
				    
		   case 7:
				    System.out.println(fileitalian.getString("SwitchCase7Italian"));
		   break;
				    
		   default:
				    System.out.println(fileitalian.getString("DefaultItalian"));
				    opction=-1;
		   break;
				  
	   }
				    
			    System.out.println("================================");
			    
	}	

}

