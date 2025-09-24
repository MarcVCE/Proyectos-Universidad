import styled from 'styled-components';
import { StaticImageData } from 'next/image';

type Propsdiv = {
  img:StaticImageData
}

const Paginaprincipal = styled.div<Propsdiv>`
  div{
    display: flex;
    flex-direction: row;
    background-image: url(${ (props=>props.img.src)}); 
    background-size: 200px;
    border-style: dashed;
    margin-top: 40px;
    border-radius: 10px;
    div:nth-child(1){
      width: 10%;
      display: flex;
      align-items: center;
      border: none;
      margin-left: 1.5%;
      margin-top: 0%;
      margin-right: 1%;
       a{
          img{
            width:150px;
            height:150px;
            border-radius: 50%;
          }
       }
    }
    div:nth-child(2){
        width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin:1.5%;
        p:nth-child(1){
          border-style: dashed;
          border-radius: 10px;
          font-size: 25px;
          width: 250px;
          margin-left:2.5%;
        }
        p:nth-child(2){
          border-style: dashed;
          border-radius: 10px;
          font-size: 25px;
          width: 900px;
          margin-left:2.5%;
        }
    }
  }
`
export default Paginaprincipal;
