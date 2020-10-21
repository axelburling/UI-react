import * as React from 'react';
import styled from 'styled-components';
// import { subtitle1CSS } from '../Typo/Styles';

interface Buttonprops {
  title: React.ReactNode;
  color?: string;
  background?: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Btn = styled.button`
  font-weight: bold;
  font-size: 10px;
  width: 100px;
  height: 55px;
  border-radius: 10px;
`;

const Button: React.SFC<Buttonprops> = ({
  title,
  color,
  background,
  onclick,
}) => {
  return (
    <Btn style={{ color, background }} onClick={onclick}>
      {title}
    </Btn>
  );
};

export default Button;
