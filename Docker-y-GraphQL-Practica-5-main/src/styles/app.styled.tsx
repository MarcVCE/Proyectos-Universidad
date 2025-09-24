import styled from "styled-components";

type color = {color:string;}

export const PrimaryButton = styled.button`
  background-color:blue;
  color:white;
  border-radius: 10px;
  padding:10px 40px;
`

export const LiStyled = styled.li`
  text-decoration: none;
  color:black;
`
export const RomanStyled = styled.span`
  font-size: 50px;
  font-weight: bold;
`
export const PlanetColorStyled = styled.div<color>`
  background-color: ${(props => props.color)};
  border-radius: 50%;
  height: 10px;
  width: 10px;
`
export const UlStyled = styled.ul`
  list-style-type: none;
  width: 20%;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
  padding: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  background-color: #80808066;
  border-radius: 10px;
  text-align:center;
  line-height: 2em; 
`