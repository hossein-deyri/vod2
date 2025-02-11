import MuiStyles from "@/ts/types/muiStyles";

const faqStyles: MuiStyles = () => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingY: "10rem",
    width: 1,
    maxWidth: "86rem",
    marginX: "auto",
    "& .question-mark-image": {
      margin: "0 2rem 1rem 0",
    },
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

export default faqStyles;
