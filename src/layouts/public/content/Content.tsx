import React from "react";
import { useOutlet } from "react-router-dom";

import { Suspense } from "@/components";
import { ContentStyle } from "./Content.styled";

const ContentLayout: React.FC = () => {
  const outlet = useOutlet();
  return (
    <ContentStyle>
      <React.Suspense fallback={<Suspense />}>{outlet}</React.Suspense>
    </ContentStyle>
  );
};

export default ContentLayout;
