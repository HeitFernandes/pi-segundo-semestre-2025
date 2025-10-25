import React from 'react';
import { FaPlus } from 'react-icons/fa';

import {
  Container,
  PhotoProfile,
  Form,
  TitleTop,
  DivTitle,
  DivLeft,
  DivRight,
  DivInfoOne,
  NomeCPF,
  TelefoneData,
  InputNome,
  InputCPF,
  InputDataAdmissao,
  InputTelefone,
  InputLogin,
  InputSenha,
  Label,
  LabelInput,
  LoginSenha,
  TitleCenter,
  BtnInfo,
} from './styled';

export default function UserProfile() {
  return (
    <>
      <DivTitle>
        <DivLeft>
          <TitleTop>Painel</TitleTop>
        </DivLeft>
        <DivRight>
          <TitleTop>Usuário</TitleTop>
        </DivRight>
      </DivTitle>
      <Container>
        <PhotoProfile>
          <FaPlus className="plus" />
        </PhotoProfile>
        <Form>
          <TitleCenter>Edite ou mantenha suas informações</TitleCenter>
          <DivInfoOne>
            <NomeCPF>
              <LabelInput>
                <Label>Nome</Label>
                <InputNome
                  type="text"
                  placeholder="Fernando Henrique Cardoso"
                />
              </LabelInput>
              <LabelInput>
                <Label>CPF</Label>
                <InputCPF type="number" placeholder="487.325.469-27" />
              </LabelInput>
            </NomeCPF>
            <TelefoneData>
              <LabelInput>
                <Label className="tel">Telefone</Label>
                <InputTelefone type="number" placeholder="(19)99562-1267" />
              </LabelInput>
              <LabelInput>
                <Label className="dataAd">Data de Admissão</Label>
                <InputDataAdmissao type="date" placeholder="03/10/2025" />
              </LabelInput>
            </TelefoneData>
            <LoginSenha>
              <LabelInput>
                <Label>Login</Label>
                <InputLogin type="text" placeholder="seulogin" />
              </LabelInput>
              <LabelInput>
                <Label>Senha</Label>
                <InputSenha type="text" placeholder="suasenha" />
              </LabelInput>
            </LoginSenha>
          </DivInfoOne>
          <BtnInfo>Atualizar</BtnInfo>
        </Form>
      </Container>
    </>
  );
}
