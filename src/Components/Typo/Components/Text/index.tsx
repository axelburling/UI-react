import styled from 'styled-components';
import { TypographyType } from '../..';
import {
  body1CSS,
  body2CSS,
  caption1CSS,
  caption2CSS,
  headline1CSS,
  headline2CSS,
  headline3CSS,
  headline4CSS,
  headline5CSS,
  headline6CSS,
  overlineCSS,
  subtitle1CSS,
  subtitle2CSS,
} from '../../Styles';

interface TextProps {
  use: TypographyType;
}

const styles: Record<TypographyType, any> = {
  headline1: headline1CSS,
  headline2: headline2CSS,
  headline3: headline3CSS,
  headline4: headline4CSS,
  headline5: headline5CSS,
  headline6: headline6CSS,
  subtitle1: subtitle1CSS,
  subtitle2: subtitle2CSS,
  body1: body1CSS,
  body2: body2CSS,
  caption1: caption1CSS,
  caption2: caption2CSS,
  overline: overlineCSS,
};

const Text = styled.span<TextProps>`
  ${(p) => styles[p.use]};
`;

export const P = styled.p<TextProps>`
  ${(p) => styles[p.use]};
`;

export default Text;
