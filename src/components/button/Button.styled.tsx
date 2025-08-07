import { Button } from "antd";
import styled from "styled-components";

import { theme } from "@/constants";

export const ButtonStyled = styled(Button)`
  border-radius: 100px;

  &.ant-btn-primary {
    background-color: ${theme.color.primary};
    color: ${theme.color.black};
    font-weight: bold;

    &:hover {
      background-color: #c79b12 !important;
      color: #1f1f1f !important;
    }
  }

  &.ant-btn-default {
    background-color: ${theme.color.black};
    border: 1px solid ${theme.color.primary};
    color: ${theme.color.white};
    font-weight: bold;

    &:hover {
      border-color: #ffe8ab !important;
      color: #d2d2d2 !important;
      background-color: transparent !important;
    }
  }
`;
