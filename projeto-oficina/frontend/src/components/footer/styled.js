import styled from 'styled-components';
import logoNexBit from '../../img/logoNexBit.png';

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #930707;
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 50px;
  position: absolute;
  border-radius: 4px;
  bottom: 0;
  z-index: -1;
  box-shadow: 0 1px 8px #fffff0;

  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
`;

export const NexBit = styled.div`
  background-image: url(${logoNexBit});
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 46%;
  box-shadow: 0 0 4px #fffff0;
`;

export const FooterName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 500px;
  height: 100px;
  margin-left: 100px;
  color: #fffff0;
  .Heart {
    color: purple;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const FooterC = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  width: 500px;
  height: 100px;
  color: #fffff0;
  position: absolute;
  right: 0;
  bottom: 7px;

  span {
    width: 60%;
    font-style: italic;
  }
`;
