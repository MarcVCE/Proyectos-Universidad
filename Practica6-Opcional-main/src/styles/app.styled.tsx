import styled from "styled-components";
 


export const Card = styled.div`
 width: 25rem;
  height: auto;
  background: #fff;
  border-radius: 1.5rem;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
`

export const ImgHolder = styled.div`
width: 100%;
  height: auto;
  position: relative;
   display:flex;
    justify-content:center;
  img{
   
     width: 150px;
  height: 150px;
  max-height: 15rem;
  object-fit: cover;
  border-radius: 1.5rem;
}
  }
`
export const BlogTitle = styled.h3`
  color: #22215B;
  padding: 1rem 0;
  font-size: 1.5rem;
`

export const Description = styled.p`
padding: 1rem 0;
  color: #22215B80;
  font-size: 1rem;
   text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const DivFlex = styled.div`
display: flex;
justify-content: space-between;
`
export const Enlace = styled.div`
display: flex;
    justify-content: end;
`

export const ButtonBlue= styled.button`
  background-color: #220cffbf;
  color:white;
  font-size:13px;
  padding:7px 35px;
  border-radius:6px;
  margin:5px;
`
export const ErrTxt= styled.span`
   color:red;
   font-weight:bold;
`
export const ScsTxt= styled.span`
   color:green;
   font-weight:bold;
`
export const DivCenter= styled.div`
   display:flex;
   justify-content:center;
`
export const DivComentarios= styled.div`
    background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
