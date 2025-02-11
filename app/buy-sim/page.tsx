"use client";

import { Chip, Grid2, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { buySimStyles } from "./buySimStyles";
import { Button } from "@/components/common";
import { PersonalInformationStep, Stepper } from "@/components/custom";
import { StepperStepType } from "@/components/custom/stepper/components/stepper/Stepper";
import { ROOT } from "@/constants/root";

export default function BuySimPage() {
  const classes = buySimStyles();
  const t = useTranslations();
  const steps: StepperStepType[] = t
    .raw("buySim.steps")
    .map((step: string) => ({ title: step }));

  const Title = () => (
    <Grid2 sx={classes.titleWrapper}>
      <Typography sx={classes.title}>{t("buySim.buySimcard")}</Typography>
      <Chip
        sx={classes.paperWarning}
        color="warning"
        icon={<span className="icon icon-alert-circle-outlined" />}
        label={t("buySim.simcardCountLimitWarning", {
          count: ROOT.userMaximumaAllowedSimcard,
        })}
      />
    </Grid2>
  );

  const ButtonWrapper = () => (
    <Grid2 sx={classes.buttonWrapper}>
      <Button sx={classes.button} variant="outlined">
        {t("previous")}
      </Button>
      <Button sx={classes.button}>{t("next")}</Button>
    </Grid2>
  );

  return (
    <Paper sx={classes.paper}>
      <Title />
      <Stepper
        {...{ steps }}
        // TODO: @ali: use real data here
        activeStepIndex={0}
      />
      {/* <SimcardSelectionStep /> */}
      <PersonalInformationStep />
      <ButtonWrapper />
    </Paper>
  );
}
