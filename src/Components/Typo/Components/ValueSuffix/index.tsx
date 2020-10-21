import * as React from 'react';
import styled from 'styled-components';
import { body1CSS, headline5CSS } from '../../Styles';

export interface ValueSuffixProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  suffix: React.ReactNode;
  after?: React.ReactNode;
}

const Value = styled.span`
  margin-right: 0.5rem;
  ${headline5CSS};
`;

const Suffix = styled.span`
  ${body1CSS};
`;

const ValueSuffix: React.SFC<ValueSuffixProps> = ({
  value,
  suffix,
  after,
  ...props
}) => (
  <div {...props}>
    <Value>{value}</Value> <Suffix>{suffix}</Suffix>{' '}
    {after && <Value>{after}</Value>}
  </div>
);

export default ValueSuffix;
