import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

import * as dash from './styled';
import Chartfat from '../../components/charts/chartfat/chartfat';
import ChartOS from '../../components/charts/chartOs/chartOs';
import ChartServicos from '../../components/charts/chartServicos/chartServicos';
import ChartTicketMedio from '../../components/charts/chartTicketMedio/chartTicketMedio';

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false); // Stare para controle de animação da seta até o topo

  const toggleVisibility = () => {
    // Verificação do scroll da página para a seta aparecer apenas quando for "scrollada"
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para clicar na seta e voltar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Hooks para ouvir um evento e executar as funções
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Return para remover assim que o componente for desmontado
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <dash.Arrow onClick={scrollToTop}>
          <FaArrowAltCircleUp />
        </dash.Arrow>
      )}

      <dash.DashTop>
        <dash.ChartTopOne>
          <dash.TitleTop>Faturamento Mensal</dash.TitleTop>
          <h4 className="MiniTitle">R$ 17.000,00</h4>
        </dash.ChartTopOne>
        <dash.ChartTopTwo>
          <dash.TitleTop>Ordens de Serviço - ABERTAS</dash.TitleTop>
          <h4 className="MiniTitle">45</h4>
        </dash.ChartTopTwo>
        <dash.ChartTopThree>
          <dash.TitleTop>Motos na Oficina</dash.TitleTop>
          <h4 className="MiniTitle">9</h4>
        </dash.ChartTopThree>
      </dash.DashTop>

      <dash.ContainerDash>
        <dash.DashOne>
          <dash.ChartOne>
            <Chartfat />
          </dash.ChartOne>
        </dash.DashOne>

        <dash.DashTwo>
          <dash.ChartTwo>
            <dash.DivAnimation>
              <dash.ChartDivOne>
                <h2>
                  08/10 - 14:00 <span>TROCA DE ÓLEO</span> Honda CG 160
                </h2>
              </dash.ChartDivOne>
              <dash.ChartDivTwo>
                <h2>
                  09/10 - 10:00 <span>REVISÃO</span> Yamaha Fazer 250
                </h2>
              </dash.ChartDivTwo>
              <dash.ChartDivThree>
                <h2>
                  09/10 - 14:00 <span>TROCA DE PNEU</span> Yamaha YBR 125
                </h2>
              </dash.ChartDivThree>{' '}
              <dash.ChartDivFour>
                <h2>
                  10/10 - 17:00 <span>MOTOR</span> Yamaha Factor 150
                </h2>
              </dash.ChartDivFour>
              <dash.ChartDivOne>
                <h2>
                  08/10 - 14:00 <span>TROCA DE ÓLEO</span> Honda CG 160
                </h2>
              </dash.ChartDivOne>
              <dash.ChartDivTwo>
                <h2>
                  09/10 - 10:00 <span>REVISÃO</span> Yamaha Fazer 250
                </h2>
              </dash.ChartDivTwo>
              <dash.ChartDivThree>
                <h2>
                  09/10 - 14:00 <span>TROCA DE PNEU</span> Yamaha YBR 125
                </h2>
              </dash.ChartDivThree>
              <dash.ChartDivFour>
                <h2>
                  10/10 - 17:00 <span>MOTOR</span> Yamaha Factor 150
                </h2>
              </dash.ChartDivFour>
            </dash.DivAnimation>
          </dash.ChartTwo>
        </dash.DashTwo>
      </dash.ContainerDash>

      <dash.DashGeral>
        <dash.DashTitle>Visão Geral da Oficina</dash.DashTitle>
        <dash.ChartThree>
          <ChartOS />
        </dash.ChartThree>

        <dash.ChartFinal>
          <dash.ChartFour>
            <ChartServicos />
          </dash.ChartFour>

          <dash.ChartFive>
            <ChartTicketMedio />
          </dash.ChartFive>
        </dash.ChartFinal>
      </dash.DashGeral>
    </>
  );
}
