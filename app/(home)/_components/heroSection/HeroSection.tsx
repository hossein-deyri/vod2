"use client";

import { Button } from "@/components/common";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { heroSectionStyles } from "./heroSectionStyles";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const classes = heroSectionStyles();
  const tRoot = useTranslations();
  const t = useTranslations("homePage");

  return (
    <Box sx={classes.heroWrapper} id="home">
      <Box sx={classes.texts}>
        <Typography variant="h1" sx={classes.title}>
          {t("title")}{" "}
          <Typography component="span" sx={classes.strongTitle} color="primary">
            {tRoot("siteName")}
          </Typography>
        </Typography>
        <Typography variant="body2" sx={classes.paragraph}>
          {t("simcardDescription")}
        </Typography>
      </Box>
      <Box sx={classes.buttons}>
        <Button color="primary">{t("buySimcard")}</Button>
        <Button color="primary" variant="outlined">
          {t("enableSimcard")}
        </Button>
      </Box>
      <Box sx={classes.image}>
        <Image
          src="/images/smartcomm-simcard.svg"
          alt={t("simcardAlt")}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
