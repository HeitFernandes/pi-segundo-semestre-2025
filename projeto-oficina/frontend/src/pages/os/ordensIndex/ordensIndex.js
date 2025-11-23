import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { IoTimer } from 'react-icons/io5';
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaExclamationCircle,
  FaTools,
  FaPlus,
  FaTimes,
} from 'react-icons/fa';

import * as ordens from './styled';
import ChartFat from './components/chartFat';
import ChartCanceladas from './components/chartCanceladas';
import ChartAguardando from './components/chartAguardando';

export default function OrdensIndex() {
  const navigate = useNavigate();
  const handleClickStore = () => {
    navigate('/ordemdeservico/store');
  };

  const [modalAberto, setModalAberto] = useState(null);

  const handleOpen = (tipo) => {
    setModalAberto(tipo);
  };

  const handleClose = () => {
    setModalAberto(null);
  };

  return (
    <>
      <ordens.ContainerFixed>
        <ordens.ButtonPlus onClick={handleClickStore}>
          <ordens.ButtonText>Criar ordem</ordens.ButtonText>
          <FaPlus className="icon" />
        </ordens.ButtonPlus>
      </ordens.ContainerFixed>

      <ordens.DivTop>
        <ordens.Title>Ordens de Serviço</ordens.Title>
        <ordens.Search placeholder="" type="text" />
        <ordens.LabelSearch>
          Buscar <IoIosSearch className="ioSearch" />
        </ordens.LabelSearch>
      </ordens.DivTop>

      <ordens.Container>
        <ordens.Statuscard>
          <FaCheckCircle className="FaCheck" />
          <ordens.TitleContent>Finalizadas</ordens.TitleContent>
          <ordens.SpanContent>8</ordens.SpanContent>
          <ordens.ButtonContent onClick={() => handleOpen('FINALIZADAS')}>
            Ver detalhes
          </ordens.ButtonContent>
        </ordens.Statuscard>

        <ordens.Statuscard>
          <FaHourglassHalf className="FaHoug" />
          <ordens.TitleContent>Aguardando Peças</ordens.TitleContent>
          <ordens.SpanContent>2</ordens.SpanContent>
          <ordens.ButtonContent onClick={() => handleOpen('AGUARDANDO')}>
            Ver detalhes
          </ordens.ButtonContent>
        </ordens.Statuscard>

        <ordens.Statuscard>
          <FaExclamationCircle className="FaExclamation" />
          <ordens.TitleContent>Canceladas</ordens.TitleContent>
          <ordens.SpanContent>1</ordens.SpanContent>
          <ordens.ButtonContent onClick={() => handleOpen('CANCELADAS')}>
            Ver detalhes
          </ordens.ButtonContent>
        </ordens.Statuscard>

        <ordens.Statuscard>
          <FaTools className="FaTools" />
          <ordens.TitleContent>Em Andamento</ordens.TitleContent>
          <ordens.SpanContent>4</ordens.SpanContent>
          <ordens.ButtonContent onClick={() => handleOpen('ANDAMENTO')}>
            Ver detalhes
          </ordens.ButtonContent>
        </ordens.Statuscard>
      </ordens.Container>

      <ordens.ContainerContent>
        <ordens.TitleContainerContent>
          Em andamento
        </ordens.TitleContainerContent>
      </ordens.ContainerContent>

      {/* Lógica do overlay */}
      {modalAberto && (
        <ordens.ModalOverlay onClick={handleClose}>
          <ordens.ModalBox onClick={(e) => e.stopPropagation()}>
            <ordens.CloseButton onClick={handleClose}>
              <FaTimes />
            </ordens.CloseButton>

            {modalAberto === 'FINALIZADAS' && (
              <>
                <ordens.ModalTitle>Ordens Finalizadas</ordens.ModalTitle>
                <ordens.DashboardKPICard>
                  <ordens.KPICard positive>
                    <ordens.TitleKPI>Faturamento</ordens.TitleKPI>
                    <ordens.SpanKPI>R$ 42.500,00</ordens.SpanKPI>
                    <small>+12% vs mês anterior</small>
                  </ordens.KPICard>
                  <ordens.KPICard positive>
                    <ordens.TitleKPI>Motos Entregues</ordens.TitleKPI>
                    <ordens.SpanKPI>45</ordens.SpanKPI>
                    <small>+41% vs mês anterior</small>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Total de Ordens</ordens.TitleKPI>
                    <ordens.SpanKPI>67</ordens.SpanKPI>
                    <small>-7% vs mês anterior</small>
                  </ordens.KPICard>
                </ordens.DashboardKPICard>

                <ordens.ModalTitle>Evolução Financeira</ordens.ModalTitle>
                <ordens.ChartContainer>
                  <ChartFat />
                </ordens.ChartContainer>
              </>
            )}

            {modalAberto === 'AGUARDANDO' && (
              <>
                <ordens.ModalTitle>Ordens Aguardando</ordens.ModalTitle>
                <ordens.DashboardKPICard>
                  <ordens.KPICard $isFixed>
                    <IoTimer className="Timer" />
                    <ordens.TitleKPI>Dias Aguardando Peças</ordens.TitleKPI>
                    <ordens.SpanKPI>3</ordens.SpanKPI>
                    <ordens.TitleKPI>
                      Dias desde que a moto chegou na oficina
                    </ordens.TitleKPI>
                    <ordens.SpanKPI>7</ordens.SpanKPI>
                  </ordens.KPICard>
                  <ordens.ChartContainerAguardando>
                    <ChartAguardando key="gráfico-tempo-medio" />
                  </ordens.ChartContainerAguardando>
                </ordens.DashboardKPICard>
                <ordens.ModalTitle>Panorama Geral</ordens.ModalTitle>
                <ordens.DashboardKPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Forcenedor mais rápido</ordens.TitleKPI>
                    <ordens.SpanKPI>México Motos</ordens.SpanKPI>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Média de espera</ordens.TitleKPI>
                    <ordens.SpanKPI>1,75</ordens.SpanKPI>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Peça mais abrangente</ordens.TitleKPI>
                    <ordens.SpanKPI>Kit de Transmissão da 160</ordens.SpanKPI>
                  </ordens.KPICard>
                </ordens.DashboardKPICard>
                <ordens.DashboardKPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Fornecedor mais demorado</ordens.TitleKPI>
                    <ordens.SpanKPI>Mercado Livre</ordens.SpanKPI>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Média de espera</ordens.TitleKPI>
                    <ordens.SpanKPI>8,25</ordens.SpanKPI>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Peça mais abrangente</ordens.TitleKPI>
                    <ordens.SpanKPI>Ferramentas</ordens.SpanKPI>
                  </ordens.KPICard>
                </ordens.DashboardKPICard>
              </>
            )}

            {modalAberto === 'CANCELADAS' && (
              <>
                <ordens.ModalTitle>Ordens Canceladas</ordens.ModalTitle>
                <ordens.DashboardKPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Valor Perdido</ordens.TitleKPI>
                    <ordens.SpanKPI>R$ 5400,00</ordens.SpanKPI>
                    <small>+12% vs mês anterior</small>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Taxa de Cancelamento</ordens.TitleKPI>
                    <ordens.SpanKPI>
                      15% das ordens abertas foram canceladas
                    </ordens.SpanKPI>
                    <small>+15% vs mês anterior</small>
                  </ordens.KPICard>
                </ordens.DashboardKPICard>

                <ordens.ModalTitle>Panorama Geral</ordens.ModalTitle>
                <ordens.DashboardKPICard>
                  <ordens.ChartContainerCancelado>
                    <ChartCanceladas />
                  </ordens.ChartContainerCancelado>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Último Cancelamento</ordens.TitleKPI>
                    <ordens.SpanKPI>Placa: DEI3C80</ordens.SpanKPI>
                    <ordens.SpanKPI>Cliente: Celso Russomano</ordens.SpanKPI>
                    <ordens.SpanKPI>Motivo</ordens.SpanKPI>
                    <ordens.SpanKPI>
                      O preço para conserto estava muito acima do que eu costumo
                      pagar
                    </ordens.SpanKPI>
                  </ordens.KPICard>
                </ordens.DashboardKPICard>
              </>
            )}

            {modalAberto === 'ANDAMENTO' && (
              <>
                <ordens.ModalTitle>
                  Ordens em Andamento - <span>STATUS</span>
                </ordens.ModalTitle>
                <ordens.DashboardKPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Aguardando Aprovação</ordens.TitleKPI>
                    <ordens.SpanKPI>5</ordens.SpanKPI>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Em processo</ordens.TitleKPI>
                    <ordens.SpanKPI>12</ordens.SpanKPI>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Finalização</ordens.TitleKPI>
                    <ordens.SpanKPI>3</ordens.SpanKPI>
                  </ordens.KPICard>
                </ordens.DashboardKPICard>

                <ordens.ModalTitle>Fluxo</ordens.ModalTitle>
                <ordens.DashboardKPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Capacidade da Oficina</ordens.TitleKPI>
                    <ordens.SpanKPI>79%</ordens.SpanKPI>
                  </ordens.KPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Motos a mais de 2 dias</ordens.TitleKPI>
                    <ordens.SpanKPI>3</ordens.SpanKPI>
                  </ordens.KPICard>
                </ordens.DashboardKPICard>

                <ordens.ModalTitle>Modelo mais atendido</ordens.ModalTitle>
                <ordens.DashboardKPICard>
                  <ordens.KPICard>
                    <ordens.TitleKPI>Honda Titan CG 160</ordens.TitleKPI>
                    <ordens.SpanKPI className="maisAtendido">
                      27 Serviços esse mês
                    </ordens.SpanKPI>
                  </ordens.KPICard>
                </ordens.DashboardKPICard>
              </>
            )}
          </ordens.ModalBox>
        </ordens.ModalOverlay>
      )}
    </>
  );
}
