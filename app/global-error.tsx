"use client";

import serverErrorImageUrl from "@/assets/icons/server-error.svg";
import ErrorScreen from "@/components/custom/errorScreen/ErrorScreen";
import { useTranslations } from "next-intl";

const GlobalError = () => {
  const t = useTranslations("errorPage");

  return (
    <ErrorScreen
      imageUrl={serverErrorImageUrl}
      description={t(`serverErrorDescription`)}
    />
  );
};

export default GlobalError;
