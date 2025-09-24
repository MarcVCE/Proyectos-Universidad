import React, { useState } from 'react'

function Counter(){
    const [counter,setCounter] = useState<number>(0);
    function Conteo(){
        setCounter(counter + 1);
        setCounter(prevState => prevState + 1);
        setCounter(prevState => prevState + 1);
    }
    function SacarConteo(){
        return (<h1>Número: {counter}</h1>);
    }
    
  return (
    <>
      {SacarConteo()}
      <button onClick={() => Conteo()}>Click para número siguiente</button>
    </>
  )
}

export default Counter;