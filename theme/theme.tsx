"use client";

import {CssBaseline} from "@mui/joy";
import {CssVarsProvider, extendTheme} from "@mui/joy/styles";
import {ReactNode} from "react";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: "#f5f2ff",
                    100: "#e9e3ff",
                    200: "#d5c8ff",
                    300: "#b9a4ff",
                    400: "#9b7dff",
                    500: "#7044ff",
                    600: "#5c2fe3",
                    700: "#4a1dc7",
                    800: "#3d14a6",
                    900: "#330d85",
                },
            }
        },
        dark: {
            palette: {
                primary: {
                    50: "#f5f2ff",
                    100: "#e9e3ff",
                    200: "#d5c8ff",
                    300: "#b9a4ff",
                    400: "#9b7dff",
                    500: "#7044ff",
                    600: "#5c2fe3",
                    700: "#4a1dc7",
                    800: "#3d14a6",
                    900: "#330d85",
                },
            }
        },
    },

    // Personalizar componentes
    components: {
        JoyButton: {
            defaultProps: {
                color: "primary",
                variant: "solid",
                size: "md",
            },
            styleOverrides: {
                root: ({ownerState, theme}) => ({
                    borderRadius: "8px",
                    fontWeight: 600,
                    transition: "all 0.2s ease-in-out",

                    // Botón primario sólido
                    ...(ownerState.variant === "solid" && ownerState.color === "primary" && {
                        background: `white`,
                        color: `${theme.palette.primary[500]}`,
                        boxShadow: `0 4px 14px 0 rgba(112, 68, 255, 0.3)`,

                        "&:hover": {
                            color: `white`,

                            background: `linear-gradient(135deg, 
                ${theme.vars.palette.primary[600]}, 
                ${theme.vars.palette.primary[700]}
              )`,
                            boxShadow: `0 6px 20px 0 rgba(112, 68, 255, 0.4)`,
                            transform: "translateY(-2px)",
                        },

                        "&:active": {
                            transform: "translateY(0)",
                        },

                        "&.Mui-disabled": {
                            background: theme.vars.palette.neutral[300],
                            color: theme.vars.palette.neutral[500],
                        },
                    }),


                    // Botón outline primario
                    ...(ownerState.variant === "outlined" && ownerState.color === "primary" && {
                        border: `2px solid ${theme.vars.palette.primary[50]}`,
                        color: theme.vars.palette.primary[50],

                        "&:hover": {
                            backgroundColor: `${theme.vars.palette.primary[50]}20`,
                            color: theme.vars.palette.primary[100],
                            borderColor: `${theme.vars.palette.primary[100]}`,
                        },
                    }),
                }),
            },
        },

        JoyCard: {
            styleOverrides: {
                root: ({theme}) => ({
                    borderRadius: "12px",
                    border: `1px solid ${theme.vars.palette.neutral[200]}`,
                    transition: "all 0.3s ease",

                    "&:hover": {
                        boxShadow: theme.shadow.md,
                        borderColor: theme.vars.palette.primary[200],
                    },
                }),
            },
        },


        JoyInput: {
            styleOverrides: {
                root: ({theme}) => ({
                    borderRadius: "8px",
                    transition: "all 0.2s ease",

                    "&:hover": {
                        borderColor: theme.vars.palette.primary[400],
                    },

                    "&.Mui-focused": {
                        borderColor: theme.vars.palette.primary[500],
                        boxShadow: `0 0 0 3px ${theme.vars.palette.primary[100]}`,
                    },
                }),
            },
        },

        JoySelect: {
            styleOverrides: {
                root: ({theme}) => ({
                    borderRadius: "8px",

                    "&:hover": {
                        borderColor: theme.vars.palette.primary[400],
                    },

                    "&.Mui-focused": {
                        borderColor: theme.vars.palette.primary[500],
                    },
                }),
            },
        },
    },

    // Tipografía
    fontFamily: {
        body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        code: "'Roboto Mono', 'Courier New', monospace",
    },

    // Espaciado
    spacing: 8,

    // Bordes
    radius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
    },


});

export default function ThemeRegistry({children}: { children: ReactNode }) {
    return (
        <CssVarsProvider
            theme={theme}
            defaultMode="light"
            modeStorageKey="joy-ui-mode"
            disableTransitionOnChange={false}
        >
            <CssBaseline/>
            {children}
        </CssVarsProvider>
    );
}