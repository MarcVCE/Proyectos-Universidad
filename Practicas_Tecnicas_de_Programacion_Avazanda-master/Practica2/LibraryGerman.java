package Practica2;
import java.util.*;
public class LibraryGerman {
	 
    public static void main(String[] args) { 
    	Locale german = new Locale("de", "DE");  
	    ResourceBundle filegerman= ResourceBundle.getBundle("File",german);
		Scanner num= new Scanner(System.in);
		System.out.println(filegerman.getString("booklibraryGerman")+ "?");
		int thisnum=num.nextInt();
		System.out.println(filegerman.getString("YouhaveGerman")+" " + thisnum + " Bücher ");
		ArrayList<Book> library = new ArrayList<Book>();
			
			  for(int i=0;i<thisnum;i++) {
					   
					System.out.println("Bücher " + i + " :");
			
					Scanner namebook= new Scanner(System.in);
					System.out.println(filegerman.getString("NameGerman"));
					String namebook1=namebook.nextLine();
			
					Scanner numpages= new Scanner(System.in);
					System.out.println(filegerman.getString("PagesGerman"));
					int numpages1=numpages.nextInt();
			
					Scanner numidentifier= new Scanner(System.in);
					System.out.println(filegerman.getString("IdentifyGerman"));
					int numidentifier1=numidentifier.nextInt();
			
					Scanner nameauthor= new Scanner(System.in);
					System.out.println(filegerman.getString("AuthorGerman"));
					String nameauthor1=nameauthor.nextLine();
					Book b= new Book(namebook1,nameauthor1,numidentifier1,numpages1);
					library.add(b);
		        }
			  
						   int opction=-1;
						    while(opction!= 1000000000) {  
						       opction=Menu.MenuGerman(); 
						        SwitchCaseGerman.Switchcasegerman(opction, library);
								   if(opction==7) {
								       break;
								   }
						     }
	  }
}
