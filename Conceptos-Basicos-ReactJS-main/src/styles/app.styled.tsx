import styled from "styled-components";

export const Table = styled.div`
   display: grid;
   grid-template-columns: repeat(4,300px); //(elementos column, width del elemento)
   gap: 30px; // gap es para eje columna y fila, para eje fila solamente tienes el row-gap
`
export const Card = styled.div`
   border-radius: 10px;
   background-color: lightgray;
   font-size: 30px solid black;
   width: 300px;
   height: 300px;
`
export const CardWrapper = styled.div`
   display: flex;
   /* flex-flow: row wrap; */
   flex: 1 0.5 100%;
   gap: 50px;
`