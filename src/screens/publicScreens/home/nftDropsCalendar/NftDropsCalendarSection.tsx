import React from "react";
import Slider, { type Settings } from "react-slick";
import { Col, Image, Row, Typography } from "antd";

import { HotNft, NftDrops1, Promotion } from "@/assets/home";
import { NftDropsCalendar } from "./NftDropsCalendarSection..styled";

const NftDropsCalendarSection: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  const itemCarousel = [
    { image: NftDrops1, alt: "NFT Collection 1" },
    { image: NftDrops1, alt: "NFT Collection 1" },
  ];

  return (
    <NftDropsCalendar>
      <Row className="wrapper-slide">
        <Col xl={12} md={12} xs={24} className="nft-drops">
          <Col span={24} className="col-title">
            <Typography.Text className="title">
              NFT DROPS CALENDAR
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
        </Col>

        <Col xl={5} md={5} xs={11}>
          <Col span={24} className="col-title">
            <Typography.Text className="title">HOT NFT</Typography.Text>
          </Col>
          <Col span={24}>
            <Image
              src={HotNft}
              preview={false}
              alt={"hot nft"}
              className="image-hot-nft"
            />
          </Col>
        </Col>

        <Col xl={5} md={5} xs={11}>
          <Col span={24} className="col-title">
            <Typography.Text className="title">PROMOTION</Typography.Text>
          </Col>
          <Col span={24}>
            <Image
              src={Promotion}
              preview={false}
              alt={"promotion"}
              className="image-promotion"
            />
          </Col>
        </Col>
      </Row>
    </NftDropsCalendar>
  );
};

export default NftDropsCalendarSection;
