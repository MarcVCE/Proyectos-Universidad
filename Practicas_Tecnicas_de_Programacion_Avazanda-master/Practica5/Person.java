package Practica5;

import javax.swing.JOptionPane;

public class Person implements Interfaceofmyclasses {
	private String name;
	private static Person instance=null;
	
	public String livingbeing() {
      return "I'm a person";
    }
	
	private Person() {
		this.name="Mathilda";
	}
	
	public static synchronized Person getChracteristics() {
		if(instance==null) {
			instance=new Person();
		}
		return instance;
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
//Preguntar quien quieres que te guie en el menu, si la persona elige doggy,el perro hace gua gua
//y explica sus utilidades, si elige a la persona,la persona dice hello,explica sus utilidades y muestra el menu