package Practica3;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Locale;
import java.util.ResourceBundle;

import javax.swing.JOptionPane;

import org.junit.jupiter.api.Test;

import junit.framework.TestResult;

class TestingInterfaces {
	
	Locale german = new Locale("de", "DE");  
    ResourceBundle filegerman= ResourceBundle.getBundle("File",german);
    
    /*Locale taiwan = new Locale("zh", "TW");  
    ResourceBundle filetaiwan= ResourceBundle.getBundle("File",taiwan);*/
    
    public int MenuLanguages(ResourceBundle language) {
 	    return 5;  //Con esto compruebas que esta la opcion que marcas en el idioma que marcas en el JOptionPane
    }
    
	
	@Test
	void TestGender() {
		assertEquals(Interfaceofmyclasses.gender,"female");
	}
	
	@Test
	void TestColor() {
		assertEquals(Interfaceofmyclasses.color,"white");
	}
	
	@Test
	void TestMenuLanguage() {
		assertEquals(Menu.MenuLanguage(filegerman),MenuLanguages(filegerman));
	}

}
