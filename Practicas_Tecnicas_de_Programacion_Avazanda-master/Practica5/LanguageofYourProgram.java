package Practica5;
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
	     ThreadOurClients Thread1=new ThreadOurClients(socialclass);
	     
	     Thread1.start();
	     
	     try {
	    	 Thread1.join();//Para esperar que el hilo principal salga una vez terminados los hilos secundarios
	     }catch(InterruptedException ie) {}
	     
	     System.out.println("Bob the owner wants to see the Vip list because he is the owner of the library");
	     ThreadOurClients Thread2=new ThreadOurClients(socialclass);
	     
	     Thread2.start();
	     
	     try {
	    	 Thread2.join();
	     }catch(InterruptedException ie) {}
	     
	     System.out.println("Mary (Bob's wife and also owner) wants to see the Vip list ");
	     
		 int Interfaceoption=0;
		 String choose=JOptionPane.showInputDialog("Invoking:" + "\n" + "1.Doogy" + "\n" +  "2.Library Assistant");
		 Interfaceoption=Integer.parseInt(choose);
        if(Interfaceoption==1) {
    	    Doogy d=Doogy.getChracteristics();
			d.utility();
	    }else if(Interfaceoption==2) {
		   Person p=Person.getChracteristics();
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
