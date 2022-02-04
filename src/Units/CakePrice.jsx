import React from "react";
import {PancakeSwapCircle} from "../assets/Icons";
import {Link, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {theme} from "../Style/theme";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        "& svg": {
            transition: 'all 0.3s ease 0s',
        },
        "&:hover": {
            "& svg": {
                transform: 'scale(1.3)'
            }
        }
    }
})

export const CakePrice = (props) => {
    const classes = useStyles()
    const color = props.mode === 'dark' ? theme.palette.dark.text : theme.palette.secondary.main;

    return (
        <Link color={color} className={classes.root} underline="none" href="/">
            <PancakeSwapCircle/>
            <Typography ml={1} variant="body1">
                $7.616
            </Typography>
        </Link>
    )
}
