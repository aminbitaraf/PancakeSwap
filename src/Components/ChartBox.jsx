import React from 'react';
import {Box, IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import {BNB, ChartIcon, Extract, PancakeSwapCircle, Swap, TradingView} from "../assets/Icons";
import {theme} from "../Style/theme";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Chart from "../Units/Chart";

const ChartTab = [
    {
        name: 'Basic',
        icon: <ChartIcon fill={theme.palette.primary.main}/>
    },
    {
        name: 'TradingView',
        icon: <TradingView fill={theme.palette.primary.main}/>
    }
]

const ChartBox = () => {
    const laptopScreen = useMediaQuery(item => item.breakpoints.up('lg'))

    return (
        <Box display={{xs: 'none', sm: 'flex'}} minWidth={'50%'} flexDirection={'column'} minHeight={518}
             border={`1px solid ${theme.palette.border.color}`} bgcolor={`${theme.palette.background.paper + '50'}`}
             borderRadius={4}>
            <Stack p={2} pb={0} justifyContent="space-between" direction="row">
                <Stack spacing={2} direction="row" alignItems={'center'}>
                    <Stack spacing={.5} direction={'row'}>
                        <IconButton style={{padding: 0}}>
                            <BNB/>
                        </IconButton>
                        <IconButton style={{padding: 0}}>
                            <PancakeSwapCircle/>
                        </IconButton>
                        <Typography variant='body1'>BNB/CAKE</Typography>
                    </Stack>
                    <IconButton>
                        <Swap fill={theme.palette.primary.main}/>
                    </IconButton>
                    {
                        ChartTab.map((item, key) =>
                            <Button key={key}
                                    style={{
                                        color: theme.palette.primary.main,
                                        padding: '4px 8px',
                                        minWidth: 'unset',
                                        borderRadius: '6px',
                                        backgroundColor: item['name'] === 'Basic' && 'rgba(31, 199, 212, 0.06)',
                                        fontWeight: '600'
                                    }}
                                    type="text"
                                    hover="opacity">{laptopScreen ? item['name'] : item['icon']}</Button>
                        )
                    }
                </Stack>
                <Button type="text" hover="opacity"><Extract/></Button>
            </Stack>
            <Stack px={2.5} justifyContent="space-between" alignItems='center' flexWrap='wrap' direction="row">
                <Stack pt={3} direction="column">
                    <Stack flexWrap='wrap' alignItems="flex-end" direction="row">
                        <Typography variant='h5' color={theme.palette.secondary.dark} mb={.5}
                                    mr={1}>50.54</Typography>
                        <Typography variant='h6' color={theme.palette.secondary.main} mr={1}
                                    mb={1}>BNB/CAKE</Typography>
                        <Typography variant='h6' color={theme.palette.success.main} mb={1}
                                    mr={2}>+0.567(1.13%)</Typography>
                    </Stack>
                    <Typography color={theme.palette.secondary.main} variant='subtitle1'>Feb 03,
                        2022, 01:48 AM</Typography>
                </Stack>
                <Stack style={{minWidth: 'fit-content'}} mt={1}>
                    <ButtonGroup type='secondary' buttons={['24H', '1W', '1M', '1Y']}/>
                </Stack>
            </Stack>
            <Stack p={2}>
                <Chart/>
            </Stack>
        </Box>
    );
}

export default ChartBox;