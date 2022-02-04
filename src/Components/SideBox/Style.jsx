import {makeStyles} from "@mui/styles";
import {theme} from "../../Style/theme";

export const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 518,
        border: `1px solid ${theme.palette.border.color}`,
    },
    sideBox: {
        borderRadius: '24px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: `${theme.palette.border.color} 0px -2px 0px 0px inset`,
    },
    sideBoxHeader: {
        padding: 24,
        borderBottom: `1px solid ${theme.palette.border.color}`,
        "& button": {
            width: 32,
            height: 32,
            padding: 0
        }
    },
    dropDown: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 8px',
        letterSpacing: '0.03em',
        color: theme.palette.secondary.dark,
        fontWeight: '600',
        width: 'max-content',
        "& svg:nth-of-type(1)": {
            marginRight: 8,
        }
    },
    swapButton: {
        "& button": {
            fill: theme.palette.primary.main,
            backgroundColor: theme.palette.background.input,
            width: 32,
            height: 32,
            borderRadius: 16,
            margin: '8px auto',
            boxShadow: `rgb(0 0 0 / 10%) 0px -2px 0px inset`,
            "& svg:nth-of-type(2)": {
                display: 'none',
            },
            "&:active": {
                boxShadow: 'none',
                transform: 'translateY(2px)',
            },
            "&:hover": {
                fill: theme.palette.background.paper,
                backgroundColor: theme.palette.primary.main,
                "& svg:nth-of-type(1)": {
                    display: 'none',
                },
                "& svg:nth-of-type(2)": {
                    display: 'block',
                }
            }
        }
    }
})