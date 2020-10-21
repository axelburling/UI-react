import * as React from 'react';
import styled from 'styled-components';
import { caption1CSS } from '../../Styles';

const DL = styled.dl`
  margin-top: 0;
  margin-bottom: 0.75rem;
`;

const DT = styled.dt`
  color: ${(p) => p.theme.colorGray};
  ${caption1CSS};
`;

const DD = styled.dd`
  margin: 0;
`;

export interface ValueWithTitleProps {
  title: React.ReactNode;
}

const ValueWithTitle: React.SFC<ValueWithTitleProps> = ({
  title,
  children,
}) => (
  <DL>
    <DT>{title}</DT>
    <DD>{children}</DD>
  </DL>
);

export default ValueWithTitle;
