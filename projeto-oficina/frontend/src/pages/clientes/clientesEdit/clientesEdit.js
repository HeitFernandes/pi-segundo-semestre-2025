import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import axios from '../../../services/axios';

import * as clientes from '../clientesStore/styled';
import * as index from '../clientesIndex/styled';

export default function ClientesEdit() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/clientes/index');
  };

  const { id } = useParams();

  const [formData, setFormData] = useState({
    CLI_ID: '',
    CLI_NOME: '',
    CLI_CPF: '',
    CLI_TELEFONE: '',
    CLI_ENDERECO: '',
    CLI_BAIRRO: '',
    CLI_NUMERO: '',
    CLI_EMAIL: '',
    CLI_OBSERVACAO: '',
    CLI_ATIVO: 1,
  });

  useEffect(() => {
    async function getCliente() {
      try {
        const response = await axios.get(`/clientes/show.php?id=${id}`);
        if (response.data.success) {
          setFormData((prevState) => ({
            ...prevState,
            ...response.data.cliente,
          }));
        } else {
          toast.error(response.data.message);
          navigate('/clientes/index');
        }
      } catch (error) {
        toast.error('Erro ao carregar dados.');
        navigate('/clientes/index');
      }
    }

    getCliente();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      // eslint-disable-next-line
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/clientes/update.php', formData);

      toast.success(response.data.message);
      navigate('/clientes/index');

      setFormData({
        CLI_ID: '',
        CLI_NOME: '',
        CLI_CPF: '',
        CLI_TELEFONE: '',
        CLI_ENDERECO: '',
        CLI_BAIRRO: '',
        CLI_NUMERO: '',
        CLI_EMAIL: '',
        CLI_OBSERVACAO: '',
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
    <clientes.Container>
      <clientes.ArrowReturn>
        <FaArrowAltCircleLeft onClick={handleReturn} />
      </clientes.ArrowReturn>
      <clientes.DivForm>
        <index.DivTitle className="Title">
          <index.Title>Edição de Clientes</index.Title>
        </index.DivTitle>
        <clientes.Form method="POST" action="" onSubmit={handleSubmit}>
          <clientes.InputName
            type="text"
            required
            placeholder="Nome Completo"
            name="CLI_NOME"
            value={formData.CLI_NOME}
            onChange={handleChange}
          />
          <clientes.CpfTelCli>
            <clientes.InputCPF
              type="text"
              required
              placeholder="CPF"
              name="CLI_CPF"
              value={formData.CLI_CPF}
              onChange={handleChange}
            />
            <clientes.InputTEL
              type="number"
              placeholder="Telefone"
              name="CLI_TELEFONE"
              value={formData.CLI_TELEFONE}
              onChange={handleChange}
            />
          </clientes.CpfTelCli>
          <clientes.DivAtivo>
            <clientes.LabelAtivo>Cliente Ativo?</clientes.LabelAtivo>
            <clientes.InputAtivo
              type="checkbox"
              name="CLI_ATIVO"
              // eslint-disable-next-line
            checked={formData.CLI_ATIVO == 1}
              onChange={handleChange}
            />
          </clientes.DivAtivo>
          <clientes.InputEndereco
            type="text"
            required
            placeholder="Endereço"
            name="CLI_ENDERECO"
            value={formData.CLI_ENDERECO}
            onChange={handleChange}
          />
          <clientes.CepNum>
            <clientes.InputCep
              type="number"
              required
              placeholder="CEP"
              name="CLI_CEP"
              value={formData.CLI_CEP}
              onChange={handleChange}
            />
            <clientes.InputBairro
              type="text"
              placeholder="Bairro"
              name="CLI_BAIRRO"
              value={formData.CLI_BAIRRO}
              onChange={handleChange}
            />
            <clientes.InputNum
              type="number"
              required
              placeholder="Número"
              name="CLI_NUMERO"
              value={formData.CLI_NUMERO}
              onChange={handleChange}
            />
          </clientes.CepNum>
          <clientes.InputEmail
            type="email"
            required
            placeholder="E-mail"
            name="CLI_EMAIL"
            value={formData.CLI_EMAIL}
            onChange={handleChange}
          />
          <clientes.InputOBS
            type="text"
            placeholder="Observação"
            name="CLI_OBSERVACAO"
            value={formData.CLI_OBSERVACAO}
            onChange={handleChange}
          />
          <index.BotaoCadastro className="BtnCadastro" type="submit">
            Atualizar
          </index.BotaoCadastro>
        </clientes.Form>
      </clientes.DivForm>
    </clientes.Container>
  );
}
