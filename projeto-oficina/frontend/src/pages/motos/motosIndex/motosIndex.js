import React from 'react';
import { useNavigate } from 'react-router';

import * as bikes from './styled';

export default function MotosIndex() {
  const navigate = useNavigate();

  const handleNewClick = () => {
    navigate('/motos/store');
  };

  return (
    <>
      <bikes.DivTitle>
        <bikes.TitleTop>Motos Cadastradas</bikes.TitleTop>
      </bikes.DivTitle>

      <bikes.Container>
        <bikes.ButtonNew onClick={handleNewClick}>+Nova Moto</bikes.ButtonNew>

        <bikes.InsertContent>
          <bikes.Containers />
          <bikes.Containers />
          <bikes.Containers />
          <bikes.Containers />
          <bikes.Containers />
          <bikes.Containers />
          <bikes.Containers />
        </bikes.InsertContent>
      </bikes.Container>
    </>
  );
}
