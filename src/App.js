import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"

import HomePage from "./views/HomePage"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HomePage />
        </ThemeProvider>
    )
}

export default App
