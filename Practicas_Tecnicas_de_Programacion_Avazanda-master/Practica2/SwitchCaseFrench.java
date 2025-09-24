package Practica2;

import java.util.ArrayList;
import java.util.Locale;
import java.util.ResourceBundle;
import java.util.Scanner;

public class SwitchCaseFrench extends SwitchCase{ 
	
			public void NameClass() {
					
				System.out.println("Subclass French of SwitchCase");					
			}
			
			public static void LoveFR() {
				
				System.out.println("Le francais est la meilleur langue du monde ");
		    }
			
	public static void Switchcasefrench(int opction,ArrayList<Book>library) {
		   
		   Locale french = new Locale("fr", "FR");  
	       ResourceBundle filefrench= ResourceBundle.getBundle("File",french);
	   
	                        final int LENDING_DAYS=10;
	  switch(opction) {
	     case 1:
				System.out.println(filefrench.getString("SwitchCase1French"));
				Scanner namebook1= new Scanner(System.in);
				System.out.println(filefrench.getString("NameFrench"));
				String namebook11=namebook1.nextLine();
		
				Scanner numpages1= new Scanner(System.in);
				System.out.println(filefrench.getString("PagesFrench"));
				int numpages11=numpages1.nextInt();
		
				Scanner numidentifier1= new Scanner(System.in);
				System.out.println(filefrench.getString("IdentifyFrench"));
				int numidentifier11=numidentifier1.nextInt();
		
				Scanner nameauthor1= new Scanner(System.in);
				System.out.println(filefrench.getString("AuthorFrench"));
				String nameauthor11=nameauthor1.nextLine();
				Book b= new Book(namebook11,nameauthor11,numidentifier11,numpages11);
				library.add(b);
		 break;
				  
	     case 2:
				System.out.println(filefrench.getString("SwitchCase2French"));
				Scanner namebook2= new Scanner(System.in);
				System.out.println(filefrench.getString("NameFrench"));
				String namebook22=namebook2.nextLine();
		
				Scanner numpages2= new Scanner(System.in);
				System.out.println(filefrench.getString("PagesFrench"));
				int numpages22=numpages2.nextInt();
		
				Scanner numidentifier2= new Scanner(System.in);
				System.out.println(filefrench.getString("IdentifyFrench"));
				int numidentifier22=numidentifier2.nextInt();
		
				Scanner nameauthor2= new Scanner(System.in);
				System.out.println(filefrench.getString("AuthorFrench"));
				String nameauthor22=nameauthor2.nextLine();
				
				if(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library) != -1) {
				  library.remove(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library));
					 }else{
						System.out.println(filefrench.getString("BooknotlibraryFrench"));
				     }
	      break;
				    
		  case 3:
			 System.out.println(filefrench.getString("SwitchCase3French"));
				for(int i=0;i<library.size();i++) {
				  System.out.println("livre  " + i + " :");
				  System.out.println(filefrench.getString("NameFrench")  + ": " + library.get(i).getName());
				  System.out.println(filefrench.getString("PagesFrench") + ": " + library.get(i).getPages());
				  System.out.println(filefrench.getString("IdentifyFrench") + ": " + library.get(i).getIdentifier());
				  System.out.println(filefrench.getString("AuthorFrench") + ": " + library.get(i).getAuthor());
			 }
		   break;
				    
		   case 4:
			    System.out.println(filefrench.getString("SwitchCase4French"));
			      Scanner namebook3= new Scanner(System.in);
			      System.out.println(filefrench.getString("NameFrench"));
				  String namebook33=namebook3.nextLine();
				  Scanner nameauthor3= new Scanner(System.in);
				  System.out.println(filefrench.getString("AuthorFrench"));
				  String nameauthor33=nameauthor3.nextLine();
				  System.out.println(Book.copiesofBooks(namebook33, nameauthor33, library));
		   break;
					 
		   case 5:
				    System.out.println(filefrench.getString("SwitchCase5French"));
				    System.out.println(filefrench.getString("DaysofLendingFrench") + ": " + LENDING_DAYS);
				    
				    Scanner namebook4= new Scanner(System.in);
				    System.out.println(filefrench.getString("NameFrench"));
					String namebook44=namebook4.nextLine();
		
		        if(SwitchCase.bookfound(namebook44, library)) {
				   System.out.println(filefrench.getString("BookfoundFrench"));
		
				   System.out.println(filefrench.getString("TimeoflendingFrench"));
				   Scanner lend= new Scanner(System.in);			
				   int lending_time=lend.nextInt();
				   
			        if(lending_time>0 && lending_time<=10) {
				         System.out.println(filefrench.getString("DaysoflendingthebookFrench") + ": " + lending_time 
				        		            + filefrench.getString("daysFrench"));
			               }else {
				             System.out.println(filefrench.getString("WrongFrench"));  
			               }
				 }else {
					System.out.println(filefrench.getString("NobookinlibraryFrench"));
				}
		   break;
					    
		   case 6:
			        System.out.println(filefrench.getString("SwitchCase6French"));
				    System.out.println("Il y a " + library.size() + " livres ");
		   break;
				    
		   case 7:
				    System.out.println(filefrench.getString("SwitchCase7French"));
		   break;
				    
		   default:
				    System.out.println(filefrench.getString("DefaultFrench"));
				    opction=-1;
		   break;
				  
	   }
				    
			    System.out.println("================================");
			    
	}	

}
