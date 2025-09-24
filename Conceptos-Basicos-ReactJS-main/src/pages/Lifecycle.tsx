import React, { useEffect, useState } from 'react'

function Lifecycle(){
    const [counter1,setCounter1] = useState<number>(0);
    const [counter2,setCounter2] = useState<number>(0);
    useEffect(() => 
      {console.log("Efecto sin depencia")}
    );
    useEffect(() => 
      {console.log("Efecto con depencia")},
    []);
    useEffect(() => 
      {console.log("Efecto con depencia Counter1")},
    [counter1]);
  return (
    <>
     <div>Counter1: {counter1}</div>
     <div>Counter2: {counter2}</div>
     <button onClick={() =>setCounter1(counter1+1)}>Counter 1</button><br/>
     <button onClick={() =>setCounter2(counter2+1)}>Counter 2</button>
    </>
  )
}

export default Lifecycle;