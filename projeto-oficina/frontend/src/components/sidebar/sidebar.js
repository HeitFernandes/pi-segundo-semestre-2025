import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

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
          <NavLink $isLogo>
            <IconeMainteer src={iconePath} $isExpanded={isExpanded} />
          </NavLink>
        </NavItem>

        <NavList $isUser>
          <NavItem>
            <NavLink
              as={RouterNavLink}
              to="/user"
              $isUser
              $isExpanded={isExpanded}
            >
              <IconWrapper>
                <FaUserCircle />
              </IconWrapper>
              <NavText $isExpanded={isExpanded}>Olá, Bem vindo!</NavText>
            </NavLink>
          </NavItem>
        </NavList>

        <NavItem>
          <NavLink as={RouterNavLink} to="/" $isExpanded={isExpanded} end>
            <IconWrapper>
              <IoBarChart />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Dashboard</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink as={RouterNavLink} to="/motos" $isExpanded={isExpanded}>
            <IconWrapper>
              <FaMotorcycle />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Motos</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink as={RouterNavLink} to="/clientes" $isExpanded={isExpanded}>
            <IconWrapper>
              <FaUser />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Área do Cliente</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            as={RouterNavLink}
            to="/agendamentos"
            $isExpanded={isExpanded}
          >
            <IconWrapper>
              <FaCalendarAlt />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Agendamentos</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            as={RouterNavLink}
            to="/ordemdeservico"
            $isExpanded={isExpanded}
          >
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <NavText $isExpanded={isExpanded}>Ordens de Serviço</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink as={RouterNavLink} to="/logout" $isExpanded={isExpanded}>
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
