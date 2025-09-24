package Practica5;

public class ThreadOurClients extends Thread{
	private String socialclass[][];
	ThreadOurClients(String socialclass[][]){
		this.socialclass=socialclass;
	}
	
	public void run() {
		try {
		 Client<String>strings=new Client<String>();
		 strings.setName("Julio");
	     strings.setJob("Teacher");
	     
	     socialclass[0][0]=strings.getName();
	     socialclass[0][1]=strings.getJob();
	     
	     strings.setName("Laura");
	     strings.setJob("Computer engineering");
	     
	     socialclass[1][0]=strings.getName();
	     socialclass[1][1]=strings.getJob();
	     
	     strings.setName("Pedro");
	     strings.setJob("Bussiness owner");
	     
	     socialclass[2][0]=strings.getName();
	     socialclass[2][1]=strings.getJob();
	     
	     strings.setName("Maria");
	     strings.setJob("Butcher");
	     
	     socialclass[3][0]=strings.getName();
	     socialclass[3][1]=strings.getJob();
	     
	     synchronized(this.socialclass) {
	    	 System.out.println(Thread.currentThread().getName() + ":");
		     for (int i=0;i<socialclass.length;i++){
		    	  System.out.print( (i+1) + " position and " + Thread.currentThread().getName() + " : " );
		            for(int j=0;j<socialclass[0].length;j++){
		            	System.out.print(socialclass[i][j] + "       ");
		            }
		            Thread.sleep(1500);
		            System.out.print("\n");
		      }
	      }
				}catch (InterruptedException e) {
					System.out.print(e.getMessage());
					return;
				}
		   }
}
