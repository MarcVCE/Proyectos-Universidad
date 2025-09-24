package Practica4;

import java.util.ArrayList;
import java.util.Arrays;

public class PrizesBook {
	
	private final static double mediapriceofbookseconds=0.0035;
	
    public static double mediarentingbooksfor1hour() {
    	double dayseconds=  Math.pow(60, 2);
    	double bookhour=dayseconds*mediapriceofbookseconds;
    	return bookhour;
    }
    
    public static void OrderBetterPrizesMediaSoldByMonth(){
    	double monthpricebook[]= {6.7 , 2.4 , 1.2 , 7.8 , 6.7 , 4.4 , 8.6 , 3.9 , 9.0 , 7.2 , 8.1 , 5.5}; 
    	System.out.println("Your mensual prices are from month 1 to month 12:" + "\n"+ toString(monthpricebook));
    	 Arrays.sort(monthpricebook);
    	 System.out.println("Your mensual prices are from lowest to highest monthly earns:" + "\n"+ toString(monthpricebook));
    }
    
    public static String toString(double[] vector) { 
		String s = "{"; 
		 for (int i=0; i<vector.length; i++) { 
			s = s + vector[i]; 
			  if (i < vector.length-1) {
				  s = s + ", "; 
			  }
		  }
		 return s + "}";
	 }
}
