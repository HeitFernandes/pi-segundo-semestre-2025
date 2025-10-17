import styled from 'styled-components';
import Boneco404 from '../../img/boneco404.png';

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 880px;
  height: 540px;
  background: #252525;
  color: #fffff0;
  text-align: center;
  margin: 150px auto;
  box-shadow: 0 2px 12px #930707;
  border: 1px solid #a5a5a5ff;
  border-radius: 20px;
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  position: relative;

  .p404 {
    font-size: 220px;
  }

  &::before {
    content: '';
    background-image: url(${Boneco404});
    background-repeat: no-repeat;
    background-size: 280px 400px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -150px;
    left: -120px;
  }
`;

export const TitleOne = styled.div`
  width: 100%;
  text-align: center;
  height: auto;
  position: absolute;
  padding: 20px;
  top: 30px;

  .MiniTitle {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 25px;
  }

  .Ops {
    font-size: 40px;
    text-transform: uppercase;
  }
`;

export const Footer404 = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  padding: 30px;
  bottom: 60px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  white-space: nowrap;
`;

export const DivBoneco404 = styled.div`
  background-image: url(${Boneco404});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`;
