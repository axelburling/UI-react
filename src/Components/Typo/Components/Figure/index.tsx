import * as React from 'react';
import styled from 'styled-components';
import { ThemeColor } from 'theme';
import ellipsisCSS from '../../../lib/ellipsis-css';
import { Body2, Caption1, Headline6 } from '../../index';

interface FigureProps {
  titleColor?: ThemeColor;
  footnote?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

const FigureHeader = styled.h2<{
  color?: ThemeColor;
}>`
  ${(p) => p.color && `color: ${p.theme[p.color]}`};
  ${ellipsisCSS};
  ${Headline6}
  font-weight: bold;
`;

const FigureDecription = styled.div`
  ${ellipsisCSS};
  ${Body2}
`;

const FigureFootnote = styled.div`
  color: ${(p) => p.theme.colorGray};
  ${ellipsisCSS};
  ${Caption1}
`;

export const Figure: React.SFC<FigureProps> = ({
  title,
  description,
  footnote,
  titleColor,
}) => (
  <div>
    <FigureHeader color={titleColor}>{title}</FigureHeader>
    <FigureDecription>{description}</FigureDecription>
    <FigureFootnote>{footnote}</FigureFootnote>
  </div>
);
