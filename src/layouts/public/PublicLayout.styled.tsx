import ResponsiveUI, { SIZE } from "@/constants/responsive";
import { Layout } from "antd";
import styled, { css } from "styled-components";

const responsiveStyled = css`
  ${ResponsiveUI.between(SIZE.MD, SIZE.LG)} {
    overflow-y: auto;
    overflow-x: hidden;
  }

  ${ResponsiveUI.lessThan(SIZE.MD)} {
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const PublicLayoutStyle = styled(Layout)`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  ${responsiveStyled}
`;
