import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from '../../../services/axios';

import clienteSchema from '../../../services/validator';

import * as clientes from './styled';
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
    <clientes.Container>
      <clientes.ArrowReturn>
        <FaArrowAltCircleLeft onClick={handleReturn} />
      </clientes.ArrowReturn>
      <clientes.DivForm>
        <index.DivTitle className="Title">
          <index.Title>Cadastro Clientes</index.Title>
        </index.DivTitle>
        <clientes.Form
          method="POST"
          action=""
          onSubmit={handleSubmit(handleFormSubmit, onInvalid)}
        >
          <clientes.InputName
            {...register('nome')}
            type="text"
            placeholder="Nome Completo"
          />
          <clientes.CpfTel>
            <clientes.InputCPF
              {...register('cpf')}
              type="text"
              placeholder="CPF"
            />
            <clientes.InputTEL
              {...register('telefone')}
              type="number"
              placeholder="Telefone"
            />
          </clientes.CpfTel>
          <clientes.InputEndereco type="text" required placeholder="Endereço" />
          <clientes.CepNum>
            <clientes.InputCep type="number" required placeholder="CEP" />
            <clientes.InputBairro type="text" placeholder="Bairro" />
            <clientes.InputNum type="number" required placeholder="Número" />
          </clientes.CepNum>
          <clientes.InputEmail
            {...register('email')}
            type="text"
            placeholder="E-mail"
          />
          <clientes.InputOBS type="text" placeholder="Observação" />
          <index.BotaoCadastro className="BtnCadastro" type="submit">
            Cadastrar
          </index.BotaoCadastro>
        </clientes.Form>
      </clientes.DivForm>
    </clientes.Container>
  );
}
