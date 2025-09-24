package Practica3;

import java.util.Locale;
import java.util.ResourceBundle;

import javax.swing.JOptionPane;
public class LanguageofYourProgram {
	
	public static int MenuLanguage() {
		int option=-1;
		String answer;
			while(option==-1) {
			   answer=JOptionPane.showInputDialog(null,"Language options of your program:"+"\n" + 
		              "1.English" +"\n" + "2.French" +"\n" + "3.Italian" +"\n" + "4.German" +"\n" + "5.Exit");
			        option=Integer.parseInt(answer);
			      if(option<1 || option>5) {
			    	  JOptionPane.showMessageDialog(null, "Number option language not available");
			       }
			}
			return option;
	}

    public static void main(String[] args) {
		int Interfaceoption=0;
		String choose=JOptionPane.showInputDialog("Invoking:" + "\n" + "1.Doogy" + "\n" +  "2.Person");
		Interfaceoption=Integer.parseInt(choose);
         if(Interfaceoption==1) {
			Doogy d=new Doogy();
			d.utility();
	 }else if(Interfaceoption==2) {
			Person p=new Person();
			p.utility();
		
		   int op=-1;
		     while(op!=5) {
		        op=MenuLanguage();
			    switch(op) {
			        case 1:
			        	LibraryEnglish.main(args);	
			            break;
			        case 2:
			                Locale french = new Locale("fr", "FR");  
			  	        ResourceBundle filefrench= ResourceBundle.getBundle("File",french);
				        LibraryLanguage.Language(filefrench, op);
				    break;
			        case 3:
			        	Locale italian = new Locale("it", "IT");  
			  	        ResourceBundle fileitalian= ResourceBundle.getBundle("File",italian);
				        LibraryLanguage.Language(fileitalian, op);
			            break;
			        case 4:
			        	Locale german = new Locale("de", "DE");  
			  	        ResourceBundle filegerman= ResourceBundle.getBundle("File",german);
				        LibraryLanguage.Language(filegerman, op);	
				    break;
			    }
		     }
	 }		
   }
}
