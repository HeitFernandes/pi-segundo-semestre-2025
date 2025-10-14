import React, { useState } from 'react';

import { IoBarChart } from 'react-icons/io5';
import {
  FaMotorcycle,
  FaUser,
  FaCalendarAlt,
  FaTools,
  FaUserCircle,
} from 'react-icons/fa';
import { TbLogout } from 'react-icons/tb';
import iconePath from '../../img/iconeMainter.png';
import {
  NavList,
  NavLink,
  NavItem,
  NavText,
  IconWrapper,
  Container,
  IconeMainteer,
  // Line,
} from './styled';

export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <Container
      $isExpanded={isExpanded}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavList>
        <NavItem>
          <NavLink href="#" $isLogo>
            <IconeMainteer src={iconePath} $isExpanded={isExpanded} />
          </NavLink>
        </NavItem>

        <NavList $isUser>
          <NavItem>
            <NavLink href="#" $isUser>
              <IconWrapper>
                <FaUserCircle />
              </IconWrapper>
              <NavText $isExpanded={isExpanded}>Olá, Bem vindo!</NavText>
            </NavLink>
          </NavItem>
        </NavList>

        <NavItem>
          <NavLink href="/">
            <IconWrapper>
              <IoBarChart />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Dashboard</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <FaMotorcycle />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Cadastro de Motos</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <FaUser />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Cadastro de Clientes</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <FaCalendarAlt />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Agendamentos</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Ordens de Serviço</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <TbLogout />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Sair</NavText>
          </NavLink>
        </NavItem>
      </NavList>
    </Container>
  );
}
