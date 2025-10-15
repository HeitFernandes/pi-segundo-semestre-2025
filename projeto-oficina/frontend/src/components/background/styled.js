import styled from 'styled-components';
import BackImage from '../../img/backimage.png';
import { Container as SideBarContainer } from '../sidebar/styled';

export const FixedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: #252525;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    height: 100vh;
    left: 50px;
    background-image: url(${BackImage});
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(160deg);
    z-index: -1;
    pointer-events: none;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  width: 100%;
  transition: filter 0.3s ease-in-out;
  overflow-y: auto;
`;

export const GlobalBackground = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;

  & ${SideBarContainer}:hover + ${MainContent} {
    filter: blur(8px);
  }
`;
