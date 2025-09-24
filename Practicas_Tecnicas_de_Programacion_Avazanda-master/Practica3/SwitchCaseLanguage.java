package Practica3;

import java.util.ArrayList;
import java.util.Locale;
import java.util.ResourceBundle;

import javax.swing.JOptionPane;

import Practica1.Book;
public class SwitchCaseLanguage extends SwitchCase{ 
	
	public static void SwitchcaseLanguage(int opction,ArrayList<Book>library, ResourceBundle language) {
	   
	                        final int LENDING_DAYS=10;
	  switch(opction) {
	     case 1:
	    	    JOptionPane.showMessageDialog(null,language.getString("SwitchCase1"));
	    	    
	    	    String namebook11=JOptionPane.showInputDialog(null,language.getString("Name"));
				
				String numpages1= JOptionPane.showInputDialog(null,language.getString("Pages"));
				int numpages11=Integer.parseInt(numpages1);
		
				String numidentifier1=JOptionPane.showInputDialog(null,language.getString("Identify"));
				int numidentifier11=Integer.parseInt(numidentifier1);
		
				String nameauthor11=JOptionPane.showInputDialog(null,language.getString("Author"));
				
				Book b= new Book(namebook11,nameauthor11,numidentifier11,numpages11);
				library.add(b);
		 break;
				  
	     case 2:
	    	    JOptionPane.showMessageDialog(null,language.getString("SwitchCase2"));
	    	    
	    	    String namebook22=JOptionPane.showInputDialog(null,language.getString("Name"));
		
	    	    String numpages2= JOptionPane.showInputDialog(null,language.getString("Pages"));
				int numpages22=Integer.parseInt(numpages2);
		
				String numidentifier2=JOptionPane.showInputDialog(null,language.getString("Identify"));
				int numidentifier22=Integer.parseInt(numidentifier2);
		
				String nameauthor22=JOptionPane.showInputDialog(null,language.getString("Author"));
				
				if(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library) != -1) {
				  library.remove(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library));
					 }else{
						 JOptionPane.showMessageDialog(null,language.getString("Booknotlibrary"));
				     }
	      break;
				    
		  case 3:
			 JOptionPane.showMessageDialog(null,language.getString("SwitchCase3"));
			   for(int i=0;i<library.size();i++) {
		 	       JOptionPane.showMessageDialog(null,language.getString("books")+ ":" + i + " :")
		 	         JOptionPane.showMessageDialog(null,language.getString("Name") + ": " + library.get(i).getName() + "\n"+
					     language.getString("Pages") + ": " + library.get(i).getPages() + "\n" +
					     language.getString("Identify") + ": " + library.get(i).getIdentifier() + "\n"+
					     language.getString("Author")  + ": " + library.get(i).getAuthor() );
			 }
		   break;
				    
		   case 4:
			     JOptionPane.showMessageDialog(null,language.getString("SwitchCase4"));
			       String namebook33=JOptionPane.showInputDialog(null,language.getString("Name"));
			       String nameauthor33=JOptionPane.showInputDialog(null,language.getString("Author"));
			       JOptionPane.showMessageDialog(null,Book.copiesofBooks(namebook33, nameauthor33, library));
		   break;
					 
		   case 5:
			     JOptionPane.showMessageDialog(null,language.getString("SwitchCase5"));
			        JOptionPane.showMessageDialog(null,language.getString("DaysofLending") + ": " + LENDING_DAYS);				    
			        String namebook44=JOptionPane.showInputDialog(null,language.getString("Name"));
		
		        if(SwitchCase.bookfound(namebook44, library)) {
		        	JOptionPane.showMessageDialog(null,language.getString("Bookfound"));
		
		        	String lend= JOptionPane.showInputDialog(null,language.getString("Timeoflending"));
					int lending_time=Integer.parseInt(lend);
				   
			        if(lending_time>0 && lending_time<=10) {
			        	JOptionPane.showMessageDialog(null,language.getString("Daysoflendingthebook") + ": " 
			                                          + lending_time + language.getString("days"));
			               }else {
			            	   JOptionPane.showMessageDialog(null,language.getString("Wrong"));  
			               }
				 }else {
					 JOptionPane.showMessageDialog(null,language.getString("Nobookinlibrary"));
				}
		   break;
					    
		   case 6:
			        JOptionPane.showMessageDialog(null,language.getString("SwitchCase6"));
			        JOptionPane.showMessageDialog(null,language.getString("Thereare") +" " + library.size() +" "
			                                      + language.getString("books"));
		   break;
				    
		   case 7:
			        JOptionPane.showMessageDialog(null,language.getString("SwitchCase7"));
		   break;
				    
		   default:
			        JOptionPane.showMessageDialog(null,language.getString("Default"));
				    opction=-1;
		   break;
				  
	   }
			    
	}	

}
