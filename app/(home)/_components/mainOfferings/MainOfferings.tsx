"use client";

import Grid2 from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import mainOfferingsStyles from "./mainOfferingsStyles";
import useMainOfferings from "./useMainOfferings";

const MainOfferings: React.FC = () => {
  const classes = mainOfferingsStyles();
  const { t, offeringItems, imageList } = useMainOfferings();

  return (
    <Box sx={classes.container}>
      <Typography sx={classes.titleContainer}>{t("title")}</Typography>
      <Grid2
        sx={classes.mainOfferingsWrapper}
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, lg: 7 }}
      >
        {offeringItems.map((item, index) => (
          <Grid2
            size={{ xs: 12, md: 4 }}
            key={index}
            sx={classes.mainOfferings}
          >
            <Image
              src={imageList[index]}
              width={56}
              height={50}
              alt={t("SmartServicesAlt")}
            />
            <Typography variant="h2" sx={classes.title}>
              {item.title}
            </Typography>
            <Typography variant="h3" sx={classes.description}>
              {item.description}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default MainOfferings;
