import * as React from 'react';
import styled from 'styled-components';
import { subtitle2CSS } from '../../Styles';

const Subsection = styled.section`
  margin-bottom: 0.75rem;
`;

export default Subsection;

interface SubsectionHeaderProps {
  actions?: React.ReactNode;
  icon?: React.ReactNode;
}
const Title = styled.h1`
  ${subtitle2CSS};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  align-items: flex-end;
`;

const IconWrapper = styled.span`
  margin-right: 0.75rem;
  height: 1.5rem; /* In order to align icon, the hight should be the same as Subsection line-height*/
  display: flex;
  align-items: center;
  width: 1.25rem;
`;

const Header = styled.header`
  display: flex;
`;

export const SubsectionHeader: React.SFC<SubsectionHeaderProps> = ({
  actions,
  icon,
  children,
}) => (
  <Wrapper>
    <Header>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Title>{children}</Title>
    </Header>
    {actions}
  </Wrapper>
);
