import React from "react";

import HeaderLayout from "./header/Header";
import FooterLayout from "./footer/Footer";
import ContentLayout from "./content/Content";
import { PublicLayoutStyle } from "./PublicLayout.styled";

const PublicLayout: React.FC = () => {
  return (
    <PublicLayoutStyle id="public-layout">
      <HeaderLayout />
      <ContentLayout />
      <FooterLayout />
    </PublicLayoutStyle>
  );
};

export default PublicLayout;
