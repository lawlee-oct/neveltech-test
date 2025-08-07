import React from "react";
import { Image, Row } from "antd";

import {
  FreeToEarn,
  HowToBuy,
  NewNfts,
  Ranking,
  Roadmaps,
  VideoNft,
} from "@/assets/home";
import {
  CategoriesSectionStyled,
  CategoryItem,
  CategoryIcon,
  CategoryLabel,
} from "./CategoriesSection.styled";

const categories = [
  { icon: FreeToEarn, label: "FREE TO EARN" },
  { icon: Ranking, label: "RANKING" },
  { icon: VideoNft, label: "VIDEO-NFT" },
  { icon: HowToBuy, label: "HOW TO BUY" },
  { icon: NewNfts, label: "NEW NFTS" },
  { icon: Roadmaps, label: "ROADMAPS" },
];

const CategoriesSection: React.FC = () => {
  return (
    <CategoriesSectionStyled>
      <Row className="wrapper-categories">
        {categories.map((cat) => (
          <CategoryItem key={cat.label} span={3}>
            <CategoryIcon>
              <Image
                src={cat.icon}
                preview={false}
                alt={cat.label}
                className="icon"
              />
            </CategoryIcon>
            <CategoryLabel className="label">{cat.label}</CategoryLabel>
          </CategoryItem>
        ))}
      </Row>
    </CategoriesSectionStyled>
  );
};

export default CategoriesSection;
