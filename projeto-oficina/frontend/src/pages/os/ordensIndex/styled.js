import styled, { keyframes } from 'styled-components';

const SIDEBAR_WIDTH = '100px';

export const DivTop = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: calc(${SIDEBAR_WIDTH} + 20px);
`;

export const Title = styled.h1`
  color: white;
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-style: normal;
  background: #930707;
  border: 1px solid #fffff0;
  padding: 7px;
  border-radius: 40px;
  box-shadow: 0 0 4px #fffff0;
  width: 320px;
`;

export const Search = styled.input`
  width: 350px;
  padding: 15px;
  margin-right: 2%;
  background: #252525;
  border: 1px solid #fffff0;
  border-radius: 6px;
  color: #fffff0;
  font-size: 20px;
  position: relative;
`;

export const LabelSearch = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
  text-transform: uppercase;
  font-size: 18px;
  color: #fffff0;
  opacity: 0.7;
  cursor: text;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  right: 2.9%;
  top: 2.8%;
  width: 315px;

  ${Search}:not(:placeholder-shown) + & {
    opacity: 0;
  }

  .ioSearch {
    font-size: 25px;
  }
`;

export const Container = styled.div`
  width: calc(100% - ${SIDEBAR_WIDTH});
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-left: ${SIDEBAR_WIDTH};
  gap: 30px;
`;

export const Statuscard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 23%;
  height: 100%;
  background: #252525;
  border: 2px solid #930707;
  border-radius: 20px;
  gap: 15px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.3),
    10px 8px 20px rgba(0, 0, 0, 0.3),
    2px 2px 25px #930707;

  .FaCheck {
    font-size: 100px;
    color: #73baa5;
  }

  .FaHoug {
    font-size: 100px;
    color: #930707;
  }
  .FaExclamation {
    font-size: 100px;
    color: #930707;
  }
  .FaTools {
    font-size: 100px;
    color: #73baa5;
  }
`;

export const TitleContent = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
`;

export const SpanContent = styled.span`
  text-align: center;
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
`;

export const ButtonContent = styled.button`
  background: #252525;
  width: 200px;
  color: #fffff0;
  border: none;
  border: 1px solid #fffff0;
  box-shadow: 0 0 6px #fffff0 inset;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 6px #930707 inset;
    border: 1px solid #930707;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ContainerContent = styled.div`
  width: calc(100% - ${SIDEBAR_WIDTH} - 50px);
  margin-left: calc(${SIDEBAR_WIDTH} + 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  background: #252525;
  border: 1px solid #930707;
  border-radius: 12px;
  height: 350px;
  margin-bottom: 270px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.5),
    15px 12px 20px rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const TitleContainerContent = styled.h2`
  width: 300px;
  padding: 5px;
  position: absolute;
  top: -14%;
  left: 40%;
  background: #930707;
  border: 1px solid #fffff0;
  border-radius: 8px;
  text-align: center;
  font-size: 19px;
`;

export const ContainerFixed = styled.div`
  position: fixed;
  bottom: 2%;
  right: 1%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonText = styled.span`
  opacity: 0;
  visibility: hidden;
  color: #fffff0;
  width: 0;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
`;

export const ButtonPlus = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #930707;
  width: 50px;
  height: 50px;
  border: 1px solid #fffff0;
  border-radius: 50px;
  color: #fffff0;
  cursor: pointer;
  font-size: 18px;
  transition:
    width 0.3s ease-in-out,
    background 0.2s;

  &:hover {
    width: 200px;
    background: #a50b0b;
    border-radius: 25px;
    transform: scale(1.1);
  }

  &:hover ${ButtonText} {
    opacity: 1;
    width: auto;
    visibility: visible;
    margin-right: 10px;
    padding-left: 10px;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease;
`;

export const ModalBox = styled.div`
  background: #1a1a1a;
  width: 1200px;
  padding: 30px;
  border-radius: 12px;
  border: 2px solid #930707;
  box-shadow: 0 0 15px rgba(147, 7, 7, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const ModalTitle = styled.h2`
  color: #fffff0;
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;

  span {
    color: #56ab2f;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: #fffff0;
  font-size: 20px;
  cursor: pointer;
  transition:
    color 0.2s,
    transform 0.4s;
  background: #930707;
  padding: 7px;

  &:hover {
    color: #252525;
    transform: rotateZ(180deg);
  }
`;

export const DashboardKPICard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const SpanKPI = styled.span`
  text-align: center;
  font-size: 22px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;

  &.maisAtendido {
    background: #930707;
    border: 1px solid #fffff0;
    padding: 5px;
    border-radius: 8px;
  }
`;

export const TitleKPI = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 22px;
  color: #fffff0;
`;

export const KPICard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  background: #252525;
  flex: ${(props) => (props.$isFixed ? '0 0 300px' : '1')};
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #333;
  small {
    color: ${(props) => (props.positive ? 'green' : 'red')};
  }

  .Timer {
    font-size: 100px;
    color: #73baa5;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px dashed #444;
  border-radius: 8px;
  padding: 10px;
`;

export const ChartContainerCancelado = styled.div`
  width: 50%;
  height: 400px;
  background: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #444;
  border-radius: 8px;
  padding: 10px;
`;

export const ChartContainerAguardando = styled.div`
  width: 100%;
  height: 100%;
  background: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #444;
  border-radius: 8px;
  padding: 10px;
`;
