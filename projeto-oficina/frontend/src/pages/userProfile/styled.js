import styled from 'styled-components';
import userPhoto from '../../img/profilephoto.png';

export const Container = styled.div`
  background: #fffff0;
  width: 70%;
  height: 600px;
  border: 2px solid #930707;
  border-radius: 12px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 0 8px #930707;
  padding: 3px;
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 30px auto 0;
  height: 100px;
`;

export const DivLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const DivRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const TitleTop = styled.h1`
  width: 70%;
  text-align: center;
  font-size: 60px;
  font-family: 'Kanit', sans-serif;
  font-weight: 800;
  font-style: italic;
  color: #fffff0;
  text-shadow: 4px 4px 4px #930707;
`;

export const TitleCenter = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-family: 'Kanit', sans-serif;
  font-weight: 800;
  font-style: italic;
  color: #fffff0;
  margin-top: 100px;
`;

export const PhotoProfile = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${userPhoto});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 2px solid #930707;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -40%);
  box-shadow: 0 3px 7px #252525;

  .plus {
    background: #930707;
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: 0;
    right: 20%;
    border-radius: 50%;
    color: #fffff0;
    padding: 4px;
    border: 1px solid #fffff0;
    display: block;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: rotateZ(90deg);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #252525;
  border: 2px solid #930707;
  border-radius: 9px;

  ::placeholder {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
  }

  :focus {
    box-shadow: 2px 2px 9px 2px #930707;
  }
`;

export const DivInfoOne = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
  padding: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;

export const NomeCPF = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const LabelInput = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const LoginSenha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const TelefoneData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const InputNome = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  border: 2px solid #930707;
  font-size: 15px;
`;

export const InputCPF = styled.input`
  width: 100%;
  border: 2px solid #930707;
  border-radius: 8px;
  padding: 15px;
  font-size: 15px;
`;

export const InputTelefone = styled.input`
  width: 100%;
  border: 2px solid #930707;
  border-radius: 8px;
  padding: 15px;
  font-size: 15px;
`;

export const InputDataAdmissao = styled.input`
  width: 100%;
  border: 2px solid #930707;
  border-radius: 8px;
  padding: 15px;
  font-size: 15px;
`;

export const InputLogin = styled.input`
  width: 100%;
  border: 2px solid #930707;
  border-radius: 8px;
  padding: 15px;
  font-size: 15px;
`;

export const InputSenha = styled.input`
  width: 100%;
  border: 2px solid #930707;
  border-radius: 8px;
  padding: 15px;
  font-size: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #fffff0;
  margin-left: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: italic;
  text-transform: uppercase;
`;

export const BtnInfo = styled.button`
  width: 250px;
  margin: 0 auto;
  background: #56ab2f;
  border: none;
  border: 2px solid #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-style: italic;
  border-radius: 30px;
  color: #fffff0;
  font-size: 15px;
  padding: 15px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }

  &:focus {
    box-shadow: 0 0 0 0;
  }
`;
