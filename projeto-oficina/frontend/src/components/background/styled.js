import styled from 'styled-components';
import BackImage from '../../img/backimage.png'; // Verifique se o caminho está correto

export const GlobalBackground = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #252525;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 1300px;
    position: absolute;
    height: 1300px;
    left: -300px;
    top: -450px;
    background-image: url(${BackImage});
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(295deg);
    opacity: 0.5;
    z-index: 0;
  }
`;
