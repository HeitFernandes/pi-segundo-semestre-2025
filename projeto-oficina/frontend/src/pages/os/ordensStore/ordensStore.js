import React from 'react';
import * as ordem from './styled';

export default function OrdensStore() {
  return (
    <>
      <ordem.DivTop>
        <ordem.Title>Cadastro Ordem de Serviço</ordem.Title>
      </ordem.DivTop>

      <ordem.Container>
        <ordem.DivImg />

        <ordem.Form>
          <ordem.InputServico type="text" placeholder="Serviço Realizado" />
          <ordem.NomePlaca>
            <ordem.InputNome type="text" placeholder="Nome" />
            <ordem.InputPlaca type="text" placeholder="Placa" />
          </ordem.NomePlaca>
          <ordem.ValorStatus>
            <ordem.InputValor type="text" placeholder="Valor Total" />
            <ordem.InputStatus type="text" placeholder="Status" />
          </ordem.ValorStatus>
          <ordem.Observacao placeholder="Obervação" />
          <ordem.ButtonsWrapper>
            <ordem.BtnSubmit type="submit">Cadastrar</ordem.BtnSubmit>
            <ordem.BtnCancel type="submit">Cancelar</ordem.BtnCancel>
          </ordem.ButtonsWrapper>
        </ordem.Form>
      </ordem.Container>
    </>
  );
}
