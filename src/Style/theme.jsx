import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";


export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: 'Kanit, sans-serif',
        htmlFontSize: 16,
        subtitle1: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5
        },
        subtitle2: {
            fontSize: 12,
            fontWeight: 600,
        },
        body1: {
            fontSize: 16,
            fontWeight: 600,
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
        },
        h6: {
            fontSize: 20,
            fontWeight: 600,
        },
        h5: {
            fontSize: 40,
            fontWeight: 600,
        },
        button: {
            fontSize: 16,
            fontWeight: 600,
        }
    },
    palette: {
        background: {
            paper: '#ffffff',
            default: 'linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%)',
            dark: '#27262c',
            hover: '#eff4f5',
            input: '#eeeaf4'
        },
        border: {
            color: 'rgb(231, 227, 235)',
        },
        primary: {
            main: '#1fc7d4',
            contrastText: 'white'
        },
        secondary: {
            main: '#7a6eaa',
            dark: '#280d5f',
            light: '#9a6aff',
            active: '#7645d9',
        },
        success: {
            main: '#31d0aa',
        },
        error: {
            main: '#ed4b9e'
        },
        dark: {
            text: 'rgb(244, 238, 255)',
            icon: 'rgb(184, 173, 210)'
        },
        warning: {
            main: '#ffb237'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "&::-webkit-scrollbar": {
                        width: 8,
                    },
                    "&::-webkit-scrollbar-track": {
                        boxShadow: 'rgb(238 234 244) 0px 0px 5px inset',
                        borderRadius: 10,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: 'rgb(122, 110, 170)',
                        borderRadius: 8
                    },
                }
            }
        }
    }
});


// export const theme = createTheme({
//     typography: {
//         fontFamily: 'Kanit, sans-serif',
//         body1: {
//             color: '#7a6eaa'
//         }
//     },
//     palette: {
//         color: {
//             primary: '#7a6eaa',
//             active: '#7645d9',
//             bold: '#280d5f',
//             secondary: '#1fc7d4',
//             tertiary: '#ed4b9e',
//             white: '#ffffff',
//             border: 'rgb(231, 227, 235)',
//             success: '#31d0aa',
//             danger: '#ed4b9e',
//             dark: '#27262c',
//             footer: {
//                 head: '#9a6aff',
//                 item: '#f4eeff',
//                 active: '#ffb237',
//                 primary: '#b8add2'
//             },
//             background: {
//                 primary: '#1fc7d4',
//                 secondary: '#eff4f5',
//                 tertiary: '#eeeaf4',
//                 body: '#faf9fa',
//             },
//         },
//         font: {
//             family: 'Kanit, sans-serif',
//             xs: {
//                 size: '12px',
//                 lineHeight: '18px',
//             },
//             sm: {
//                 size: '14px',
//                 lineHeight: '21px',
//             },
//             md: {
//                 size: '16px',
//                 lineHeight: '16px',
//             },
//             lg: {
//                 size: '20px',
//                 lineHeight: '22px',
//             },
//             xl: {
//                 size: '40px',
//                 lineHeight: '60px',
//             },
//         }
//     },
//     components: {
//         MuiCssBaseline: {
//             styleOverrides: {
//                 body: {
//                     "&::-webkit-scrollbar": {
//                         width: 8,
//                     },
//                     "&::-webkit-scrollbar-track": {
//                         boxShadow: 'rgb(238 234 244) 0px 0px 5px inset',
//                         borderRadius: 10,
//                     },
//                     "&::-webkit-scrollbar-thumb": {
//                         background: 'rgb(122, 110, 170)',
//                         borderRadius: 8
//                     },
//                 }
//             }
//         }
//     }
// });


export const Theme = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

