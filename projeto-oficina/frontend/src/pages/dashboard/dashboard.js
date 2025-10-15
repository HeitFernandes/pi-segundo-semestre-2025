import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

import {
  ContainerDash,
  DashOne,
  DashTwo,
  DashGeral,
  ChartOne,
  ChartTwo,
  ChartThree,
  ChartFinal,
  ChartFour,
  ChartFive,
  DashTitle,
  Arrow,
  DashTop,
  ChartTopOne,
  ChartTopTwo,
  ChartTopThree,
  TitleTop,
} from './styled';

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Arrow onClick={scrollToTop}>
          <FaArrowAltCircleUp />
        </Arrow>
      )}

      <DashTop>
        <ChartTopOne>
          <TitleTop>Faturamento Mensal</TitleTop>
          <h4 className="MiniTitle">R$ 15.486,58</h4>
        </ChartTopOne>
        <ChartTopTwo>
          <TitleTop>Ordens de Serviço</TitleTop>
          <h4 className="MiniTitle">45</h4>
        </ChartTopTwo>
        <ChartTopThree>
          <TitleTop>Motos na Oficina</TitleTop>
          <h4 className="MiniTitle">9</h4>
        </ChartTopThree>
      </DashTop>

      <ContainerDash>
        <DashOne>
          <ChartOne />
        </DashOne>
        <DashTwo>
          <ChartTwo />
        </DashTwo>
      </ContainerDash>

      <DashGeral>
        <DashTitle>Visão Geral da Oficina</DashTitle>
        <ChartThree />
        <ChartFinal>
          <ChartFour />
          <ChartFive />
        </ChartFinal>
      </DashGeral>
    </>
  );
}
