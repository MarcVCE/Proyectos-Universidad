package Practica5;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TestingThreads {
    String socialclass[][]= new String [4][2];
    Thread n1=new ThreadOurClients(socialclass);
    Thread n2=new ThreadOurClients(socialclass);
    
	@Test
	void testThreadsN1() {
		assertEquals(Thread.currentThread().getName(),n1.currentThread().getName());
	}
	
	@Test
	void testThreadsN2() {
		assertEquals(Thread.currentThread().getName(),n2.currentThread().getName());
	}
	
	@Test
	void testThreadsN3() {
		assertEquals(n2.currentThread().getName(),n1.currentThread().getName());
	}
	
}
