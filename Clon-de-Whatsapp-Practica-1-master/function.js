let users = [
    {name: "Alexandra Smith", profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w="},
    {name: "Lily Johnson", profileImage: "https://images.generated.photos/NBcsqRViLwQujuMWRiJZsbdmlRzgtJWHDeP2GQahg3c/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk1NDY3LmpwZw.jpg"},
    {name: "Emma Williams", profileImage: "https://images.generated.photos/N7I_4N6Rh0gurY5y6SYZcHlwJdpKAkjaij_813BeO1g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk5MjE4LmpwZw.jpg"},
    {name: "Jack Miller", profileImage: "https://images.generated.photos/E7xG6i8LgRLqhYOD66qs6LY62rDmC8Jkag4hhepV3H0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU5NDEzLmpwZw.jpg"},
    {name: "Noah Jones", profileImage: "https://images.generated.photos/Q93ersM9fNulYaTOdQNK9mnv4bK0-YBCJnDWtck0RnE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzcyODM4LmpwZw.jpg"},
    {name: "Jack Sparrow", profileImage: "https://images.generated.photos/YHBMY-QG2TdQXBg2O69t-_7w7u9ajZpR2lFMq7hdHrI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTY1NDgxLmpwZw.jpg"},
    {name: "Sam Wilson", profileImage: "https://images.generated.photos/R3THeV9Vh-41VuPHhcz90zH3ABdKnrbyC4oUnqQibsY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzcwNDAyLmpwZw.jpg"},
    {name: "Alice Allen", profileImage: "https://images.generated.photos/fvo-IFvzQ3R6dNQtWW4-ZHyocmmjMzBkd4kCOv3y_Ck/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5MjgwLmpwZw.jpg"},
    {name: "Tony Stark", profileImage: "https://randomuser.me/api/portraits/men/54.jpg"},
    {name: "Steve Rogers", profileImage: "https://randomuser.me/api/portraits/men/64.jpg"}
];

function generarUsuarios(){
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let listItem = document.createElement('li');
    let userName = document.createElement('h3');
    let userImage = document.createElement('img');
    userName.innerHTML = user.name;
    userImage.src = user.profileImage;
    listItem.appendChild(userName);
    listItem.appendChild(userImage);
    document.querySelector('ul').appendChild(listItem);    
  }
}
  
generarUsuarios();

function agregarMensaje(){
    var mensajediv = document.createElement('div');
    var mensajespan = document.createElement('span');
    let input= document.getElementById("text-input");
    
    Math.round(Math.random()) == 1?
    mensajespan.className= "green-bubble"
    : mensajespan.className= "white-bubble";
    
    mensajediv.appendChild(mensajespan);
    mensajespan.innerHTML= input.value; 
    input.value="";
    document.getElementById("mensajes").appendChild(mensajediv);
}

document.getElementById("enviar-mensaje").addEventListener("click", ()=>{agregarMensaje()});

document.getElementById("text-input").addEventListener("keypress", (event)=>{
     if (event.key === 'Enter') {
          agregarMensaje()
      }
 });

 window.addEventListener("load", function(event) {
    document.getElementById("user-name").innerHTML= users[0].name;
  });

document.querySelector('ul').addEventListener("click", function nuevaConv(event){
  if(event.target.localName=="h3" ){
     document.getElementById("user-name").innerHTML= event.target.innerHTML; 
     document.getElementById('mensajes').innerHTML="";
  }

  
})

document.getElementById('botton-agregar').addEventListener("click", function agregarUsuario(event){
  let nuevoUsuario= {name:"Superman", profileImage:"https://randomuser.me/api/portraits/men/34.jpg"};
  users.push(nuevoUsuario);
  document.getElementById('ulUsers').innerHTML="";
  generarUsuarios();
})
