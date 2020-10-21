import * as React from 'react';
import styled from 'styled-components';
import { headline6CSS } from '../../Styles';

const Section = styled.section`
  margin-bottom: 1.5rem;
`;

export default Section;

interface SectionHeaderProps {
  actions?: React.ReactNode;
  icon?: React.ReactNode;
}
const Title = styled.h1`
  ${headline6CSS}
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  align-items: flex-end;
`;

const IconWrapper = styled.span`
  margin-right: 0.75rem;
  height: 2.25rem; /* In order to align icon, the hight should be the same as Section line-height*/
  display: flex;
  align-items: center;
  width: 1.5rem;
`;

const Header = styled.header`
  display: flex;
`;

export const SectionHeader: React.SFC<SectionHeaderProps> = ({
  actions,
  children,
  icon,
}) => (
  <Wrapper>
    <Header>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Title>{children}</Title>
    </Header>
    {actions}
  </Wrapper>
);
