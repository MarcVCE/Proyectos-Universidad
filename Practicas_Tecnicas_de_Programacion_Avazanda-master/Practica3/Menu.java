package Practica3;

import java.util.ResourceBundle;

import javax.swing.JOptionPane;

public class Menu {
	
	public static int MenuLanguage(ResourceBundle language) {   
	   int numberopction1=-1;
	   int num=0;
	     while(numberopction1==-1){  
	    	 String[] numoptions = { 
		 	            language.getString("Option1"),
		 	            language.getString("Option2"),
		 	            language.getString("Option3"),
		 	            language.getString("Option4"),
		 	            language.getString("Option5"),
		 	            language.getString("Option6"),
		 	            language.getString("Option7")
	    	        };

	    	        String answer = (String) JOptionPane.showInputDialog(null,language.getString("Optionyouhave"), "Menu", 
	    	        		         JOptionPane.DEFAULT_OPTION, null, numoptions, numoptions[0]);
	    	        if(language.getString("Option1").equalsIgnoreCase(answer)) {
	    	        	num=1; 
	    	        }else if(language.getString("Option2").equalsIgnoreCase(answer)) {
	    	        	num=2;
	    	        }else if(language.getString("Option3").equalsIgnoreCase(answer)) {
	    	        	num=3;
	    	        }else if(language.getString("Option4").equalsIgnoreCase(answer)) {
		    	        num=4;
	    	        }else if(language.getString("Option5").equalsIgnoreCase(answer)) {
		    	        num=5;
	    	        }else if(language.getString("Option6").equalsIgnoreCase(answer)) {
		    	        num=6;
	    	        }else if(language.getString("Option7").equalsIgnoreCase(answer)) {
			    	   num=7;
	    	        }
					numberopction1=num;
		  } 
	     return numberopction1;
	   }
	
	 public static int MenuEnglish() {
   	    int numberopction1=-1;		
   	    int num=0;
			while(numberopction1==-1) {
				 String[] numoptions = { 
						     "1.Add a new book to your library",
						     "2.Delete a book from your library",
					             "3.Show information",
				        	     "4.Copies of the book of an author",
						     "5.Lending a book",
					             "6.Number of books in the library",
					             "7.Exit" 
		    	        };
		         String answer = (String) JOptionPane.showInputDialog(null,"Options you have", "Menu", 
        		                 JOptionPane.DEFAULT_OPTION, null, numoptions, numoptions[0]);	
		        if("1.Add a new book to your library".equalsIgnoreCase(answer)) {
	    	        	num=1; 
	    	        }else if("2.Delete a book from your library".equalsIgnoreCase(answer)) {
	    	        	num=2;
	    	        }else if("3.Show information".equalsIgnoreCase(answer)) {
	    	        	num=3;
	    	        }else if("4.Copies of the book of an author".equalsIgnoreCase(answer)) {
		    	        num=4;
	    	        }else if("5.Lending a book".equalsIgnoreCase(answer)) {
		    	        num=5;
	    	        }else if("6.Number of books in the library".equalsIgnoreCase(answer)) {
		    	        num=6;
	    	        }else if("7.Exit".equalsIgnoreCase(answer)) {
			    	   num=7;
	    	        }
				 numberopction1=num;
			   }
		  return numberopction1;
	  }
	 
}
