const basicTheme = {
    space: [0, 4, 8, 16, 32],
    fontSizes: {
        alpha: 48,
        beta: 32,
        gamma: 24,
        epsilon: 16
    },
    pageTitle: 'blueViolet',
    textFieldBorderStyle: '0',
    buttonBackground: 'blueViolet',
    buttonText: 'white',
    textFieldBackground: '#f8f8f8',
    textFieldFocusBackground: 'lightsteelblue',
}

export const lightTheme = {
    ...basicTheme,
    pageBackground: 'papayawhip',
    pageText: 'slategrey',
    noteBackground: '#f8f8f8',
    noteHoverBackground: '#fbe2e2',
    noteBorderStyle: '1px solid rgba(0,0,0,0.1)',
    label: 'slateGrey',
};

export const darkTheme = {
    ...basicTheme,
    pageBackground: '#1F1F1F',
    pageText: 'white',
    noteBackground: '#615e5e',
    noteHoverBackground: '#f2c2c2',
    noteBorderStyle: '1px solid rgba(255,255,255,0.1)',
    label: 'white',
}
