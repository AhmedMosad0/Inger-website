import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export default function Hero({ isMobile }) {
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}
