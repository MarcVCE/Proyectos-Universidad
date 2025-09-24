package Practica5;

import javax.swing.JOptionPane;

public class Doogy implements Interfaceofmyclasses{
    private String name;
    private static Doogy instance=null;
    
    private Doogy() {
    	this.name="Doogy";
    }
    
    public String livingbeing() {
    	return "I'm a dog";
    }
    
    public static synchronized Doogy getChracteristics() {
    	 if(instance==null) {
    		 instance=new Doogy();
    	 }
    	 return instance;
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
