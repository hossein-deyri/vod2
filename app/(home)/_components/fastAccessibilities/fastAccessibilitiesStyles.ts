import MuiStyles from "@/ts/types/muiStyles";

export const fastAccessibilitiesStyles: MuiStyles = () => ({
  container: {
    position: "relative",
    height: "30rem",
    marginTop: "12rem",
    "--slide-spacing": "1.4rem",
    "--slide-size-sm": "100%",

    img: {
      margin: { xs: "-1.2rem", sm: 0 },
    },
  },

  swiperContainer: {
    maxWidth: "40rem",
    margin: "0 auto",
  },

  stack: {
    justifyContent: "center",
    gap: {
      xs: "3.2rem",
      lg: "6.9rem",
    },
    position: "relative",
    top: {
      xs: "8rem",
      lg: "6rem",
    },
  },
});
