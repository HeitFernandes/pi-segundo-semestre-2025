import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import * as ordem from '../ordensStore/styled';
import { ArrowReturn } from '../../clientes/clientesStore/styled';
import { ordensSchema } from '../../../services/validator';
import axios from '../../../services/axios';

export default function OrdensStore() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/ordemdeservico');
  };

  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(ordensSchema),
  });

  useEffect(() => {
    async function getOrdem() {
      try {
        const response = await axios.get(`/os/show.php?id=${id}`);
        const dataOrdem = response.data.ordem;

        if (response.data.success) {
          reset({
            servico: dataOrdem.ORDEM_SERVICO_REALIZADO,
            valor: dataOrdem.ORDEM_VALOR_TOTAL,
            observacao: dataOrdem.ORDEM_OBSERVACAO,
            funcionario: dataOrdem.FUN_NOME,
            cliente: dataOrdem.CLI_CPF,
            placa: dataOrdem.MOTO_PLACA,
          });
        } else {
          toast.error(response.data.message);
          navigate('/ordemdeservico');
        }
      } catch (error) {
        toast.error('Erro ao carregar dados.');
        navigate('/ordemdeservico');
      }
    }

    if (id) {
      getOrdem();
    }
  }, [id, navigate, reset]);

  const handleFormSubmit = async (data) => {
    try {
      const dataToSend = {
        ...data,
        ORDEM_ID: id,
      };
      const response = await axios.put('/os/update.php', dataToSend);

      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/ordemdeservico');
      } else {
        toast.info(response.data.message);
        navigate('/ordemdeservico');
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ocorreu um erro ao tentar se conectar com o servidor.');
      }
    }
  };

  const onInvalid = (validationErrors) => {
    Object.values(validationErrors).forEach((e) => {
      toast.error(e.message);
    });
  };

  return (
    <>
      <ordem.DivTop>
        <ordem.Title>Cadastro Ordem de Serviço</ordem.Title>
      </ordem.DivTop>

      <ordem.Container>
        <ordem.DivImg />
        <ArrowReturn className="ArrowReturnOrdem">
          <FaArrowAltCircleLeft onClick={handleReturn} />
        </ArrowReturn>

        <ordem.Form
          method="POST"
          action=""
          onSubmit={handleSubmit(handleFormSubmit, onInvalid)}
        >
          <ordem.InputServico
            type="text"
            placeholder="Serviço Realizado"
            {...register('servico')}
          />
          <ordem.NomePlaca>
            <ordem.InputNome
              type="text"
              placeholder="Cliente"
              {...register('cliente')}
            />
            <ordem.InputPlaca
              type="text"
              placeholder="Placa"
              {...register('placa')}
            />
          </ordem.NomePlaca>
          <ordem.ValorStatus>
            <ordem.InputValor
              type="number"
              placeholder="Valor Total"
              {...register('valor')}
            />
            <ordem.InputStatus
              type="text"
              placeholder="Mecânico"
              {...register('funcionario')}
            />
          </ordem.ValorStatus>
          <ordem.Observacao
            placeholder="Obervação"
            {...register('observacao')}
          />
          <ordem.ButtonsWrapper>
            <ordem.BtnSubmit>Cadastrar</ordem.BtnSubmit>
            <ordem.BtnCancel
              onClick={(e) => {
                e.preventDefault();
                reset();
                navigate('/ordemdeservico');
              }}
            >
              Cancelar
            </ordem.BtnCancel>
          </ordem.ButtonsWrapper>
        </ordem.Form>
      </ordem.Container>
    </>
  );
}
