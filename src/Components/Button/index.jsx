import React from "react";
import {styled} from "@mui/styles";
import {Button as Btn} from '@mui/material';
import {theme} from "../../Style/theme";

const TextButton = styled(Btn)(() => ({
    textTransform: 'none',
    fontWeight: 400,
    '&:hover': {
        backgroundColor: theme.palette.background.hover,
    },
}))

const ContainedButton = styled(Btn)(() => ({
    boxShadow: 'rgb(14 14 44 / 40%) 0px -1px 0px 0px inset',
    textTransform: 'none',
    borderRadius: 16,
    padding: '2px 16px',
    letterSpacing: '0.03em',
    "&:hover": {
        opacity: 0.75,
    },
    "&:active": {
        boxShadow: 'none',
        transform: 'translateY(1px)',
    },
    "&:focus": {
        boxShadow: 'none',
    }
}))

const Button = (props) => {
    let FinalButton;
    switch (props.variant) {
        case 'contained': {
            FinalButton = <ContainedButton {...props}>{props.children}</ContainedButton>
            break;
        }
        case 'text': {
            FinalButton = <TextButton {...props}>{props.children}</TextButton>
            break;
        }
        default: {
            FinalButton = <TextButton {...props}>{props.children}</TextButton>
        }
    }

    return (FinalButton)
}

export default Button;
