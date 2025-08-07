import styled, { css } from "styled-components";

import { SIZE, theme } from "@/constants";
import ResponsiveUI from "@/constants/responsive";

const responsiveStyled = css`
  ${ResponsiveUI.between(SIZE.MD, SIZE.LG)} {
    padding: 40px 20px;
  }

  ${ResponsiveUI.lessThan(SIZE.MD)} {
    padding: 40px 20px;

    .wrapper-slide {
      .nft-drops {
        margin-bottom: 40px;
      }

      .col-title {
        .title {
          font-size: 16px;
        }
      }

      .slide-item {
        height: 171px !important;
      }

      .image-hot-nft,
      .image-promotion {
        height: 140px;
      }
    }
  }
`;

export const NftDropsCalendar = styled.section`
  padding: 80px 0;

  .image-hot-nft,
  .image-promotion {
    object-fit: cover;
    border-radius: 12px;
    height: 245px;
  }

  .wrapper-slide {
    max-width: 1128px;
    margin: 0 auto;
    justify-content: space-between;

    .col-title {
      margin-bottom: 8px;

      .title {
        color: ${theme.color.primary};
        font-weight: 900;
        font-size: 26px;
      }
    }

    .slide-item {
      height: 245px !important;
      border-radius: 12px;

      .ant-image {
        height: 100%;
        width: 100%;

        .ant-image-img {
          height: 100%;
          width: 100%;
          border-radius: 12px;
        }
      }
    }

    .slick-next,
    .slick-prev {
      width: 40px;
      height: 40px;
      background: #383a42;
      border-radius: 12px;

      &::before {
        font-family: sans-serif !important;
        background: #383a42;
        border-radius: 12px;
      }

      &:hover {
        background: #383a42;
      }
    }

    .slick-next {
      right: 0;
      top: -28px;

      &::before {
        content: ">";
      }
    }

    .slick-prev {
      left: auto;
      right: 50px;
      top: -28px;

      &::before {
        content: "<";
      }
    }
  }

  ${responsiveStyled}
`;
