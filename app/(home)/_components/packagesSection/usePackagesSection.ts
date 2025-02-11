import { useTranslations } from "next-intl";
import { MOCK_PACKAGES } from "@/services/dummyData";

const usePackagesSection = () => {
  const t = useTranslations("homePage.packages");

  return {
    title: t("title"),
    description: t("description"),
    data: MOCK_PACKAGES,
  };
};

export default usePackagesSection;
