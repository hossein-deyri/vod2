import MuiStyles from "@/ts/types/muiStyles";

const mdartServicesStyles: MuiStyles = () => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingY: "10rem",
    width: "100%",
  },

  title: {
    width: "100%",
    fontSize: {
      xs: "2rem",
      lg: "2.4rem",
      xl: "3.2rem",
    },
    textAlign: {
      xs: "center",
      lg: "start",
    },
  },

  description: {
    width: "100%",
    fontSize: {
      xs: "1.6rem",
      xl: "1.8rem",
    },
    padding: {
      xs: "1.6rem",
      lg: "1.6rem 0",
    },
    lineHeight: "2.6rem",
    opacity: 0.9,
    textAlign: {
      xs: "start",
      md: "center",
      lg: "start",
    },
  },

  imageWrapper: {
    display: "flex",
    justifyContent: {
      xs: "center",
      lg: "start",
    },
    order: { xs: 1, lg: 0 },
    paddingTop: {
      xs: "2rem",
      lg: "0",
    },

    "& .image": {
      width: {
        xs: "25.4rem",
        md: "40rem",
        xl: "48rem",
        xxl: "55.7rem",
      },
      height: {
        xs: "16.3rem",
        md: "25.6rem",
        xl: "30.7rem",
        xxl: "35.7rem",
      },
    },
  },

  descriptionWrapper: {
    order: { xs: 0, lg: 1 },
  },

  itemsContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: { xs: "start", md: "center", lg: "space-between" },
    gap: { xs: "0", md: "5rem", lg: "0" },

    "& .service-item": {
      width: "50%",
      display: "flex",
      alignItems: "start",
      listStyleType: "none",
      lineHeight: "2rem",
      marginBottom: "2rem",
      gap: "1rem",
      paddingLeft: "1rem",
      fontSize: {
        xs: "1.2rem",
        md: "1.4rem",
        lg: "1.6rem",
      },
    },

    ">ul": {
      display: "flex",
      flexWrap: "wrap",
      width: {
        xs: "100%",
        md: "50%",
        lg: "100%",
      },
    },
  },
});

export default mdartServicesStyles;
