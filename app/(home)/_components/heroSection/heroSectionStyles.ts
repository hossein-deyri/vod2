import MuiStyles from "@/ts/types/muiStyles";

export const heroSectionStyles: MuiStyles = () => ({
  heroWrapper: {
    display: "grid",
    gridTemplateColumns: {
      xs: "100%",
      lg: "1fr 40%",
    },
    gridTemplateRows: {
      xs: "auto auto auto",
      lg: "auto 1fr",
    },
    alignItems: {
      xs: "center",
      lg: "start",
    },
    justifyContent: "center",
    gap: {
      xs: "2.4rem",
      lg: "4.8rem",
    },
  },

  texts: {
    gridColumn: "1",
    gridRow: "1",
    marginTop: {
      xs: "unset",
      lg: "13rem",
    },
    textAlign: {
      xs: "center",
      lg: "left",
    },
  },

  title: {
    fontSize: {
      xs: "2rem",
      md: "4rem",
      xl: "4.8rem",
    },
    lineHeight: "normal",
    width: {
      xs: "100%",
      xl: "90%",
    },
  },

  strongTitle: { fontSize: "inherit", fontWeight: "700" },

  paragraph: {
    color: (theme) => theme.palette.grey[50],
    marginTop: {
      xs: "1rem",
      lg: "2rem",
    },
    fontSize: {
      xs: "1.6rem",
      md: "1.8rem",
    },
    opacity: "0.9",
    width: {
      xs: "100%",
      lg: "41.4rem",
    },
  },

  buttons: {
    display: "flex",
    gap: "1.6rem",
    justifyContent: {
      xs: "center",
      lg: "start",
    },
    gridColumn: "1",
    gridRow: {
      xs: "3",
      lg: "2",
    },

    button: {
      whiteSpace: "nowrap",
      width: {
        xs: "17rem",
        md: "20rem",
      },
    },
  },

  image: {
    display: "flex",
    justifyContent: "center",
    gridColumn: { xs: "1", lg: "2" },
    gridRow: { xs: "2", lg: "1 / span 2" },

    img: {
      width: {
        xs: "20.3rem",
        md: "32.1rem",
        lg: "100%",
      },
      height: "auto",
    },
  },
});
