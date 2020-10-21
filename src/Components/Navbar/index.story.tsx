import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Navbar from './index';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('NavBar', module).add(`Hello`, () => (
    <Router>
<Navbar />
</Router>
));
