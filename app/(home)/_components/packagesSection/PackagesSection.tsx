"use client";

import React from "react";
import PackageCard from "@/components/custom/packageCard";
import { Box, Typography } from "@mui/material";
import usePackagesSection from "./usePackagesSection";
import packagesSectionStyles from "./packagesSectionStyles";
import Swiper, { SwiperOptions } from "@/components/custom/swiper";

const OPTIONS: SwiperOptions = {
  direction: "rtl",
  loop: true,
  hasDots: true,
  hasArrows: true,
  slidesSx: () => ({
    flex: {
      xs: "1 0 35%",
      md: "1 0 60%",
      lg: "1 0 40%",
      xxl: "1 0 30%",
    },
  }),
};

const PackagesSection = () => {
  const styles = packagesSectionStyles();
  const { data, title, description } = usePackagesSection();

  return (
    <>
      <Box sx={styles.container} id="simCard">
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.description}>{description}</Typography>
      </Box>
      <Box component="section" sx={styles.root}>
        <Box sx={styles.wrapper}>
          <Swiper options={OPTIONS}>
            {data?.map((item, index) => (
              <PackageCard data={item} key={index} />
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default PackagesSection;
