import styled from "styled-components";
export const PrimaryButton = styled.button`
  background-color:blue;
  color:white;
  border-radius: 10px;
  padding:10px 40px;
`
export const StyledErrorMessage = styled.span`
  color:red;
  font-weight:bold;
`

export const TableRow = styled.tr`
  display:grid;
  grid-template-columns:repeat(3,200px);
  gap:5%;
  text-align:left;
`
export const DivRectangulo = styled.div`
  height:100px;
  width: 100px;
  background-color: #${(props=>props.color)};
`
export const SpinnerContainer = styled.div`
    width: 100%;
    height: 99vh;
    opacity: .5;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:grey;
`
export const SpinnerComponent = styled.div`
    width: 64px;
    height: 64px;
    margin: 2rem;
    border-radius: 50%;
    box-shadow:1px 2px 4px 1px black;
    animation: spin 1.5s infinite linear;
    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
` 