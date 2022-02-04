import React from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip
} from "recharts";
import {theme} from "../Style/theme";

function Chart() {
    const data = [
        {
            name: "Item 1",
            score: 1700
        },
        {
            name: "Item 2",
            score: 4000
        },
        {
            name: "Item 3",
            score: 2700
        },
        {
            name: "Item 4",
            score: 4300
        },
        {
            name: "Item 5",
            score: 6300
        }, {
            name: "Item 1",
            score: 1700
        },
        {
            name: "Item 2",
            score: 4000
        },
        {
            name: "Item 3",
            score: 2700
        },
        {
            name: "Item 4",
            score: 4300
        },
        {
            name: "Item 5",
            score: 6300
        }, {
            name: "Item 1",
            score: 1700
        },
        {
            name: "Item 2",
            score: 4000
        },
        {
            name: "Item 3",
            score: 2700
        },
        {
            name: "Item 4",
            score: 4300
        },
        {
            name: "Item 5",
            score: 6300
        }, {
            name: "Item 1",
            score: 1700
        },
        {
            name: "Item 2",
            score: 4000
        },
        {
            name: "Item 3",
            score: 2700
        },
        {
            name: "Item 4",
            score: 4300
        },
        {
            name: "Item 5",
            score: 6300
        },
        {
            name: "Item 2",
            score: 4000
        },
        {
            name: "Item 3",
            score: 2700
        },
        {
            name: "Item 4",
            score: 4300
        },
        {
            name: "Item 5",
            score: 6300
        },
    ];

    return (
        <ResponsiveContainer height={320} width="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="gradient" x1="1" y2="1">
                        <stop offset="10%" stopColor={theme.palette.success.main} stopOpacity={.3}/>
                        <stop offset="100%" stopColor={theme.palette.success.main} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis style={{color: theme.palette.secondary.main}} dataKey="name"/>
                <Area dataKey="score" type="linear" fill="url(#gradient)"/>
                <Tooltip contentStyle={{display: 'none'}} itemStyle={{display: 'none'}}/>
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default Chart;
