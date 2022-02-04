import React from "react";
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {
    ArrowButton,
    ArrowButtonMinimal,
    BNB,
    Change,
    ChartClose,
    PancakeSwapCircle,
    Recent,
    Refresh,
    Setting
} from "../../assets/Icons";
import Button from "../Button";
import {useStyles} from "./Style";
import {theme} from "../../Style/theme";
import Input from "../Input";

const SideBox = () => {
    const classes = useStyles()
    return (
        <Box className={`${classes.box} ${classes.sideBox}`} sx={{width: 328}}>
            <Stack className={classes.sideBoxHeader}>
                <Stack direction="row">
                    <Stack mr={'18px'} width={'100%'} direction="row"
                           justifyContent="space-between">
                        <IconButton><ChartClose fill={theme.palette.secondary.main}/></IconButton>
                        <Typography variant={'h6'}>
                            Swap
                        </Typography>
                    </Stack>
                    <Stack direction="row"
                           justifyContent="flex-end">
                        <IconButton><Setting fill={theme.palette.secondary.main}/></IconButton>
                        <IconButton><Recent fill={theme.palette.secondary.main}/></IconButton>
                        <IconButton><Refresh fill={theme.palette.secondary.main}/></IconButton>
                    </Stack>

                </Stack>
                <Typography color={theme.palette.secondary.main} variant="subtitle1" align='center'>Trade tokens in an
                    instant</Typography>
            </Stack>
            <Stack p={2} minHeight={412}>
                <Stack spacing={1}>
                    <Button className={classes.dropDown} type="text" hover="opacity">
                        <BNB/>
                        <Typography variant={'body1'}>BNB</Typography>
                        <ArrowButtonMinimal/>
                    </Button>
                    <Input/>
                </Stack>
                <Stack className={classes.swapButton}>
                    <IconButton disableRipple>
                        <ArrowButton/>
                        <Change/>
                    </IconButton>
                </Stack>
                <Stack spacing={1}>
                    <Button className={classes.dropDown} type="text" hover="opacity">
                        <PancakeSwapCircle/>
                        <Typography variant={'body1'}>CAKE</Typography>
                        <ArrowButtonMinimal/>
                    </Button>
                    <Input/>
                </Stack>
                <Stack direction="row"
                       width="100"
                       p={2}
                       justifyContent="space-between"
                       alignItems="center">
                    <Typography color={theme.palette.secondary.active} variant='subtitle2'>
                        Slippage Tolerance
                    </Typography>
                    <Typography color={theme.palette.primary.main} variant="body1">
                        0.5%
                    </Typography>
                </Stack>
                <Button disableRipple style={{padding: 10, marginTop: 'auto'}} mt={'auto'} variant='contained'>Connect
                    Wallet</Button>
            </Stack>
        </Box>
    )
}

export default SideBox;