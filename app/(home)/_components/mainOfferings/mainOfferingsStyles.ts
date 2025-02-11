import MuiStyles from "@/ts/types/muiStyles";

const mainOfferingsStyles: MuiStyles = () => ({
  container: {
    paddingY: "10rem",
  },

  mainOfferingsWrapper: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  titleContainer: {
    width: "100%",
    textAlign: "center",
    paddingBottom: {
      xs: "3rem",
      xl: "3.2rem",
      xxl: "4.8rem",
    },
    fontSize: {
      xs: "2rem",
      lg: "2.4rem",
      xl: "3.2rem",
    },
  },

  mainOfferings: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: {
      xs: "100%",
      md: "31rem",
    },
  },

  title: {
    width: "100%",
    textAlign: "center",
    lineHeight: "2.6rem",
    fontSize: {
      xs: "1.6rem",
      lg: "1.8rem",
      xl: "2.4rem",
    },
    paddingTop: {
      xs: "1.2rem",
      xl: "1.4rem",
    },
  },

  description: {
    width: "100%",
    textAlign: "center",
    lineHeight: "2.4rem",
    opacity: 0.9,
    color: (theme) => theme.palette.text.secondary,
    fontSize: {
      xs: "1.4rem",
      xl: "1.6rem",
    },
    padding: {
      xs: "1.2rem 2.5rem 0",
      xl: "1.4rem 4rem 0",
    },
  },
});

export default mainOfferingsStyles;
