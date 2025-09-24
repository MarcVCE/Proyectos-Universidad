package Practica4;

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
	     
	     SwitchCase s= new SwitchCaseEnglish();
	     s.NameClass();
	     
	     System.out.println("Hourly media earns we gain by renting book :" + PrizesBook.mediarentingbooksfor1hour()
	                        + " euros ");
	     PrizesBook.OrderBetterPrizesMediaSoldByMonth();
	  	 System.out.println("Our Vip Clients are:");
	     String socialclass[][]=new String [4][2]; 
	     
	     Client<String>strings=new Client<String>();
	     strings.setName("Julio");
	     strings.setJob("Teacher");
	     
	     socialclass[0][0]=strings.getName();
	     socialclass[0][1]=strings.getJob();
	    		 
	     strings.setName("Laura");
	     strings.setJob("Computer engineering");
	     
	     socialclass[1][0]=strings.getName();
	     socialclass[1][1]=strings.getJob();
	     
	     strings.setName("Pedro");
	     strings.setJob("Bussiness owner");
	     
	     socialclass[2][0]=strings.getName();
	     socialclass[2][1]=strings.getJob();
	     
	     strings.setName("Maria");
	     strings.setJob("Butcher");
	     
	     socialclass[3][0]=strings.getName();
	     socialclass[3][1]=strings.getJob();
	     
	     for (int i=0;i<socialclass.length;i++){
	            for(int j=0;j<socialclass[0].length;j++){
	                System.out.print(socialclass[i][j] + "     ");
	            }
	            System.out.print("\n");
	        }
	  
		int Interfaceoption=0;
		String choose=JOptionPane.showInputDialog("Invoking:" + "\n" + "1.Doogy" + "\n" +  "2.Library Assistant");
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
