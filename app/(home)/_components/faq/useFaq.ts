import { AccordionItem } from "@/ts/types/accordionItem";
import { useTranslations } from "next-intl";

const useFaq = () => {
  const t = useTranslations("homePage.faq");
  const QAItems: Array<AccordionItem> = t.raw("faqItems");

  return { t, QAItems };
};

export default useFaq;
