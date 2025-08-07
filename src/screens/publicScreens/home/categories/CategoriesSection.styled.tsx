import { Col } from "antd";
import styled, { css } from "styled-components";

import { SIZE } from "@/constants";
import ResponsiveUI from "@/constants/responsive";

const responsiveStyled = css`
  ${ResponsiveUI.between(SIZE.MD, SIZE.LG)} {
  }

  ${ResponsiveUI.lessThan(SIZE.MD)} {
    .label {
      font-size: 10px;
    }
  }
`;

export const CategoriesSectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  padding: 16px;

  .wrapper-categories {
    max-width: 1128px;
    margin: 0 auto;
    width: 100%;
    justify-content: space-between;

    .col-item {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  ${responsiveStyled}
`;

export const CategoryItem = styled(Col)`
  display: grid;
  align-items: center;
  flex: 1;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const CategoryIcon = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CategoryLabel = styled.div`
  color: #fff;
  font-size: 13px;
  text-align: center;
  margin-top: 2px;
  font-weight: 500;
`;
