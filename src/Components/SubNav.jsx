import React from "react";
import {Stack, useMediaQuery} from "@mui/material";
import Button from "./Button";
import {theme} from "../Style/theme";
import {makeStyles} from "@mui/styles";
import {SubNavItem} from "../Data/SubNav";

const useStyles = makeStyles({
    root: {
        padding: '9px 4px 1px 4px',
        margin: '0 10px',
        borderRadius: 0,
    },
    active: {
        borderBottom: `4px solid ${theme.palette.primary.main}`,
        color: theme.palette.secondary.active,
        fontWeight: '600'
    },
    notActive: {
        paddingBottom: 5,
        color: theme.palette.secondary.main
    }
})

const SubNav = () => {
    const classes = useStyles();
    const isActive = (item) => item === "Exchange"
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'))

    return (
        <Stack width={'100%'} direction="row" justifyContent={largeScreen ? "center" : "flex-start"}
               alignItems="center">
            {
                SubNavItem.map(item =>
                    <Button
                        key={item['to']}
                        disableRipple
                        variant='text'
                        className={`${isActive(item['title']) ? classes.active : classes.notActive} ${classes.root}`}
                    >{item['title']}</Button>
                )
            }
        </Stack>
    )
}

export default SubNav;
