package Practica5;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import javax.swing.JOptionPane;

import org.junit.jupiter.api.Test;

class TestingPatrons {
	    
	   Doogy d=Doogy.getChracteristics();
		
	    @Test
		void getLivingBeing() {
			assertEquals("I'm a dog",d.livingbeing());
		}

}
		

