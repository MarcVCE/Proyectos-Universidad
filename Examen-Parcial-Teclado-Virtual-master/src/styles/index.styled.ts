import { MouseEventHandler } from 'react';
import styled from 'styled-components';

export const ButtonStyle = styled.button<any>`
    background-color: white;
    color: black;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 5px;
    width: 35px;
    height: 35px;
`

export const GrayCointainer = styled.div`
    background-color: #f3eaea;
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        margin:auto;
        width: 500px;
        padding-top: 25px;
    }
`
export const ButtonKeySpaceStyle = styled.button`
    background-color: white;
    color: black;
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
    margin: 5px;
    width: 300px;
    height: 35px;
    border-radius: 20px;
    padding: 5px;
`
export const DivStyleInput = styled.div`
    text-align: center;
    color:black;
    width: 80%;
    white-space: pre-line;
`


/*
Por defecto, los elementos de bloque en HTML tienen una propiedad de CSS llamada white-space 
con un valor de normal. Esto significa que el navegador no conserva los saltos de línea o espacios 
en blanco adicionales en el HTML. En su lugar, los espacios en blanco se contraen en uno solo y los saltos 
de línea se ignoran.
Cuando estableces white-space: pre-line, le estás diciendo al navegador que mantenga los saltos de línea 
que hay en el texto y que los muestre tal como están en el HTML. De esta manera, cualquier salto de línea 
que añadas al contenido de tu elemento será visible en la página.

Sí, sigue siendo necesaria la instrucción setInput(texto => texto + '\n'); para agregar un salto de línea 
a la cadena de texto que se muestra en el componente DivStyleInput.
Sin embargo, el uso de la propiedad white-space: pre-line en el estilo del componente hace que el salto de
línea se represente visualmente en el navegador. Sin esta propiedad, el salto de línea se incluiría en la 
cadena de texto pero no se mostraría en el navegador.
*/