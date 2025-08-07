import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme, FONT_FAMILY } from "./constants/styledTheme";
import RootRouter from "./routers/Root";
import "./App.less";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: FONT_FAMILY.PRIMARY,
        },
        components: {
          Table: {
            borderRadius: 0,
            headerBorderRadius: 0,
            headerBg: theme.background.background_primary,
          },
        },
      }}
    >
      <ThemeProvider theme={{}}>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default React.memo(App);
