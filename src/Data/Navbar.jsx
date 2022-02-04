import {Earn, More, NFT, Trade, Win} from "../assets/Icons";
import React from "react";
import {theme} from "../Style/theme";

export const NavbarItems = [
    {
        title: "Trade",
    },
    {
        title: "Earn",
    },
    {
        title: "Win",
    },
    {
        title: "NFT",
    },
    {
        title: <More fill={theme.palette.secondary.main}/>,
    },
]

export const NavbarIcon = [
    {
        title: 'Trade',
        icon: <Trade stroke={theme.palette.secondary.main} fill={theme.palette.secondary.main}/>
    },
    {
        title: 'Earn',
        icon: <Earn fill={theme.palette.secondary.main}/>
    },
    {
        title: "Win",
        icon: <Win fill={theme.palette.secondary.main}/>
    },
    {
        title: 'NFT',
        icon: <NFT fill={theme.palette.secondary.main}/>
    },
    {
        title: '',
        icon: <More fill={theme.palette.secondary.main}/>
    },
]
