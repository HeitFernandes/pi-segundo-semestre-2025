import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #930707;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-radius: 4px;
  box-shadow: 0 0 8px #fff;
  width: ${(props) => (props.$isExpanded ? '280px' : '100px')};
  transition: width 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
`;

export const NavText = styled.span`
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  max-width: ${(props) => (props.$isExpanded ? '200px' : '0')};
  margin-left: ${(props) => (props.$isExpanded ? '20px' : '0')};
  opacity: ${(props) => (props.$isExpanded ? '1' : '0')};
  transition:
    max-width 0.5s ease-in-out,
    opacity 0.1s ease-in-out,
    margin-left 0.1s ease-in-out;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 65px;

  ${(props) =>
    props.$isUser &&
    css`
      gap: 10px;
      position: relative;

      &::before {
        content: '';
        height: 1px;
        background: #ccc;
        position: absolute;
        top: -8px;
        right: 0;
        left: 0;
      }

      &::after {
        content: '';
        height: 1px;
        background: #ccc;
        position: absolute;
        bottom: -8px;
        right: 0;
        left: 0;
      }
    `}
`;

export const Line = styled.hr``;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  text-align: center;
  display: flex;
  align-items: center;
  padding: 15px 28px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
  }

  ${(props) =>
    props.$isLogo &&
    css`
      &:hover {
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.$isUser &&
    css`
      margin: 0;
    `}

  ${NavText} {
    transition-delay: 0.1s;
  }
`;

export const IconWrapper = styled.div`
  font-size: 24px;
  min-width: 24px;
`;

export const IconeMainteer = styled.img`
  width: 60px;
  position: absolute;
  left: 20px;
  left: ${(props) => (props.$isExpanded ? '60px' : '20px')};
  width: ${(props) => (props.$isExpanded ? '140px' : '60px')};
  transition: 0.3s ease-in-out;
`;
