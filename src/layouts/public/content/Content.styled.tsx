import { Layout } from "antd";
import styled, { css } from "styled-components";

import ResponsiveUI, { SIZE } from "@/constants/responsive";

const { Content } = Layout;

const responsiveStyled = css`
  ${ResponsiveUI.between(SIZE.MD, SIZE.LG)} {
  }

  ${ResponsiveUI.lessThan(SIZE.MD)} {
    margin-top: 60px;
  }
`;

export const ContentStyle = styled(Content)`
  margin-top: 80px;
  min-height: initial;

  ${responsiveStyled}
`;
