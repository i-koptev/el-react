import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"

import ProTip from "./ProTip"

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
}))

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

const HomePage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={4}>
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom>
                                Create React App v4-beta example
                            </Typography>
                            <ProTip />
                            <Copyright />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HomePage
