"use client";

import useBreakpoints from "@/hooks/useBreakpoints";
import Image from "next/image";
import { Box, Stack, SxProps, Theme } from "@mui/material";
import { useTranslations } from "next-intl";
import { fastAccessibilitiesStyles } from "./fastAccessibilitiesStyles";
import AccessibilityItem from "./components/accessibilityItem/AccessibilityItem";
import Swiper, { SwiperOptions } from "@/components/custom/swiper";
import { useMemo } from "react";

export interface AccessibilityItems {
  src: string;
  label: string;
  alt: string;
  sx?: SxProps<Theme>;
}

const ACCESSIBILITY_ITEMS: AccessibilityItems[] = [
  {
    src: "/images/simcard.png",
    label: "simcard",
    alt: "simcardAlt",
  },
  {
    src: "/images/package.png",
    label: "package",
    alt: "packageAlt",
    sx: {
      bottom: {
        sm: "2.5rem",
        lg: "4.6rem",
      },
    },
  },
  {
    src: "/images/charge.png",
    label: "charge",
    alt: "chargeAlt",
  },
];

const FastAccessibilities = () => {
  const t = useTranslations("homePage.fastAccessibilities");
  const { isLg, isSm } = useBreakpoints();
  const classes = fastAccessibilitiesStyles();

  const swiperOptions = useMemo<SwiperOptions>(
    () => ({
      direction: "rtl",
      loop: false,
      hasDots: false,
      hasArrows: false,
      slidesSx: () => ({
        flex: {
          xs: "1 0 35%",
        },
        padding: {
          xs: "0 2rem",
          sm: 0,
        },
      }),
    }),
    []
  );

  const linesImageSrc = useMemo(
    () => (isLg ? "/images/long-lines.svg" : "/images/short-lines.svg"),
    [isLg]
  );

  const LinesImage = () => (
    <Image src={linesImageSrc} fill alt={t("linesAlt")} />
  );

  const MobileView = () => (
    <Box sx={classes.swiperContainer}>
      <Swiper options={swiperOptions}>
        {ACCESSIBILITY_ITEMS.map((item, index) => (
          <AccessibilityItem
            key={`mobile-${item.label}-${index}`}
            item={item}
          />
        ))}
      </Swiper>
    </Box>
  );

  const DesktopView = () => (
    <Stack direction="row" sx={classes.stack}>
      {ACCESSIBILITY_ITEMS.map((item, index) => (
        <AccessibilityItem key={`desktop-${item.label}-${index}`} item={item} />
      ))}
    </Stack>
  );

  return (
    <Box sx={classes.container}>
      {isSm && <LinesImage />}
      {!isSm && <MobileView />}
      {isSm && <DesktopView />}
    </Box>
  );
};

export default FastAccessibilities;
