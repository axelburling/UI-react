import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Button from './Hello';

storiesOf('Button', module)
  .add(`vanilla`, () => (
    <Button
      color="red"
      background="blue"
      onclick={() => console.log('HEllO')}
      title="test"
    />
  ))
  .add(`FArfar`, () => (
    <Button
      color="#38d9be"
      background="black"
      onclick={() => console.log('god morgon')}
      title="Frukosten är serverad"
    />
  ));
