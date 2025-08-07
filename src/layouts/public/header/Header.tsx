import React, { useState } from "react";
import { Col, Image, Row, Tabs, type TabsProps } from "antd";

import { Logo, MenuCloseIcon, MenuIcon } from "@/assets/header";
import { ROUTER_PATH } from "@/constants";

import { HeaderStyle, MenuMobileStyled } from "./Header.styled";
import ButtonComponent from "@/components/button/ButtonComponent";
import useWindowSize from "@/hooks/useWindowSize/useWindowSize";

const HeaderLayout: React.FC = () => {
  const { isMobile } = useWindowSize();
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);

  const items: TabsProps["items"] = [
    {
      key: ROUTER_PATH.HOME,
      label: "HOME",
    },
    {
      key: ROUTER_PATH.ITEMS1,
      label: "ITEMS1",
    },
    {
      key: ROUTER_PATH.ITEMS2,
      label: "ITEMS2",
    },
    {
      key: ROUTER_PATH.ITEMS3,
      label: "ITEMS3",
    },
    {
      key: ROUTER_PATH.ITEMS4,
      label: "ITEMS4",
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <HeaderStyle id="header">
      <Row className="wrapper-header">
        {isMobile && (
          <Image
            src={isShowMenuMobile ? MenuCloseIcon : MenuIcon}
            preview={false}
            alt="menu-icon"
            onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
          />
        )}

        <Col>
          <Image src={Logo} preview={false} alt="logo" />
        </Col>

        {!isMobile && (
          <Col className="menu">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </Col>
        )}

        <Col className="col-auth">
          <ButtonComponent type="primary">SIGN UP</ButtonComponent>
          <ButtonComponent type="default">LOG IN</ButtonComponent>
        </Col>
      </Row>

      <MenuMobileStyled
        title="Basic Drawer"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => setIsShowMenuMobile(false)}
        open={isShowMenuMobile}
        placement="left"
        mask={false}
        width={"100%"}
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </MenuMobileStyled>
    </HeaderStyle>
  );
};

export default HeaderLayout;
