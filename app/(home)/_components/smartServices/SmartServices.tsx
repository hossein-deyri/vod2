"use client";

import { Typography } from "@mui/material";
import smartServicesStyles from "./smartServicesStyles";
import { useTranslations } from "next-intl";
import Grid2 from "@mui/material/Grid2";
import Image from "next/image";

const SmartServices: React.FC = () => {
  const classes = smartServicesStyles();
  const t = useTranslations("homePage.smartServices");
  const serviceItems: string[] = t.raw("serviceItem");

  return (
    <Grid2 sx={classes.container} id="services" container>
      <Grid2 sx={classes.imageWrapper} size={{ xs: 12, lg: 6, xl: 7 }}>
        <Image
          src={"/images/triple-simcards.png"}
          width={0}
          height={0}
          sizes="100vw"
          alt={t("simcardAlt")}
          className="image"
        />
      </Grid2>
      <Grid2 sx={classes.descriptionWrapper} size={{ xs: 12, lg: 6, xl: 5 }}>
        <Typography sx={classes.title}>{t("title")}</Typography>
        <Typography sx={classes.description}>{t("description")}</Typography>
        <Grid2 sx={classes.itemsContainer}>
          <ul>
            {serviceItems.map((item, index) => (
              <li className="service-item" key={index}>
                <Image
                  src={"/images/icon-tick.png"}
                  width={24}
                  height={24}
                  alt={t("tickIconAlt")}
                />
                {item}
              </li>
            ))}
          </ul>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default SmartServices;
