import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";

const DarkThemeProvider = ({ isDarkTheme, children }) => (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme }>
        {children}
    </ThemeProvider>
);

const mapStateToProps = state => ({ isDarkTheme: state.isDarkTheme });

export default connect(mapStateToProps)(DarkThemeProvider);
