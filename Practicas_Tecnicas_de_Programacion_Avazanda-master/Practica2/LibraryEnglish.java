package Practica2;
import java.util.*;
public class LibraryEnglish {
	 
    public static void main(String[] args) { //method of class library
		
		Scanner num= new Scanner(System.in);
		System.out.println("How many books do you want in your library?");
		int thisnum=num.nextInt();
		System.out.println("You have " + thisnum + " book in your library at the moment");
		ArrayList<Book> library = new ArrayList<Book>();
			
			  for(int i=0;i<thisnum;i++) {
					   
					System.out.println("book " + i + " :");
			
					Scanner namebook= new Scanner(System.in);
					System.out.println(" Name of your book");
					String namebook1=namebook.nextLine();
			
					Scanner numpages= new Scanner(System.in);
					System.out.println(" Pages of your book");
					int numpages1=numpages.nextInt();
			
					Scanner numidentifier= new Scanner(System.in);
					System.out.println("Identifier of your book");
					int numidentifier1=numidentifier.nextInt();
			
					Scanner nameauthor= new Scanner(System.in);
					System.out.println("Author of your book");
					String nameauthor1=nameauthor.nextLine();
					Book b= new Book(namebook1,nameauthor1,numidentifier1,numpages1);
					library.add(b);
		        }
			  
						   int opction=-1;
						    while(opction!= 1000000000) {  
						       opction=Menu.MenuEnglish(); 
						        SwitchCaseEnglish.Switchcaseenglish(opction, library);
								   if(opction==7) {
								       break;
								   }
						     }
	  }
}
