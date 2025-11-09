import React from 'react';
import * as bikes from './styled';

export default function MotosIndex() {
  return (
    <>
      <bikes.DivTitle>
        <bikes.TitleTop>Motos Cadastradas</bikes.TitleTop>
      </bikes.DivTitle>

      <bikes.Container>
        <bikes.InsertContent>
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
