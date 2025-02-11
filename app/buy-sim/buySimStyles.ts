import MuiStyles from "@/ts/types/muiStyles";

export const buySimStyles: MuiStyles = () => ({
  paper: {
    padding: {
      xs: 1.6,
      md: 2.4,
    },
  },

  titleWrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1.6rem",
    mb: "2.4rem",
  },

  title: {
    display: "inline-block",
    fontSize: {
      xs: "1.4rem",
      md: "2rem",
    },
  },

  paperWarning: {
    ".icon": {
      fontSize: "2.4rem",
    },
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    gap: {
      xs: "1.2rem",
      lg: "1.6rem",
    },
    marginTop: {
      xs: 2.4,
      md: 3.2,
    },
  },

  button: {
    flex: 1,
    maxWidth: "23rem",
  },
});
