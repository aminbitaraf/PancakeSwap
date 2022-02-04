import React from "react";
import {Container, Divider, Grid, Link, Stack, Typography, useMediaQuery} from "@mui/material";
import {ArrowRight, Lang, PancakeSwapWide} from "../assets/Icons";
import {theme} from "../Style/theme";
import {COLUMNS, SOCIALS} from "../Data/Footer";
import {CakePrice} from "../Units/CakePrice";
import {makeStyles} from "@mui/styles";
import Button from "./Button";

const FooterItem = (props) => {
    const link = !!props.link ? props.link : false;
    return (
        link ?
            <Link width='fit-content' color='dark.text' variant="body2" href={link}
                  underline={'hover'}>{props.children}</Link> :
            <Link width='fit-content' color='dark.text' variant="body2"
                  underline={'none'}>{props.children}</Link>
    )
}
const FooterColumn = (props) => {
    return (
        <Stack spacing={1}>
            <Typography component='h6' color='secondary.light' variant='body1'>{props.title}</Typography>
            {
                props.items.map((item, key) =>
                    <FooterItem key={key} link={item['href']}>{item['name']}</FooterItem>
                )
            }
        </Stack>
    )
}
const SocialIcons = (props) => {
    return (
        <Link href={props.link}>
            {props.children}
        </Link>
    )
}
const useStyles = makeStyles({
    goldenItem: {
        "& div:first-child > a:last-child": {
            color: theme.palette.warning.main
        }
    },
})

const Footer = () => {
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'))
    const classes = useStyles()

    return (
        <Grid p={largeScreen ? "56px 40px" : '40px 16px'} bgcolor='background.dark' xl={12} container>
            <Container maxWidth="lg">
                <Stack spacing={3} divider={<Divider orientation="horizontal" color={'#4a4a4a'} flexItem/>}
                       direction={largeScreen ? 'column' : 'column-reverse'}>
                    <Stack>
                        <Stack className={classes.goldenItem} spacing={largeScreen ? 0 : 5}
                               direction={largeScreen ? 'row' : 'column'} justifyContent="space-between">
                            {
                                COLUMNS.map((item, key) =>
                                    <FooterColumn key={key} title={item['title']} items={item['items']}/>
                                )
                            }
                            <Stack display={{xs: 'none', sm: 'block'}}>
                                <PancakeSwapWide color={theme.palette.background.paper}/>
                            </Stack>
                        </Stack>
                        <Stack pt={5} spacing={3} direction='row'>
                            {
                                Object.keys(SOCIALS).map((item, key) =>
                                    <SocialIcons key={key} link={item}>{SOCIALS[item]}</SocialIcons>
                                )
                            }
                        </Stack>
                    </Stack>
                    <Stack direction={largeScreen ? 'row' : 'column-reverse'} justifyContent='space-between'
                           alignItems={largeScreen ? 'center' : 'flex-start'}>
                        <Divider color={theme.palette.primary.main}/>
                        <Stack mt={largeScreen ? 0 : 4}>
                            {/*<ToggleTheme/>*/}
                            <Stack direction='row'>
                                <Lang fill={theme.palette.dark.icon}/>
                                <Typography ml={1} color="dark.icon" variant='body1'>EN</Typography>
                            </Stack>
                        </Stack>
                        <Stack spacing={2} direction="row" width={'100%'}
                               justifyContent={largeScreen ? 'flex-end' : 'space-between'}
                               alignItems="center">
                            <CakePrice mode="dark"/>
                            <Button endIcon={<ArrowRight/>} disableRipple variant="contained">Buy
                                CAKE</Button>
                        </Stack>
                    </Stack>
                    {
                        !largeScreen &&
                        <Stack>
                            <PancakeSwapWide color={theme.palette.background.paper}/>
                        </Stack>
                    }
                </Stack>
            </Container>
        </Grid>
    )
}

export default Footer;