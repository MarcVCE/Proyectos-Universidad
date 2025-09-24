package Practica4;
import java.util.ArrayList;

import javax.swing.JOptionPane;

import Practica1.Book;

public  abstract class SwitchCase {
	
		public static int delete(String name,String author,int identifier,int pages,ArrayList<Book> library) { 
			int position=-1;
	   	      for(int i=0;i<library.size();i++) {	
			      if(library.get(i).getAuthor().equalsIgnoreCase(author) && library.get(i).getName().equalsIgnoreCase(name) 
			        && library.get(i).getPages()==pages && library.get(i).getIdentifier()==identifier) {
			    	  position=i;
			      }
			   }    
			return position;
		 }	
		
		public static boolean bookfound(String name,ArrayList<Book> library) { 
			for(int i=0;i<library.size();i++) {
		         if(library.get(i).getName().equalsIgnoreCase(name)) {
		    	       return true;
		          }
			  }
			
			return false;
		}
		
		public void NameClass() {
			JOptionPane.showMessageDialog(null, "Superclass SwitchCase accesed by upcasting");
		}
}
