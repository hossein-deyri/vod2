import MuiStyles from "@/ts/types/muiStyles";

export const accessibilityItemStyles: MuiStyles = () => ({
  button: {
    width: {
      xs: "11rem",
      sm: "14rem",
      md: "18rem",
    },
    height: {
      xs: "11rem",
      sm: "14rem",
      md: "18rem",
    },

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.4rem",
    position: "relative",
    backgroundColor: (theme) => theme.palette.grey[400],
    transition: "ease all 0.5s",
    borderRadius: "2.4rem",

    "&:hover": {
      boxShadow: {
        xs: "none",
        sm: "unset",
      },
      backgroundColor: {
        xs: (theme) => theme.palette.grey[400],
        sm: (theme) => theme.palette.grey[300],
      },
    },

    "@media (hover: hover)": {
      "&:hover": {
        boxShadow: "unset",
        backgroundColor: (theme) => theme.palette.grey[300],
      },
    },
  },

  hoverAnimate: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: "1",
    transitionProperty: "all",
    border: (theme) => `1px solid ${theme.palette.grey[400]}`,

    "&:hover": {
      border: {
        xs: (theme) => `1px solid ${theme.palette.grey[400]}`,
        sm: (theme) => `1px solid ${theme.palette.grey[300]}`,
      },
      transform: {
        xs: "none",
        sm: "rotate(9deg)",
      },
    },

    "@media (hover: hover)": {
      "&:hover": {
        border: (theme) => `1px solid ${theme.palette.grey[300]}`,
        transform: "rotate(9deg)",
      },
    },
  },

  typography: {
    fontSize: {
      xs: "1.2rem",
      md: "1.4rem",
      lg: "1.6rem",
    },
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: {
      sm: "0.8rem",
      lg: "1.9rem",
    },
    opacity: 0.9,
    color: (theme) => theme.palette.grey[50],
    minWidth: "max-content",

    span: {
      fontSize: "2.3rem",
    },
  },
});
