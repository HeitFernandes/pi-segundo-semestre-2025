import styled from 'styled-components';
import { Label } from '../motosStore/styled';

export const IdAtivo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

export const InputId = styled.input`
  width: 80%;
  padding: 15px;
  font-size: 20px;
  background: #252525;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  color: #fffff0;

  &:not(:placeholder-shown) + ${Label} {
    left: -29%;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

export const StyledThumb = styled.span`
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #252525;
  transition: transform 0.2s ease-in-out;
`;

export const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  background-color: #555;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  ${HiddenCheckbox}:checked + ${StyledSwitch} {
    background-color: #930707;

    ${StyledThumb} {
      transform: translateX(20px);
    }
  }
`;

export const ToggleLabel = styled.span`
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
`;
