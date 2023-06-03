import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #b2ffdf;
  color: #000;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  box-shadow: inset 0px 0px 5px 2px rgba(159, 189, 153, 0.77);
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    background-color: #32d892;
    color: black;
    box-shadow: inset 0px 0px 5px 2px rgba(159, 189, 153, 0.77);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #32d892;
  color: black;
  box-shadow: inset 0px 0px 5px 2px rgba(159, 189, 153, 0.77);

  &:hover {
    background-color: #b2ffdf;
    color: black;
    box-shadow: inset 0px 0px 5px 2px rgba(159, 189, 153, 0.77);
  }
`;
