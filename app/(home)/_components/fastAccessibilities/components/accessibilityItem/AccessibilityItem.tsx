"use client";

import { Button } from "@/components/common";
import { Paper, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import { AccessibilityItems } from "../../FastAccessibilities";
import { useTranslations } from "next-intl";
import useBreakpoints from "@/hooks/useBreakpoints";
import { accessibilityItemStyles } from "./accessibilityItemStyles";

interface AccessibilityItemProps {
  item: AccessibilityItems;
}

const AccessibilityItem: React.FC<AccessibilityItemProps> = ({ item }) => {
  const classes = accessibilityItemStyles();
  const t = useTranslations("homePage.fastAccessibilities");
  const { isLg } = useBreakpoints();

  return (
    <Button sx={{ ...classes.button, ...item.sx } as SxProps}>
      <Paper
        elevation={0}
        sx={
          {
            ...classes.button,
            ...classes.hoverAnimate,
          } as SxProps
        }
      ></Paper>
      <Image
        src={item.src}
        width={isLg ? 78 : 60}
        height={isLg ? 73 : 56}
        alt={t(item.alt)}
      />
      <Typography variant="h5" sx={classes.typography}>
        {t(item.label)}
        <span className="icon-arrow-left-2-outlined" />
      </Typography>
    </Button>
  );
};

export default AccessibilityItem;
