import notFoundImageUrl from "@/assets/icons/not-found.svg";
import ErrorScreen from "@/components/custom/errorScreen/ErrorScreen";
import { useTranslations } from "next-intl";

const NotFound = () => {
  const t = useTranslations("errorPage");

  return (
    <ErrorScreen
      imageUrl={notFoundImageUrl}
      description={t(`notFoundDescription`)}
    />
  );
};

export default NotFound;
