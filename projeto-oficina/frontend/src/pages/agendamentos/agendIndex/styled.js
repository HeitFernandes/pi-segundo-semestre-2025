import styled from 'styled-components';

export const DivTop = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
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
  margin-left: 6%;
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
  right: 3%;
  top: 2.8%;
  width: 315px;

  ${Search}:not(:placeholder-shown) + & {
    opacity: 0;
  }

  .ioSearch {
    font-size: 25px;
  }
`;

export const ContainerForm = styled.div`
  background: #252525;
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  border: 1px solid #fffff0;
  border-radius: 15px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    10px 8px 20px rgba(0, 0, 0, 0.5),
    2px 2px 2px #d9d9d96c inset;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  width: 95%;
`;

export const DivLabel = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
  text-transform: uppercase;
  font-size: 20px;
  color: #fffff0;
  opacity: 0.7;
  cursor: text;
  pointer-events: none;

  .LabelHora {
    margin-right: 0;
  }
`;

export const DataHora = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputCliente = styled.input`
  width: 480px;
  padding: 7px;
  background: #252525;
  border: 1px solid #fffff0;
  border-radius: 12px;
  color: #fffff0;
  font-size: 20px;
`;

export const InputPlaca = styled.input`
  width: 480px;
  padding: 7px;
  background: #252525;
  border: 1px solid #fffff0;
  border-radius: 12px;
  color: #fffff0;
  font-size: 20px;
`;

export const InputData = styled.input`
  width: 130px;
  padding: 7px;
  background: #252525;
  border: 1px solid #fffff0;
  border-radius: 12px;
  color: #fffff0;
  font-size: 20px;
`;

export const InputHora = styled.input`
  width: 130px;
  padding: 7px;
  background: #252525;
  border: 1px solid #fffff0;
  border-radius: 12px;
  color: #fffff0;
  font-size: 20px;
`;

export const InputObs = styled.textarea`
  width: 92%;
  height: 150px;
  padding: 7px;
  background: #252525;
  border: 1px solid #fffff0;
  border-radius: 12px;
  color: #fffff0;
  font-size: 20px;

  &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
    text-transform: uppercase;
    color: #fffff0;
    opacity: 0.6;
    font-size: 17px;
  }
`;

export const InputFuncionario = styled.input`
  width: 480px;
  padding: 7px;
  background: #252525;
  border: 1px solid #fffff0;
  border-radius: 12px;
  color: #fffff0;
  font-size: 20px;
`;

export const ButtonSubmit = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #930707;
  margin: 0 auto;
  border: none;
  padding: 13px;
  border: 1px solid #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-style: normal;
  text-transform: uppercase;
  color: #fffff0;
  border-radius: 9px;
  font-size: 20px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    6px 6px 12px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ContainerContent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: #252525;
  border: 1px solid #930707;
  border-radius: 12px;
  height: 350px;
  margin-bottom: 250px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.5),
    15px 12px 20px rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const TitleContent = styled.h2`
  width: 300px;
  padding: 5px;
  position: absolute;
  top: -14%;
  left: 1%;
  background: #930707;
  border: 1px solid #fffff0;
  border-radius: 8px;
  text-align: center;
  font-size: 19px;
`;
