package Practica5;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TestingPrizesBook {
	
	final static double mediapriceofbookseconds=0.0035;
	double mivector[]=new double[5];
	
	 public static String toStrings(double[] vector) { 
			String s = "{"; 
			 for (int i=0; i<vector.length; i++) { 
				s = s + vector[i]; 
				  if (i < vector.length-1) {
					  s = s + ", "; 
				  }
			  }
			 return s + "}";
		 }
	
	 public static double mediarentingbooksfor1hours() {
	    	double dayseconds=  Math.pow(60, 2);
	    	double bookhour=dayseconds*mediapriceofbookseconds;
	    	return bookhour;
	    }
	
	@Test
	void testToString() {
	 assertEquals(PrizesBook.toString(mivector),toStrings(mivector));	
	}
	
	@Test
	void testMediaRenting() {
	 assertEquals(PrizesBook.mediarentingbooksfor1hour(),mediarentingbooksfor1hours());	
	}

}
