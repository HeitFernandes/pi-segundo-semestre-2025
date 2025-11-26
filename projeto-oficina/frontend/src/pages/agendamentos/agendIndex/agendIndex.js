import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch, IoIosCreate } from 'react-icons/io';
import { FaTrash, FaCalendarCheck } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { confirmAlert } from 'react-confirm-alert';
import * as agendamentos from './styled';
import { agendamentosSchema } from '../../../services/validator';
import axios from '../../../services/axios';

export default function AgendamentosIndex() {
  const [agend, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const STATUS_MAP = { A: 'Andamento', C: 'Cancelado', F: 'Finalizado' };

  const handleDelete = async (id, nome) => {
    confirmAlert({
      title: 'Confirmar exclusão',
      message: `Tem certeza que deseja apagar o agendamento do cliente: ${nome}`,
      buttons: [
        {
          label: 'Apagar',
          onClick: async () => {
            try {
              const response = await axios.delete(
                `/agendamentos/delete.php?id=${id}`
              );
              if (response.data.success) {
                toast.success(response.data.message);
                setAgendamentos((prevAgend) =>
                  prevAgend.filter((ag) => ag.AGEN_ID !== id)
                );
              }
            } catch (error) {
              if (error.response) {
                toast.error(error.response.data.message);
              } else {
                toast.error('Erro ao tentar apagar o agendamento.', error);
              }
            }
          },
        },
        {
          label: 'Não',
          onClick: () => {},
        },
      ],
    });
  };

  const handleSetStatus = async (id, nome) => {
    confirmAlert({
      title: 'Confirmar cancelamento',
      message: `Tem certeza que deseja cancelar o agendamento do cliente: ${nome}`,
      buttons: [
        {
          label: 'Cancelar',
          onClick: async () => {
            try {
              const response = await axios.put(
                `/agendamentos/setStatusC.php?id=${id}`
              );
              if (response.data.success) {
                toast.success(response.data.message);
                setAgendamentos((prevAgend) =>
                  prevAgend.map((ag) =>
                    ag.AGEN_ID === id ? { ...ag, AGEN_STATUS: 'C' } : ag
                  )
                );
              }
            } catch (error) {
              if (error.response) {
                toast.error(error.response.data.message);
              } else {
                toast.error('Erro ao tentar cancelar o agendamento.', error);
              }
            }
          },
        },
        {
          label: 'Não',
          onClick: () => {},
        },
      ],
    });
  };

  const handleSetStatusFinalizado = async (id, nome) => {
    confirmAlert({
      title: 'Confirmar finalização',
      message: `Tem certeza que deseja finalizar o agendamento do cliente: ${nome}`,
      buttons: [
        {
          label: 'Finalizar',
          onClick: async () => {
            try {
              const response = await axios.put(
                `/agendamentos/setStatusF.php?id=${id}`
              );
              if (response.data.success) {
                toast.success(response.data.message);
                setAgendamentos((prevAgend) =>
                  prevAgend.map((ag) =>
                    ag.AGEN_ID === id ? { ...ag, AGEN_STATUS: 'F' } : ag
                  )
                );
              }
            } catch (error) {
              if (error.response) {
                toast.error(error.response.data.message);
              } else {
                toast.error('Erro ao tentar finalizar o agendamento.', error);
              }
            }
          },
        },
        {
          label: 'Não',
          onClick: () => {},
        },
      ],
    });
  };

  // Lógica do Store
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(agendamentosSchema),
  });

  // Definindo a rota do backend que o submit do formulário vai utilizar
  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('/agendamentos/store.php', data);
      // Em caso de sucesso, mensagem de sucesso
      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/agendamentos');
        reset();
      }
    } catch (error) {
      // Capturando o erro em caso de erro
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Não foi possível se conectar com o servidor.');
      }
    }
  };

  // Função para percorrer o array de erros, e me mostrar exatamente o erro que eu preciso
  const onInvalid = (validationErrors) => {
    Object.values(validationErrors).forEach((e) => {
      toast.error(e.message);
    });
  };

  // Lógica do index
  useEffect(() => {
    async function fetchAgendamentos() {
      try {
        const response = await axios.get('/agendamentos/index.php');
        if (response.data.success) {
          const agendamentosData = response.data.agendamentos || [];
          setAgendamentos(agendamentosData);

          // Verificando o tamanho do array
          if (agendamentosData.length === 0) {
            toast.info(
              'A Baco Motos ainda não possui agendamentos cadastrados.'
            );
          }
        } else {
          toast.error('Erro ao buscar agendamentos.');
        }
      } catch (error) {
        toast.error('Não foi possível se conectar com o servidor.');
      } finally {
        setLoading(false);
      }
    }

    fetchAgendamentos();
  }, []);

  if (loading) {
    return (
      <agendamentos.ContainerForm>
        <h1>Carregando</h1>
      </agendamentos.ContainerForm>
    );
  }

  return (
    <>
      <agendamentos.DivTop>
        <agendamentos.Title>Agendamentos</agendamentos.Title>
        <agendamentos.Search type="text" placeholder="" />
        <agendamentos.LabelSearch>
          Buscar Cliente <IoIosSearch className="ioSearch" />
        </agendamentos.LabelSearch>
      </agendamentos.DivTop>

      <agendamentos.ContainerForm>
        <agendamentos.Form
          method="POST"
          action=""
          onSubmit={handleSubmit(handleFormSubmit, onInvalid)}
        >
          <agendamentos.DivLabel>
            <agendamentos.Label>Cliente</agendamentos.Label>
            <agendamentos.InputCliente type="text" {...register('cliente')} />
          </agendamentos.DivLabel>
          <agendamentos.DivLabel>
            <agendamentos.Label>Placa</agendamentos.Label>
            <agendamentos.InputPlaca type="text" {...register('placa')} />
          </agendamentos.DivLabel>
          <agendamentos.DivLabel>
            <agendamentos.Label>Mecânico</agendamentos.Label>
            <agendamentos.InputFuncionario
              type="text"
              {...register('funcionario')}
            />
          </agendamentos.DivLabel>
          <agendamentos.DataHora>
            <agendamentos.Label>Data</agendamentos.Label>
            <agendamentos.InputData type="date" {...register('data_agen')} />
            <agendamentos.Label className="LabelHora">
              Horário
            </agendamentos.Label>
            <agendamentos.InputHora type="time" {...register('hora')} />
          </agendamentos.DataHora>
          <agendamentos.InputObs
            type="text"
            placeholder="Observação"
            {...register('observacao')}
          />
          <agendamentos.ButtonSubmit>Agendar</agendamentos.ButtonSubmit>
        </agendamentos.Form>
      </agendamentos.ContainerForm>

      <agendamentos.ContainerContent>
        <agendamentos.TitleContent>
          Próximos Agendamentos
        </agendamentos.TitleContent>

        <agendamentos.StyledTable>
          <agendamentos.Thead>
            <agendamentos.Tr $isHead>
              <agendamentos.Th>ID</agendamentos.Th>
              <agendamentos.Th>Cliente</agendamentos.Th>
              <agendamentos.Th>Placa</agendamentos.Th>
              <agendamentos.Th>Mecânico</agendamentos.Th>
              <agendamentos.Th>Status</agendamentos.Th>
              <agendamentos.Th>Data</agendamentos.Th>
              <agendamentos.Th>Hora</agendamentos.Th>
              <agendamentos.Th>Ações</agendamentos.Th>
            </agendamentos.Tr>
          </agendamentos.Thead>

          <agendamentos.Tbody>
            {agend.length > 0 ? (
              agend.map((agen) => (
                <agendamentos.Tr key={agen.AGEN_ID}>
                  <agendamentos.Td>{agen.AGEN_ID}</agendamentos.Td>
                  <agendamentos.Td>{agen.CLI_NOME}</agendamentos.Td>
                  <agendamentos.Td>{agen.MOTO_PLACA}</agendamentos.Td>
                  <agendamentos.Td>{agen.FUN_NOME}</agendamentos.Td>
                  <agendamentos.Td $status={agen.AGEN_STATUS}>
                    {STATUS_MAP[agen.AGEN_STATUS || 'Status inválido']}
                  </agendamentos.Td>
                  <agendamentos.Td>
                    {agen.AGEN_DATA !== '0000-00-00'
                      ? agen.AGEN_DATA
                      : 'Data não informada'}
                  </agendamentos.Td>
                  <agendamentos.Td>
                    {agen.AGEN_HORA !== '00:00:00'
                      ? agen.AGEN_HORA
                      : 'Hora não informada'}
                  </agendamentos.Td>
                  <agendamentos.Td>
                    <FaCalendarCheck
                      className="check"
                      onClick={() =>
                        handleSetStatusFinalizado(agen.AGEN_ID, agen.CLI_NOME)
                      }
                    />
                    <IoIosCreate className="edit" />
                    <FaTrash
                      className="delete"
                      onClick={() => handleDelete(agen.AGEN_ID, agen.CLI_NOME)}
                    />
                    <MdCancel
                      className="cancel"
                      onClick={() =>
                        handleSetStatus(agen.AGEN_ID, agen.CLI_NOME)
                      }
                    />
                  </agendamentos.Td>
                </agendamentos.Tr>
              ))
            ) : (
              <agendamentos.Tr>
                <agendamentos.Td colSpan="8">
                  Nenhum agendamento cadastrado
                </agendamentos.Td>
              </agendamentos.Tr>
            )}
          </agendamentos.Tbody>
        </agendamentos.StyledTable>
      </agendamentos.ContainerContent>
    </>
  );
}
