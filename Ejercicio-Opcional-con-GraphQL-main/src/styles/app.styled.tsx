import { StaticImageData } from "next/image";
import styled, { createGlobalStyle } from "styled-components";

type Propsdiv = {
  img:StaticImageData
} 
  
export const BodyPaginaprincipal = createGlobalStyle<Propsdiv>`
  body{
    background-image: url(${ (props=>props.img.src)});
  }
` 

export const CharactersDiv= styled.div`
  display:grid;
  grid-template-columns:repeat(3, 500px);
  justify-content:center;
  align-content:center;
  position: relative;
`
export const Card= styled.div`
  text-align: left;
  width: 25rem;
  background: #fff;
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin: 30px;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(to right, #DECBA4, #3E5151);
`
export const ImageHolder= styled.div`
  width: 100%;
  position: relative;
  display:flex;
  flex-direction:column-reverse;
  align-items: center;
  text-align: center;
  img{
   object-fit: cover;
   border-radius: 1.5rem;
  }
`

export const RandomColor= styled.div<any>`
   background-color:#${(props=>props.color)};
   height:100px;
   width:100px;
`
export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:grey;
`
export const ButtonStyle = styled.button`
  width: 150px;
  height: 50px;
  background-color: aqua;
  font-size: 25px;
  border-radius: 10px;
  border: solid #378282;
  transform: translate(0,5px);
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const WrapperButton = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 25%;
`

export const WrapperSearch = styled.div`
    margin-top:50px;
    position: relative;
`

export const InputStyle = styled.input`
    width: 250px;
    height: 40px;
`

export const WrapperCharacterDiv = styled.div`
    display: flex;
    flex-direction: row;
`
