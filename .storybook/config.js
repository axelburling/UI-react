import { addDecorator, configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/theme';

addDecorator((story) => {
    return <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
})

const req = requireContext("../src", true, /\.story\.tsx$/);
function loadStroies () {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStroies, module)
