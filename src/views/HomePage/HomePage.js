import React from "react"
import { makeStyles } from "@material-ui/styles"

import Container from "@material-ui/core/Container"
import CategoryList from "./components/CategoryList"

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        // backgroundColor: "tomato",
    },
    container: {
        // backgroundColor: "skyblue",
    },
}))

const HomePage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="lg" className={classes.container}>
                <CategoryList />
            </Container>
        </div>
    )
}

export default HomePage
