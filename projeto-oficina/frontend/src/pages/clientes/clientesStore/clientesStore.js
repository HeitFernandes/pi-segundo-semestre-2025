import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from '../../../services/axios';

import clienteSchema from '../../../services/validator';

import {
  Container,
  DivForm,
  Form,
  InputName,
  CpfTel,
  InputCPF,
  InputTEL,
  InputEndereco,
  CepNum,
  InputCep,
  InputNum,
  InputEmail,
  InputOBS,
  InputBairro,
  ArrowReturn,
} from './styled';
import * as index from '../clientesIndex/styled';

export default function ClientesStore() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/clientes/index');
  };

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(clienteSchema),
  });

  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('/clientes/store.php', data);

      toast.success(response.data.message);
      navigate('/clientes/index');

      reset();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Não foi possível se conectar com o servidor.');
      }
    }
  };

  const onInvalid = (validationErrors) => {
    Object.values(validationErrors).forEach((error) => {
      toast.error(error.message);
    });
  };

  return (
    <Container>
      <ArrowReturn>
        <FaArrowAltCircleLeft onClick={handleReturn} />
      </ArrowReturn>
      <DivForm>
        <index.DivTitle className="Title">
          <index.Title>Cadastro Clientes</index.Title>
        </index.DivTitle>
        <Form
          method="POST"
          action=""
          onSubmit={handleSubmit(handleFormSubmit, onInvalid)}
        >
          <InputName
            {...register('nome')}
            type="text"
            placeholder="Nome Completo"
          />
          <CpfTel>
            <InputCPF {...register('cpf')} type="text" placeholder="CPF" />
            <InputTEL
              {...register('telefone')}
              type="number"
              placeholder="Telefone"
            />
          </CpfTel>
          <InputEndereco type="text" required placeholder="Endereço" />
          <CepNum>
            <InputCep type="number" required placeholder="CEP" />
            <InputBairro type="text" placeholder="Bairro" />
            <InputNum type="number" required placeholder="Número" />
          </CepNum>
          <InputEmail {...register('email')} type="text" placeholder="E-mail" />
          <InputOBS type="text" placeholder="Observação" />
          <index.BotaoCadastro className="BtnCadastro" type="submit">
            Cadastrar
          </index.BotaoCadastro>
        </Form>
      </DivForm>
    </Container>
  );
}
