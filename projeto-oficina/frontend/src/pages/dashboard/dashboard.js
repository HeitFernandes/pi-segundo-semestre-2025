import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

import * as dash from './styled';
import Chartfat from '../../components/charts/chartfat/chartfat';

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
          <h4 className="MiniTitle">R$ 15.486,58</h4>
        </dash.ChartTopOne>
        <dash.ChartTopTwo>
          <dash.TitleTop>Ordens de Serviço</dash.TitleTop>
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
          <dash.ChartTwo />
        </dash.DashTwo>
      </dash.ContainerDash>

      <dash.DashGeral>
        <dash.DashTitle>Visão Geral da Oficina</dash.DashTitle>
        <dash.ChartThree />
        <dash.ChartFinal>
          <dash.ChartFour />
          <dash.ChartFive />
        </dash.ChartFinal>
      </dash.DashGeral>
    </>
  );
}
