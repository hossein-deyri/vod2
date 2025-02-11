import MuiStyles from "@/ts/types/muiStyles";

const packagesSectionStyles: MuiStyles = () => ({
  root: {
    margin: "auto",
    width: {
      md: "70.4rem",
      xl: "107.2rem",
      xxl: "136.2rem",
    },
    "--slide-spacing": "3.2rem",
    "--slide-size": "100%",
    "--slide-spacing-sm": "3.5rem",
    "--slide-size-sm": "50%",
    "--slide-spacing-lg": "4rem",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    pb: { xs: 0, sm: "4.8rem" },
    pt: "4.8rem",
    width: 1,
    maxWidth: "86rem",
    marginX: "auto",
    "& .question-mark-image": {
      margin: "0 0 1rem 2rem",
    },
  },

  wrapper: {
    display: { xs: "unset", sm: "flex" },
    flexDirection: "column",
    padding: "4rem 0rem",
    backgroundColor: (theme) => theme.palette.background.paper,
    height: "45.9rem",
    borderRadius: "2.4rem",
    justifyContent: "space-between",
  },

  title: {
    textAlign: "center",
    fontSize: {
      xs: "2rem",
      lg: "2.4rem",
      xl: "3.2rem",
    },
  },

  description: {
    opacity: 0.9,
    padding: "1.6rem 0 2.4rem 0",
    lineHeight: "2.6rem",
    textAlign: "center",
    fontSize: {
      xs: "1.6rem",
      xl: "1.8rem",
    },
  },
});

export default packagesSectionStyles;
