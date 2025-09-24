import styled from 'styled-components';

const PaginaSecundaria = styled.form`
   form{
     div:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3%;
       button{
          display: inline-block;
          padding: 0.3em 1em;
          text-decoration: none;
          color: #520652;
          border: solid 2px #520652;
          border-radius: 3px;
          transition: .4s;
          width: 20%;
          height: 30px;
          :hover{
            background: #520652;
            color: white;
          }
       }
     }
   }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3%;
        img{
         
        } 
        p:nth-child(2){
           font-weight: bold;
           font-size: 25px;
        }
        p:nth-child(3){
           border-style: dashed;
           border-radius: 10px;
           width: 900px;
           height: 100px;
        }
    }
`
export default PaginaSecundaria;

// img cuenta como nth-child(1), aunque no lo pongas, porque es el primer hijo 
//de div:nth-child(2), y div:nth-child(2) es el segundo hijo de form