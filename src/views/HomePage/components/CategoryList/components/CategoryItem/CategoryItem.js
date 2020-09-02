import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import clsx from "clsx"

import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Link from "@material-ui/core/Link"
import { render } from "@testing-library/react"

import upperCase from "lodash/upperCase"

const useStyles = makeStyles(theme => ({
    grid: {
        "&:last-child": {
            "& h1": {
                // color: "tomato",
            },
        },
    },
    root: {
        // margin: theme.spacing(4, 0, 4, 0),
        // padding: theme.spacing(4),
        // backgroundColor: "rgba(0,0,0, 0.2)",
        // minWidth: "30%",
        height: "240px",
        flex: "1 1 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer",
            "& .bg": {
                transform: "scale(1.1)",
                transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
            },
            "& .content": {
                opacity: "0.9",
            },
        },
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "top",
    },

    content: {
        padding: theme.spacing(2, 3),
        border: "1px solid black",
        backgroundColor: "white",
        opacity: "0.7",
        position: "absolute",
    },
    title: {
        fontFamily: "'Open Sans Condensed', sans-serif",
        color: "black",
        margin: 0,
    },
}))

const CategoryItem = props => {
    const { title, imageUrl, categoryListLength, index } = props
    const classes = useStyles()
    const theme = useTheme()

    const extrasmall = useMediaQuery(theme.breakpoints.down("xs"))
    const small = useMediaQuery(theme.breakpoints.down("sm"))
    const medium = useMediaQuery(theme.breakpoints.down("md"))

    const colsSM = categoryListLength - index === 1 ? 12 : 6
    const colsMD = categoryListLength - index <= 2 ? 6 : 4

    const itemHeight = extrasmall
        ? 240
        : small
        ? (colsSM + 10) * 16.5
        : medium
        ? colsMD * 50
        : colsMD * 55

    return (
        <Grid item xs={12} sm={colsSM} md={colsMD} className={classes.grid}>
            <Box
                className={classes.root}
                style={{
                    height: `${itemHeight}px`,
                }}>
                <div
                    className={clsx(classes.backgroundImage, "bg")}
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                />
                <div className={clsx(classes.content, "content")}>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        className={classes.title}>
                        {upperCase(title)}
                    </Typography>
                </div>
            </Box>
        </Grid>
    )
}

export default CategoryItem
