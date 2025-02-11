import { useTranslations } from "next-intl";

export interface MainOfferingsItemProps {
  title: string;
  description: string;
}
const useMainOfferings = () => {
  const t = useTranslations("homePage.offering");
  const offeringItems: Array<MainOfferingsItemProps> = t.raw("offeringItem");
  const imageList = [
    "/assets/images/home/desired-number.png",
    "/assets/images/home/online-activation.png",
    "/assets/images/home/support-services.png",
  ];

  return { t, offeringItems, imageList };
};

export default useMainOfferings;
