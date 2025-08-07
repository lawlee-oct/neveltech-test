import React from "react";
import { Image } from "antd";

import { Slider1 } from "@/assets/home";
import { BannerSectionStyled } from "./BannerSection.styled";

const BannerSection: React.FC = () => {
  return (
    <BannerSectionStyled>
      <Image src={Slider1} preview={false} alt="banner-1" />
    </BannerSectionStyled>
  );
};

export default BannerSection;
