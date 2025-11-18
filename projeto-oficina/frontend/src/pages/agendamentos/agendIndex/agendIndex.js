import React from 'react';
import { IoIosSearch } from 'react-icons/io';

import * as agendamentos from './styled';

export default function AgendamentosIndex() {
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
        <agendamentos.Form>
          <agendamentos.DivLabel>
            <agendamentos.Label>Cliente</agendamentos.Label>
            <agendamentos.InputCliente type="text" />
          </agendamentos.DivLabel>
          <agendamentos.DivLabel>
            <agendamentos.Label>Placa</agendamentos.Label>
            <agendamentos.InputPlaca type="text" />
          </agendamentos.DivLabel>
          <agendamentos.DivLabel>
            <agendamentos.Label>Mecânico</agendamentos.Label>
            <agendamentos.InputFuncionario type="text" />
          </agendamentos.DivLabel>
          <agendamentos.DataHora>
            <agendamentos.Label>Data</agendamentos.Label>
            <agendamentos.InputData type="text" />
            <agendamentos.Label className="LabelHora">
              Horário
            </agendamentos.Label>
            <agendamentos.InputHora type="text" />
          </agendamentos.DataHora>
          <agendamentos.InputObs type="text" placeholder="Observação" />
          <agendamentos.ButtonSubmit>Agendar</agendamentos.ButtonSubmit>
        </agendamentos.Form>
      </agendamentos.ContainerForm>

      <agendamentos.ContainerContent>
        <agendamentos.TitleContent>
          Próximos Agendamentos
        </agendamentos.TitleContent>
      </agendamentos.ContainerContent>
    </>
  );
}
