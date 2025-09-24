package Practica2;

import java.util.Locale;
import java.util.ResourceBundle;
import java.util.Scanner;
public class LanguageofYourProgram {
	
	public static int MenuLanguage() {
		int option=-1;
		while(option==-1) {
		   System.out.println("Language options of your program:"+"\n" + 
	       "1.English" +"\n" + "2.French" +"\n" + "3.Italian" +"\n" + "4.German" +"\n" + "5.Exit");
		   Scanner menulan= new Scanner(System.in);
		   option=menulan.nextInt();
		      if(option<1 || option>5) {
		    	  System.out.println("Number option language not available");
		       }
		}
		return option;
	}

	public static void main(String[] args) {
	   int op=-1;
	     while(op!=5) {
	        op=MenuLanguage();
		      switch(op) {
		        case 1:
		        	SwitchCaseEnglish swe = new SwitchCaseEnglish();
		        	swe.NameClass();
		        	SwitchCaseEnglish.LoveEN();
		                LibraryEnglish.main(args);	
		            break;
		        case 2:
		        	SwitchCaseFrench swf = new SwitchCaseFrench();
		        	swf.NameClass();
		        	SwitchCaseFrench.LoveFR();
			        LibraryFrench.main(args);
		           break;
		        case 3:
		        	SwitchCaseItalian swi = new SwitchCaseItalian();
		        	swi.NameClass();
		        	SwitchCaseItalian.LoveIT();
		                LibraryItalian.main(args);
		            break;
		        case 4:
		        	SwitchCaseGerman swg = new SwitchCaseGerman();
		        	swg.NameClass();
		        	SwitchCaseGerman.LoveGR();
			        LibraryGerman.main(args);	
			    break;
		      }
	     }
		
		
	}
}
