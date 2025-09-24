import styled from "styled-components";

type propsTableContainer = {
   numeroColumnas:number;
}

export const TableContainer = styled.div<propsTableContainer>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.numeroColumnas},250px);
`