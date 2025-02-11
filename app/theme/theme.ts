"use client";

import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { darkPalette } from "./palette";
import { SimplePaletteColorOptions } from "@mui/material";
import { hexToRgba } from "@/utils/hexToRgba";

export const theme = createTheme({
  direction: "rtl",
  spacing: (factor: number) => `${factor}rem`,
  typography,
  shape: {
    /**
     * Used as default radius of Paper component (px)
     *
     * HINT: try to add radius to any component as a percentage of this value. This helps
     * to make the general theme changes more dynamic.
     */
    borderRadius: 24,
  },
  layoutPadding: {
    px: {
      xs: 1.6,
      md: 3.2,
      xl: 6.4,
    },
    py: {
      xs: 1.6,
      md: 3.2,
      xl: 4.8,
      xxl: 6.4,
    },
  },
  palette: darkPalette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1440,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "1.6rem",
          fontWeight: "400",
          borderRadius: theme.shape.borderRadius * 0.5,
          boxShadow: "none",
          "&:hover": {
            boxShadow: `0px 0px 16px 0px ${hexToRgba(
              theme.palette.primary.main,
              0.39
            )}`,
          },
          "&:active": {
            boxShadow: "unset",
          },
        }),
        sizeSmall: {
          height: "4.6rem",
        },
        sizeMedium: {
          height: "5.6rem",
        },
        sizeLarge: {
          height: "6.6rem",
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "xxl",
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
        },
        colorWarning: {
          backgroundColor: `${
            (darkPalette?.warning as SimplePaletteColorOptions)?.main
          }1A`,
          color: (darkPalette?.warning as SimplePaletteColorOptions)?.main,
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.grey[100],
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.grey[100],
          backgroundColor: theme.palette.grey[600],
          borderRadius: theme.shape.borderRadius * 0.5,

          "&:hover:not(.Mui-focused,.Mui-disabled)": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.grey[50],
            },
          },
        }),
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "0.8rem",
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.grey[100],
        }),
      },
    },
  },
});
