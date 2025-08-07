import { Drawer } from "antd";
import styled, { css } from "styled-components";

import { SIZE, theme } from "@/constants";
import ResponsiveUI from "@/constants/responsive";

const responsiveStyled = css`
  ${ResponsiveUI.between(SIZE.MD, SIZE.LG)} {
  }

  ${ResponsiveUI.lessThan(SIZE.MD)} {
    height: 60px;

    .wrapper-header {
      padding: 0 20px;

      .col-auth {
        right: 20px;
      }
    }
  }
`;

export const HeaderStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${theme.background.background_primary};
  z-index: 1;

  .wrapper-header {
    padding: 0 40px;
    align-items: center;
    height: 100%;
    position: relative;

    .ant-image {
      margin-right: 16px;
      cursor: pointer;
      padding: 10px 0;
    }

    .menu {
      margin-left: 24px;

      .ant-tabs-nav {
        margin-bottom: 0;

        .ant-tabs-tab {
          padding: 10px 15px;
          color: ${theme.color.white};
          margin-left: 0;
          border-radius: 100px;
          transition: background-color 0.3s ease;

          &:hover:not(.ant-tabs-tab-active) {
            background-color: ${theme.color.primary};
            color: #000;
          }
        }

        .ant-tabs-tab-active {
          background-color: #383a42;
          border-radius: 100px;

          .ant-tabs-tab-btn {
            color: ${theme.color.primary};
          }
        }

        .ant-tabs-ink-bar {
          display: none;
        }

        &::before {
          display: none;
        }
      }
    }

    .col-auth {
      position: absolute;
      right: 40px;

      .ant-btn {
        margin-left: 8px;
      }
    }
  }

  ${responsiveStyled}
`;

export const MenuMobileStyled = styled(Drawer)`
  .ant-drawer {
    background-color: red;
  }

  .ant-drawer-header {
    display: none;
  }

  .ant-drawer-body {
    padding: 20px;

    .ant-tabs-nav-list {
      display: grid;
      width: 100%;

      .ant-tabs-tab-active {
        background-color: #383a42;
        border-radius: 100px;

        .ant-tabs-tab-btn {
          color: ${theme.color.primary};
        }
      }

      .ant-tabs-tab {
        justify-content: center;
        margin-left: 0;
      }
    }

    .item-menu {
      margin-bottom: 16px;
      background-color: #383a42;
      padding: 10px;
      justify-content: center;
      border-radius: 100px;
    }
  }
`;
