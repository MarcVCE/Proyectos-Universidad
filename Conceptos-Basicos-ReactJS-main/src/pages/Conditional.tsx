import React, { useState } from 'react'

function Conditional() {
  const [cadena1,setCadena1] = useState<string>("");
  const [isShowing,setIsShowing] = useState<boolean>(false);
  return (
    <>
     <input type="text" value={cadena1} placeholder='Escribe tu texto' 
        onChange={(event) => setCadena1(event.target.value)} />
     <button onClick={() => setIsShowing(!isShowing)}>Mostrar</button>
     {isShowing ? <h1>{`${isShowing}`}</h1> : ""}
    </>
  )
}

export default Conditional;