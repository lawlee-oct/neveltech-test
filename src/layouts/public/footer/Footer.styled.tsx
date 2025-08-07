import { Layout, Row, Col, Button } from "antd";
import styled, { css } from "styled-components";

import { SIZE } from "@/constants";
import ResponsiveUI from "@/constants/responsive";

const { Content } = Layout;

const responsiveStyled = css`
  ${ResponsiveUI.between(SIZE.MD, SIZE.LG)} {
    .footer-row {
      padding: 40px 20px;
    }
  }

  ${ResponsiveUI.lessThan(SIZE.MD)} {
    .footer-row {
      padding: 40px 20px;
    }
  }
`;

export const FooterStyle = styled(Content)`
  padding: 0;
  border-top: 1px solid #383a42;

  ${responsiveStyled}
`;

export const FooterRow = styled(Row)`
  padding: 40px 0;
  color: #ffffff;
  max-width: 1128px;
  margin: 0 auto;
`;

export const FooterCol = styled(Col)`
  margin-bottom: 20px;
`;

export const FooterSection = styled.div`
  margin-bottom: 20px;
`;

export const FooterTitle = styled.h3`
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterListItem = styled.li`
  margin-bottom: 8px;
  font-size: 14px;
  color: #d2d2d2;
`;

export const FooterLink = styled.a`
  color: #d2d2d2;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffe8ab;
  }
`;

export const InstallButtonCol = styled(Col)`
  display: flex;
  align-items: flex-end;
`;

export const InstallButton = styled(Button)`
  background-color: #383a42;
  border-color: #383a42;
  border-radius: 8px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
