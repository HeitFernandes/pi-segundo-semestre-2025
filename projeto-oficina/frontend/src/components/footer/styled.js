import styled from 'styled-components';
import logoNexBit from '../../img/logoNexBit.png';

export const FooterDiv = styled.div`
  background: #930707;
  width: 100%;
  height: 180px;
  padding: 10px;
  margin-top: 50px;
  position: absolute;
  border-radius: 4px;
  bottom: 0;
  z-index: -1;
  box-shadow: 0 1px 8px #fffff0;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
`;

export const Wavecontainer = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 50px;
  position: absolute;
  top: -170px;
  left: 50px;
  height: 28px;
  line-height: 0;

  svg {
    display: block;
    width: 100%;
    opacity: 0.8;
  }
`;

export const Svg = styled.svg``;
export const PathSvg = styled.path``;

export const NexBit = styled.div`
  background-image: url(${logoNexBit});
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 44%;
  box-shadow: 0 0 4px #fffff0;
`;

export const FooterName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  width: 500px;
  height: 130px;
  margin-left: 100px;
  color: #fffff0;
  position: relative;

  .Heart {
    color: purple;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

export const FooterC = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 140px;
  color: #fffff0;
  position: absolute;
  right: 0;
  bottom: 15px;
  line-height: 1.5;
  span {
    width: 60%;
    font-style: italic;
  }
`;
