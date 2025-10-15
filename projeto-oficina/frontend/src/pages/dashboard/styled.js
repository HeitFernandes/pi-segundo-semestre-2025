import styled from 'styled-components';

export const ContainerDash = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 500px;
  margin: 40px auto;
`;

export const DashOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 48%;
  height: 500px;
  border-radius: 12px;
`;

export const ChartOne = styled.div`
  width: 710px;
  height: 480px;
  border: 1px solid #930707;
  border-radius: 12px;
`;

export const DashTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 48%;
  height: 500px;
  border-radius: 12px;
`;

export const ChartTwo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 710px;
  height: 480px;
  border-radius: 12px;
  border: 1px solid #930707;
`;

export const ChartThree = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 99%;
  height: 500px;
  border-radius: 12px;
  border: 1px solid #930707;
`;

export const DashTitle = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-style: normal;
  margin-top: 10px;
  color: #fffff0;
  width: 99%;
  background: #970707;
  text-align: center;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 0 2px 7px #252525;
`;

export const DashGeral = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 20px 20px;
  gap: 20px;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fffff0;
    border-radius: 12px;
    z-index: -1;
  }
`;

export const ChartFinal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
`;

export const ChartFour = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  width: 700px;
  height: 450px;
  border-radius: 12px;
  border: 1px solid #930707;
`;

export const ChartFive = styled.div`
  width: 700px;
  height: 450px;
  border: 1px solid #930707;
  border-radius: 12px;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 30px;
  bottom: 10px;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #970707;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    background: #fff;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: -1;
  }
`;

export const DashTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
  background: #252525;
  width: 80%;
  height: 150px;
  padding: 20px 10px;
  border-radius: 12px;
  gap: 15px;
  box-shadow: 0 1px 8px #fffff0;
`;

export const TitleTop = styled.h4`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #fffff0;
  margin: 0 auto;
  width: 50%;
  background: #970707;
  text-align: center;
  padding: 5px;
  border-radius: 7px;
  box-shadow: 0 1px 8px #fffff0;
`;

export const ChartTopOne = styled.div`
  background: #252525;
  width: 40%;
  height: 140px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #970707;
  text-align: center;

  .MiniTitle {
    color: #fffff0;
    margin-top: 30px;
    font-size: 25px;
  }
`;

export const ChartTopTwo = styled.div`
  background: #252525;
  width: 40%;
  height: 140px;
  border-radius: 8px;
  border: 1px solid #970707;
  padding: 10px;
  text-align: center;

  .MiniTitle {
    color: #fffff0;
    margin-top: 30px;
    font-size: 25px;
  }
`;

export const ChartTopThree = styled.div`
  background: #252525;
  width: 40%;
  height: 140px;
  border-radius: 8px;
  border: 1px solid #970707;
  padding: 10px;
  text-align: center;

  .MiniTitle {
    color: #fffff0;
    margin-top: 30px;
    font-size: 25px;
  }
`;
