import React from "react";
import Slider, { type Settings } from "react-slick";
import { Col, Image, Row, Typography } from "antd";

import {
  NewNft1,
  NewNft2,
  NewNft3,
  NewNft4,
  NewNft5,
  NewNft6,
  NewNft7,
} from "@/assets/home";
import useWindowSize from "@/hooks/useWindowSize/useWindowSize";
import { NewNftSectionStyled } from "./NewNftCollections.styled";

const NewNftCollectionsSection: React.FC = () => {
  const { isMobile } = useWindowSize();

  const settings: Settings = {
    infinite: true,
    slidesToShow: isMobile ? 3 : 6,
    slidesToScroll: isMobile ? 1 : 2,
    autoplaySpeed: 3000,
  };

  const itemCarousel = [
    { image: NewNft1, alt: "NFT Collection 1" },
    { image: NewNft2, alt: "NFT Collection 2" },
    { image: NewNft3, alt: "NFT Collection 3" },
    { image: NewNft4, alt: "NFT Collection 4" },
    { image: NewNft5, alt: "NFT Collection 5" },
    { image: NewNft6, alt: "NFT Collection 6" },
    { image: NewNft7, alt: "NFT Collection 7" },
  ];

  return (
    <NewNftSectionStyled>
      <Row className="wrapper-slide">
        <Col span={24} className="col-title">
          <Typography.Text className="title">
            NEW NFT COLLECTIONS
          </Typography.Text>
        </Col>
        <Col span={24}>
          <div className="slider-container">
            <div>
              <Slider {...settings}>
                {itemCarousel.map((item, idx) => (
                  <div className="slide-item" key={idx}>
                    <Image src={item.image} preview={false} alt={item.alt} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Col>
      </Row>
    </NewNftSectionStyled>
  );
};

export default NewNftCollectionsSection;
