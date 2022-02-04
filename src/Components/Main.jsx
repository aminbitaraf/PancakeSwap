import React from "react";
import {Grid, Link, Stack, useMediaQuery} from "@mui/material";
import {makeStyles} from "@mui/styles";
import ChartBox from "./ChartBox";
import ButtonGroup from "./ButtonGroup";
import {Link as LinkIcon, Message} from "../assets/Icons";
import {theme} from "../Style/theme";
import SideBox from "./SideBox";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%)",
        minHeight: 'calc(100vh - 99px)',
        width: '100%'
    },
})

const Main = () => {
    const classes = useStyles()
    const laptopScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'))

    return (
        <Grid px={2} container className={classes.root}>
            <Stack direction="row"
                   width={'100%'}
                   mt={largeScreen ? 4 : 2}
                   justifyContent="center"
                   alignItems="flex-start"
                   spacing={largeScreen ? 5 : 0}>
                <ChartBox/>
                <SideBox/>
            </Stack>
            <Stack width={'100%'} p={largeScreen ? 4 : 2} pb={0} mt='auto'
                   justifyContent={laptopScreen ? "space-between" : 'unset'}
                   alignItems={laptopScreen ? 'unset' : 'center'}
                   direction={laptopScreen ? "row" : 'column'}>
                <Stack direction={largeScreen ? "row" : 'column'}
                       justifyContent="flex-start"
                       spacing={largeScreen ? 4 : 2}
                       alignItems="center">
                    <ButtonGroup type='primary' buttons={['V2', 'V1 (old)']}/>
                    <Link underline="hover" display='flex' href="#" style={{fill: theme.palette.primary.main}}
                          fontWeight='600'
                          color={theme.palette.primary.main}>
                        Convert ERC-20 to BEP-20
                        <LinkIcon/>
                    </Link>
                </Stack>
                <Stack>
                    <Message>Need help ?</Message>
                </Stack>
            </Stack>
        </Grid>
    )
}

export default Main;