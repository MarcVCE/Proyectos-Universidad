package Practica3;

import javax.swing.JOptionPane;

public class Person implements Interfaceofmyclasses {
	private String name="Mathilda";
	
	public String livingbeing() {
              return "I'm a person";
    }
	
	public String sound() {
		return " Hello, I talk because";
	}
	
	public void utility() {
		JOptionPane.showMessageDialog(null,this.sound() + " " + this.livingbeing());
		JOptionPane.showMessageDialog(null,"Hi,I'm " + this.name + " a " + color +" " + gender +" person and I will help you in what "
				+ " I can in this library, invoke me if you want anything from the library ");
	}
}
