package Practica4;
import java.util.ArrayList;

public class Client <T> {
  private T name , job;
  
	public T getName() {
		return name;
	}
	
	public void setName(T name) {
		this.name = name;
	}
	
	public T getJob() {
		return job;
	}
	
	public void setJob(T job) {
		this.job = job;
	}
}
