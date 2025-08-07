import React from "react";

import BannerSection from "./banner/BannerSection";
import CategoriesSection from "./categories/CategoriesSection";
import NewNftCollectionsSection from "./newNftCollections/NewNftCollectionsSection";
import NftDropsCalendarSection from "./nftDropsCalendar/NftDropsCalendarSection";

import { HomeScreenStyled } from "./HomeScreen.styled";

const HomeScreen: React.FC = () => {
  return (
    <HomeScreenStyled id="content">
      <BannerSection />

      <CategoriesSection />

      <NewNftCollectionsSection />

      <NftDropsCalendarSection />
    </HomeScreenStyled>
  );
};

export default HomeScreen;
