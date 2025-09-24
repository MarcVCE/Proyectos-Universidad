package Practica2;
import java.util.*;
public class LibraryItalian {
	 
    public static void main(String[] args) { 
    	Locale italian = new Locale("it", "IT");  
	    ResourceBundle fileitalian= ResourceBundle.getBundle("File",italian);
		Scanner num= new Scanner(System.in);
		System.out.println(fileitalian.getString("booklibraryItalian")+ "?");
		int thisnum=num.nextInt();
		System.out.println(fileitalian.getString("YouhaveItalian")+" " + thisnum + " libros");
		ArrayList<Book> library = new ArrayList<Book>();
			
			  for(int i=0;i<thisnum;i++) {
					   
					System.out.println("libro " + i + " :");
			
					Scanner namebook= new Scanner(System.in);
					System.out.println(fileitalian.getString("NameItalian"));
					String namebook1=namebook.nextLine();
			
					Scanner numpages= new Scanner(System.in);
					System.out.println(fileitalian.getString("PagesItalian"));
					int numpages1=numpages.nextInt();
			
					Scanner numidentifier= new Scanner(System.in);
					System.out.println(fileitalian.getString("IdentifyItalian"));
					int numidentifier1=numidentifier.nextInt();
			
					Scanner nameauthor= new Scanner(System.in);
					System.out.println(fileitalian.getString("AuthorItalian"));
					String nameauthor1=nameauthor.nextLine();
					Book b= new Book(namebook1,nameauthor1,numidentifier1,numpages1);
					library.add(b);
		        }
			  
						   int opction=-1;
						    while(opction!= 1000000000) {  
						       opction=Menu.MenuItalian(); 
						        SwitchCaseItalian.Switchcaseitalian(opction, library);
								   if(opction==7) {
								       break;
								   }
						     }
	  }
}
