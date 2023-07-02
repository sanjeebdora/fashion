import styled from 'styled-components';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  box-shadow: 0 0 0 2px #000;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 0 0 2px #000;
  }

  ${BaseButton},${GoogleSignInButton},${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItes = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
