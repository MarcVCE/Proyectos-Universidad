package Practica2;
import java.util.*;
public class LibraryFrench {
	 
    public static void main(String[] args) { 
    	Locale french = new Locale("fr", "FR");  
	    ResourceBundle filefrench= ResourceBundle.getBundle("File",french);
		Scanner num= new Scanner(System.in);
		System.out.println(filefrench.getString("booklibraryFrench")+ "?");
		int thisnum=num.nextInt();
		System.out.println(filefrench.getString("YouhaveFrench")+" " + thisnum + " livres");
		ArrayList<Book> library = new ArrayList<Book>();
			
			  for(int i=0;i<thisnum;i++) {
					   
					System.out.println("livre " + i + " :");
			
					Scanner namebook= new Scanner(System.in);
					System.out.println(filefrench.getString("NameFrench"));
					String namebook1=namebook.nextLine();
			
					Scanner numpages= new Scanner(System.in);
					System.out.println(filefrench.getString("PagesFrench"));
					int numpages1=numpages.nextInt();
			
					Scanner numidentifier= new Scanner(System.in);
					System.out.println(filefrench.getString("IdentifyFrench"));
					int numidentifier1=numidentifier.nextInt();
			
					Scanner nameauthor= new Scanner(System.in);
					System.out.println(filefrench.getString("AuthorFrench"));
					String nameauthor1=nameauthor.nextLine();
					Book b= new Book(namebook1,nameauthor1,numidentifier1,numpages1);
					library.add(b);
		        }
			  
						   int opction=-1;
						    while(opction!= 1000000000) {  
						       opction=Menu.MenuFrench(); 
						        SwitchCaseFrench.Switchcasefrench(opction, library);
								   if(opction==7) {
								       break;
								   }
						     }
	  }
}
