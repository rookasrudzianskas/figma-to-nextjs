import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesCard from "../components/rent-properties-card";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta
          name="description"
          content="Real Estate Discover your perfect home"
        />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburgerMenu="/notification1.svg" hamburger />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesCard />
        <RentPropertiesContainer />
        <Contact />
        <Footer
          houseLine="/houseline2.svg"
          socialMediaLogo="/social-media-logo5.svg"
          socialMediaLogo1="/social-media-logo6.svg"
          socialMediaLogo2="/social-media-logo7.svg"
          socialMediaLogo3="/social-media-logo8.svg"
          socialMediaLogo4="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
