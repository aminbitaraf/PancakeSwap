import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: (props) => ({
        borderRadius: 16,
        padding: '12px 16px 24px',
        border: 'none',
        boxShadow: 'rgb(74 74 104 / 10%) 0px 2px 2px -1px inset',
        outline: 'none',
        backgroundColor: theme.palette.background.input,
        fontSize: theme.typography.htmlFontSize,
        fontWeight: '500',
        direction: 'rtl',
        fontFamily: theme.typography.fontFamily
    }),
}));

const Input = (props) => {
    const classes = useStyles(props)

    return (
        <input className={`${classes.root}`} inputMode="decimal" title="Token Amount"
               autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0"
               minLength={1} maxLength={79} spellCheck="false"/>
    )
}

export default Input;