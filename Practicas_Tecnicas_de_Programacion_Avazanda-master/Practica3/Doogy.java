package Practica3;

import javax.swing.JOptionPane;

public class Doogy implements Interfaceofmyclasses{
    private String name="Doggy";
    
    public String livingbeing() {
    	return "I'm a dog";
    }
    
    public String sound() {
		return " Guau ,guau I bark because";
	}
    
	public void utility() {
	  JOptionPane.showMessageDialog(null,this.sound() + " " + this.livingbeing());
	  JOptionPane.showMessageDialog(null,"Hi,I'm " + name + " a " + color +" " + gender + 
		   " dog and I will will protect " + "this library,invoke me when you wanna protect your library");
	}
}
