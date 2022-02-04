import React from "react";
import {IconButton, Link, Stack, Tab, Tabs} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Lang, PancakeSwap, PancakeSwapWide, Setting} from "../assets/Icons";
import Button from "./Button";
import {theme} from "../Style/theme";
import {NavbarIcon, NavbarItems} from "../Data/Navbar";
import {CakePrice} from "../Units/CakePrice";

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
    },
    activeNav: {
        color: theme.palette.secondary.active,
        fontWeight: 600
    },
    navItem: {
        padding: '0 16px',
        width: 'min-content',
        minWidth: 'unset',
        margin: '4px 0',
        borderRadius: '16px'
    },
    connectButton: {
        letterSpacing: '0.03em'
    },
    appBarItems: {
        "& div > div": {
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: 5
        },
        "& button": {
            fontSize: 10,
            maxWidth: 'min-content',
            maxHeight: 'min-content',
            height: 44,
            textTransform: 'none',
            minWidth: 'unset',
            padding: '4px 12px',
            minHeight: 'unset',
            borderRadius: '16px',
            "&:hover": {
                backgroundColor: theme.palette.background.hover
            },
            '&.Mui-selected': {
                color: theme.palette.secondary.dark,
                fill: theme.palette.secondary.dark,
                fontWeight: 600,

            },
            "& > svg": {
                marginBottom: '0px !important'
            }
        }
    },
    activeAppBarItem: {
        fontWeight: 600,
        color: theme.palette.secondary.dark,
        "& > svg": {
            fill: theme.palette.secondary.dark
        }
    },
    notActiveAppBarItem: {
        fontWeight: 400,
        color: theme.palette.secondary.main,
    },
})

const Nav = () => {
    const classes = useStyles();
    const isActive = (item) => item === "Trade"

    return (
        <Stack borderBottom={`1px solid ${theme.palette.border.color}`} px={2} width={'100%'}
               direction="row"
               justifyContent="space-between" alignItems='center' component="nav">
            <Stack height={'56px'} direction="row">
                <Link display={{xs: 'none', lg: 'flex'}} alignItems='center' underline="none" href="/">
                    <PancakeSwapWide color='#000000'/>
                </Link>
                <Link display={{xs: 'flex', lg: 'none'}} alignItems='center' underline="none" href="/">
                    <PancakeSwap/>
                </Link>
                <Stack display={{xs: 'none', sm: 'flex'}} ml={3} direction="row">
                    {
                        NavbarItems.map((item, key) =>
                            <Button color={'secondary'} disableRipple variant="text"
                                    className={`${isActive(item['title']) && classes.activeNav} ${classes.navItem}`}
                                    key={key}>{item['title']}</Button>
                        )
                    }
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="center">
                <Stack display={{xs: 'none', sm: 'flex'}}>
                    <CakePrice/>
                </Stack>
                <IconButton style={{marginRight: '4px', marginLeft: '12px'}} disableRipple><Lang
                    fill={theme.palette.secondary.main}/></IconButton>
                <IconButton style={{marginRight: '4px'}} disableRipple><Setting
                    fill={theme.palette.secondary.main}/></IconButton>
                <Button disableRipple className={classes.connectButton} variant="contained">Connect Wallet</Button>
            </Stack>
            <Stack display={{xs: 'flex', sm: 'none'}} zIndex={'appBar'} bgcolor={'background.paper'} width={'100%'}
                   direction={'row'} position={'fixed'} alignItems={'flex-end'} height={'50px'} px={'8px'} pt={'5px'}
                   borderTop={`1px solid ${theme.palette.border.color}`}
                   bottom={0}
                   left={0}>
                <Tabs value={0} TabIndicatorProps={{
                    style: {
                        backgroundColor: "transparent"
                    }
                }} className={classes.appBarItems} style={{width: '100%'}}>
                    {
                        NavbarIcon.map((item, key) =>
                            <Tab
                                value={key}
                                disableRipple
                                className={`${item['title'] === 'Trade' ? classes.activeAppBarItem : classes.notActiveAppBarItem}`}
                                key={key}
                                icon={item['icon']} label={item['title']}/>
                        )
                    }
                </Tabs>
            </Stack>
        </Stack>
    )
}

export default Nav;