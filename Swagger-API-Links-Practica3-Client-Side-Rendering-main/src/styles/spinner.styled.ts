import styled from 'styled-components';

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

