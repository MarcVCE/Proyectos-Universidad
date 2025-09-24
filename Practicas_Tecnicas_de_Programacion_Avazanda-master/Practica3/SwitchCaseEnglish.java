package Practica3;
import Practica1.Book;
import java.util.ArrayList;

import javax.swing.JOptionPane;

public class SwitchCaseEnglish  extends SwitchCase{
	
	public static void Switchcaseenglish(int opction,ArrayList<Book>library) {
		
                		  final int LENDING_DAYS=10;
	  switch(opction) {
	     case 1:
	    	    JOptionPane.showMessageDialog(null,"Choosen Opction:Add a new book to your library");
	    	    
	    	    String namebook11=JOptionPane.showInputDialog(null,"Name of your book");
				
				String numpages1= JOptionPane.showInputDialog(null, " Pages of your book");
				int numpages11=Integer.parseInt(numpages1);
		
				String numidentifier1=JOptionPane.showInputDialog(null,"Identifier of your book");
				int numidentifier11=Integer.parseInt(numidentifier1);
		
				String nameauthor11=JOptionPane.showInputDialog(null,"Author of your book");
	    	    
				Book b= new Book(namebook11,nameauthor11,numidentifier11,numpages11);
				library.add(b);
		 break;
				  
	     case 2:
	    	    JOptionPane.showMessageDialog(null,"Choosen Opction:Delete a book from your library");
	    	    
	    	    String namebook22=JOptionPane.showInputDialog(null,"Name of your book");
		
	    	    String numpages2= JOptionPane.showInputDialog(null, " Pages of your book");
				int numpages22=Integer.parseInt(numpages2);
		
				String numidentifier2=JOptionPane.showInputDialog(null,"Identifier of your book");
				int numidentifier22=Integer.parseInt(numidentifier2);
		
				String nameauthor22=JOptionPane.showInputDialog(null,"Author of your book");
				
				if(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library) != -1) {
				  library.remove(SwitchCase.delete(namebook22, nameauthor22, numidentifier22, numpages22, library));
					 }else{
						JOptionPane.showMessageDialog(null,"Book isn´t in our library");
				     }
	      break;
				    
		  case 3:
			     JOptionPane.showMessageDialog(null,"Choosen Opction:Show information");
					for(int i=0;i<library.size();i++) {
						JOptionPane.showMessageDialog(null,"book " + i + " :");
						JOptionPane.showMessageDialog(null,"Name of your book: " + library.get(i).getName() + "\n"+
								"Pages of your book: " + library.get(i).getPages() + "\n" +
								 "Identifier of your book: " + library.get(i).getIdentifier() + "\n"+
								  "Author of your book: " + library.get(i).getAuthor() );
					}
		   break;
				    
		  case 4:
			     JOptionPane.showMessageDialog(null,"Choosen Opction:Copies of a book of an author");
			      String namebook33=JOptionPane.showInputDialog(null,"Name of your book");
			      String nameauthor33=JOptionPane.showInputDialog(null,"Author of your book");
			      JOptionPane.showMessageDialog(null,Book.copiesofBooks(namebook33, nameauthor33, library));
		  break;
					 
		   case 5:
			        JOptionPane.showMessageDialog(null,"Choosen Opction:Lending a book");
			          JOptionPane.showMessageDialog(null,"Max days of lending:" + LENDING_DAYS);
				    
			          String namebook44=JOptionPane.showInputDialog(null,"Name of your book");
		
		        if(SwitchCase.bookfound(namebook44, library)) {
		        	JOptionPane.showMessageDialog(null,"Book found");
		
		        	String lend= JOptionPane.showInputDialog(null," Time of lending ");
					int lending_time=Integer.parseInt(lend);
		           
			        if(lending_time>0 && lending_time<=10) {
			        	 JOptionPane.showMessageDialog(null," Days of lending the book: " + lending_time + " days");
			               }else {
			            	 JOptionPane.showMessageDialog(null," Wrong ");  
			               }
				 }else {
					 JOptionPane.showMessageDialog(null,"No book in library");
				}
   		   break;
					    
		   case 6:
			        JOptionPane.showMessageDialog(null,"Choosen Opction:Number of books in the library");
			        JOptionPane.showMessageDialog(null,"There are " + library.size() + " books ");
		   break;
				    
		   case 7:
			        JOptionPane.showMessageDialog(null,"Choosen Opction:Exit");
		   break;
				    
		   default:
			        JOptionPane.showMessageDialog(null,"Number not available");
				    opction=-1;
		   break;
				  
				    }
			    
		}
}