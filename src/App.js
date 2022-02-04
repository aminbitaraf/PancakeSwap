import React from 'react';
import {CssBaseline, Grid} from "@mui/material";
import {Theme as ThemeProvider} from "./Style/theme";
import Nav from "./Components/Nav";
import SubNav from "./Components/SubNav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {

    return (
        <ThemeProvider>
            <CssBaseline/>
            <Grid container component="main">
                <Nav/>
                <SubNav/>
                <Main/>
                <Footer/>
            </Grid>
        </ThemeProvider>
    );
}

export default App;