import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import axios from '../../../services/axios';

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

  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    endereco: '',
    cep: '',
    numero: '',
    email: '',
    observacao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/clientes/store.php', formData);

      toast.success(response.data.message);
      navigate('/clientes/index');

      setFormData({
        nome: '',
        cpf: '',
        telefone: '',
        endereco: '',
        cep: '',
        bairro: '',
        numero: '',
        email: '',
        observacao: '',
      });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Não foi possível se conectar com o servidor.');
      }
    }
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
        <Form method="POST" action="" onSubmit={handleSubmit}>
          <InputName
            type="text"
            required
            placeholder="Nome Completo"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <CpfTel>
            <InputCPF
              type="text"
              required
              placeholder="CPF"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
            <InputTEL
              type="number"
              placeholder="Telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </CpfTel>
          <InputEndereco
            type="text"
            required
            placeholder="Endereço"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
          <CepNum>
            <InputCep
              type="number"
              required
              placeholder="CEP"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
            />
            <InputBairro
              type="text"
              placeholder="Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
            <InputNum
              type="number"
              required
              placeholder="Número"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
            />
          </CepNum>
          <InputEmail
            type="email"
            required
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputOBS
            type="text"
            placeholder="Observação"
            name="observacao"
            value={formData.observacao}
            onChange={handleChange}
          />
          <index.BotaoCadastro className="BtnCadastro" type="submit">
            Cadastrar
          </index.BotaoCadastro>
        </Form>
      </DivForm>
    </Container>
  );
}
