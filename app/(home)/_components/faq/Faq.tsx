import { Box, Typography } from "@mui/material";
import faqStyles from "./faqStyles";
import Image from "next/image";
import useFaq from "./useFaq";
import { Accordion } from "@/components/custom";

const Faq: React.FC = () => {
  const classes = faqStyles();
  const { t, QAItems } = useFaq();

  return (
    <Box sx={classes.container}>
      <Typography sx={classes.title}>
        {t("title")}
        <Image
          className="question-mark-image"
          src={"/images/question-mark.png"}
          width={21}
          height={32}
          alt={t("questionMarkAlt")}
        />
      </Typography>
      <Typography sx={classes.description}>{t("description")}</Typography>
      <Accordion items={QAItems} />
    </Box>
  );
};

export default Faq;
