import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import * as TypographyType from './index';
// import { Figure } from './Components/Figure';
import PageHeader from './Components/PageHeader';
import PageLede from './Components/PageLede';
import Section, { SectionHeader } from './Components/Section';
import Subsection, { SubsectionHeader } from './Components/Subsection';
import ValueSuffix from './Components/ValueSuffix';
import ValueWithTitle from './Components/ValueWithTitle';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

storiesOf('Typo', module)
  .add(`Basic`, () => (
    <Container>
      <div>
        <TypographyType.Headline1>Headline 1</TypographyType.Headline1>
      </div>
      <div>
        <TypographyType.Headline2>Headline 2</TypographyType.Headline2>
      </div>
      <div>
        <TypographyType.Headline3>Headline 3</TypographyType.Headline3>
      </div>
      <div>
        <TypographyType.Headline4>Headline 4</TypographyType.Headline4>
      </div>
      <div>
        <TypographyType.Headline5>Headline 5</TypographyType.Headline5>
      </div>
      <div>
        <TypographyType.Headline6>Headline 6</TypographyType.Headline6>
      </div>
      <div>
        <TypographyType.Subtitle1>Subtitle 1</TypographyType.Subtitle1>
      </div>
      <div>
        <TypographyType.Subtitle2>Subtitle 2</TypographyType.Subtitle2>
      </div>
      <div>
        <TypographyType.Body1>Body 1</TypographyType.Body1>
      </div>
      <div>
        <TypographyType.Body2>Body 2</TypographyType.Body2>
      </div>
      <div>
        <TypographyType.Caption1>Caption 1</TypographyType.Caption1>
      </div>
      <div>
        <TypographyType.Caption2>Caption 2</TypographyType.Caption2>
      </div>
      <div>
        <TypographyType.Overline>Overline</TypographyType.Overline>
      </div>
    </Container>
  ))
  .add(`Components`, () => (
    <Container>
      <Section>
        <PageHeader>Page Header</PageHeader>
        <PageLede>
          Page Lede, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eos modi similique ullam maxime illum minima corrupti voluptate rem,
          nihil, consequatur vitae quidem inventore. Repellendus molestiae nam
          libero dolorum laboriosam architecto? Non accusantium quaerat numquam
          quae eaque dolorem, pariatur nulla voluptatum suscipit quos asperiores
          commodi voluptatem neque a mollitia, reprehenderit sed aspernatur
          ipsam qui omnis corrupti. Dolorum consequuntur ratione consectetur
          exercitationem.
        </PageLede>
      </Section>
      <Section>
        <Subsection>
          <SubsectionHeader>Subsection Header</SubsectionHeader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
            impedit dolorem. Cum eos rerum minus, nulla at corporis laudantium
            officia eum sit qui voluptatem maiores, alias nihil, impedit
            blanditiis et. Nesciunt, nobis officiis alias nihil, ipsa delectus
            velit beatae odit reiciendis dolores sunt unde nulla repellendus
            eligendi quia provident commodi harum aliquid cum magnam eius optio?
            Animi nemo recusandae provident?
          </p>
        </Subsection>
      </Section>
    </Container>
  ))
  .add(`ValueSuffix`, () => (
    <Container>
      <ValueSuffix value="100 000" suffix="kr" />
    </Container>
  ))
  .add('ValueWithTitle', () => (
    <Container>
      <ValueWithTitle title="Månadsinkomst">
        <ValueSuffix value="100 000" suffix="kr" />
      </ValueWithTitle>
      <ValueWithTitle title="Pension">
        <ValueSuffix value="12 167" suffix="kr" after="/ ITP2" />
      </ValueWithTitle>
    </Container>
  ));
