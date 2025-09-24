package Practica5;

import java.util.ArrayList;
import java.util.Locale;
import java.util.ResourceBundle;

import javax.swing.JOptionPane;

import Practica1.Book;
public class LibraryLanguage {
   public static void Language(ResourceBundle language,int op) { 
	String num=JOptionPane.showInputDialog(null,language.getString("booklibrary")+ "?");
	int thisnum=Integer.parseInt(num);
	JOptionPane.showMessageDialog(null,language.getString("Youhave")+" " + thisnum + " "+ language.getString("books"));
	ArrayList<Book> library = new ArrayList<Book>();
		
		  for(int i=0;i<thisnum;i++) {
				   
			    JOptionPane.showMessageDialog(null,language.getString("books")+ " " + i + " :");
		
			    String namebook1=JOptionPane.showInputDialog(null,language.getString("Name"));
		
			    String numpages= JOptionPane.showInputDialog(null, language.getString("Pages"));
				int numpages1=Integer.parseInt(numpages);
			   
				String numidentifier=JOptionPane.showInputDialog(null,language.getString("Identify"));
				int numidentifier1=Integer.parseInt(numidentifier);
						
				String nameauthor1=JOptionPane.showInputDialog(null,language.getString("Author"));
				
				Book b= new Book(namebook1,nameauthor1,numidentifier1,numpages1);
				library.add(b);
	        }
		  
					   int opction=-1;
					    while(opction!= 1000000000) { 
					       if(op==2) {
					       opction=Menu.MenuLanguage(language);
					       }else if (op==3) {
					    	 opction=Menu.MenuLanguage(language);
					       }else if(op==4) {
					    	 opction=Menu.MenuLanguage(language);
					       }
					        SwitchCaseLanguage.SwitchcaseLanguage(opction, library,language);
							   if(opction==7) {
							       break;
							   }
					     }
  }
}
