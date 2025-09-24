import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const DivWizardID = styled.div`
    color: #5fafa8;
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
`

export const DivWizardIDToElexirs = styled.div`
    margin-left: 20px;
`
export const SpinnerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(FaSpinner)`
  color: #5fafa8;
  font-size: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;