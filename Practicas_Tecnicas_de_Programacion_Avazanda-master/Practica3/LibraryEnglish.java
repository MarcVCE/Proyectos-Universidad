package Practica3;
import java.util.*;

import javax.swing.JOptionPane;

import Practica1.Book;
public class LibraryEnglish {
	 
    public static void main(String[] args) { //method of class library
		
		String num= JOptionPane.showInputDialog(null,"How many books do you want in your library?");
		int thisnum=Integer.parseInt(num);
		JOptionPane.showMessageDialog(null,"You have " + thisnum + " book in your library at the moment");
		ArrayList<Book> library = new ArrayList<Book>();
			
			  for(int i=0;i<thisnum;i++) {
					   
				    JOptionPane.showMessageDialog(null, "book " + i + " :");
			
					
					String namebook1=JOptionPane.showInputDialog(null,"Name of your book");
			
					String numpages= JOptionPane.showInputDialog(null, " Pages of your book");
					int numpages1=Integer.parseInt(numpages);
			
					String numidentifier=JOptionPane.showInputDialog(null,"Identifier of your book");
					int numidentifier1=Integer.parseInt(numidentifier);
			
					String nameauthor1=JOptionPane.showInputDialog(null,"Author of your book");
					
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