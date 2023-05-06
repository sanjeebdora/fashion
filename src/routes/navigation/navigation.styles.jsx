import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 0px 10px rgba(18, 18, 18, 0.1);
  padding: 20px 40px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 317px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
