import React from "react";
import {Discord, Github, Instagram, Reddit, Telegram, Twitter} from "../assets/Icons";

export const COLUMNS = [
    {
        title: 'ABOUT',
        items: [
            {
                name: 'Contact',
                href: 'https://localhost:3000'
            },
            {
                name: 'Brand',
                href: 'https://localhost:3000'
            },
            {
                name: 'Blog',
                href: 'https://localhost:3000'
            },
            {
                name: 'Community',
                href: 'https://localhost:3000'
            },
            {
                name: 'CAKE Token',
                href: 'https://localhost:3000'
            },
            {
                name: '—',
                href: ''
            },
            {
                name: 'Online Store',
                href: 'https://localhost:3000'
            },
        ]
    },{
        title: 'HELP',
        items: [
            {
                name: 'Customer Support',
                href: 'https://localhost:3000'
            },
            {
                name: 'Troubleshooting',
                href: 'https://localhost:3000'
            },
            {
                name: 'Guides',
                href: 'https://localhost:3000'
            },
        ]
    },{
        title: 'DEVELOPER',
        items: [
            {
                name: 'Github',
                href: 'https://localhost:3000'
            },
            {
                name: 'Documentation',
                href: 'https://localhost:3000'
            },
            {
                name: 'Bug Bounty',
                href: 'https://localhost:3000'
            },
            {
                name: 'Audits',
                href: 'https://localhost:3000'
            },
            {
                name: 'Careers',
                href: 'https://localhost:3000'
            },
        ]
    },
]

export const SOCIALS = {
    'https:localhost:3000/#a': <Twitter/>,
    'https:localhost:3000/#b': <Telegram/>,
    'https:localhost:3000/#c': <Reddit/>,
    'https:localhost:3000/#d': <Instagram/>,
    'https:localhost:3000/#e': <Github/>,
    'https:localhost:3000/#f': <Discord/>
}