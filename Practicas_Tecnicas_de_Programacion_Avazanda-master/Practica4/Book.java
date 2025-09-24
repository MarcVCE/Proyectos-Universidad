package Practica4;

import java.util.ArrayList;
//Quizás creo un Book generico con datos que devuelven T,el Math lo utilizo para los precios de los libros y hago una 
//matriz multidimensional con los precios y los nombres de los libros, y los ordeno por precios de más caro a más barato.
public class Book {
	
	final static String MESSAGE ="We only sell book,with unlimited copies of them"; 
	private String name;
	private int pages;
	private int identifier;
	private String author;

	public String getAuthor() {
	return author;
	}

	public void setAuthor(String author) {
	this.author = author;
	}

	public Book(String name,String author,int identifier,int pages) {
	this.name = name;
	this.pages = pages;
	this.identifier = identifier;
	this.author=author;
	}
	
	public Book(String name,String author) {
		this.name=name;
		this.author=author;
		
	}

	public String getName() {
	return name;
	}

	public void setName(String name) {
	this.name = name;
	}

	public int getPages() {
	return pages;
	}

	public void setPages(int pages) {
	this.pages = pages;
	}

	public int getIdentifier() {
	return identifier;
	}

	public void setIdentifier(int identifier) {
	this.identifier = identifier;
	}
		
	public static String copiesofBooks(String name,String author,ArrayList<Book> library) { //method class Book
		int counter=0;
			for(int i=0;i<library.size();i++) {
			      if(library.get(i).getAuthor().equalsIgnoreCase(author) && library.get(i).getName().equalsIgnoreCase(name)) {
			    	  counter++;
			      }
			}
		return "There are "+ counter + " copies of the book you introduce";
	}
}
