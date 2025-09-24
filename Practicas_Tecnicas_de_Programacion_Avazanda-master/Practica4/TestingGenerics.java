package Practica4;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import Practica3.Menu;

class TestingGenerics {
	public class Clients <T> {
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
	
	Client b=new Client();
	Clients bs=new Clients();
	
	@Test
	void getJobtest() {
		
		assertEquals(b.getJob(),bs.getJob());
	}
	
	@Test
	void getNametest() {
		
		assertEquals(b.getName(),bs.getName());
	}
}
	
