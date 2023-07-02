import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #000;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  box-shadow: inset 0px 0px 5px 2px rgb(0, 0, 0);
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    background-color: #ecd400;
    color: black;
    box-shadow: inset 0px 0px 5px 2px rgb(236, 212, 0);
  }
  &:disabled {
    background-color: #eee;
    cursor: default;
    box-shadow: none;
    color: #000;
    &:hover {
      background-color: #eee;
    }
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: rgb(244 66 66);
  color: white;
  box-shadow: inset 0px 0px 5px 2px rgb(244 66 66);

  &:hover {
    background-color: rgb(38 189 0);
    border: none;
    box-shadow: inset 0px 0px 5px 2px rgb(38 189 0);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #ecd400;
  color: black;
  box-shadow: inset 0px 0px 5px 2px rgb(236, 212, 0);

  &:hover {
    background-color: #000;
    color: white;
    box-shadow: inset 0px 0px 5px 2px rgb(0, 0, 0);
  }
`;
