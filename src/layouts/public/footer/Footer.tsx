import React from "react";

import {
  FooterStyle,
  FooterRow,
  FooterCol,
  FooterSection,
  FooterTitle,
  FooterList,
  FooterListItem,
  FooterLink,
  InstallButton,
} from "./Footer.styled";

interface FooterItem {
  title: string;
  links: string[];
  hasButton?: boolean;
}

const contentFooter: FooterItem[] = [
  {
    title: "ABOUT US",
    links: [
      "Careers",
      "Company Details",
      "Terms & Conditions",
      "Help center",
      "Privacy Policy",
      "Affiliate",
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      "NFT Marketplace",
      "Slingshot",
      "Swaps",
      "NFT Launchpad",
      "Runes Platform",
      "Creator Dashboard",
    ],
  },
  {
    title: "RESOURCES",
    links: ["Support", "API", "Feature Requests", "Trust & Safety", "Sitemap"],
  },
  {
    title: "CONTACT US",
    links: ["support@tech.email", "affiliate@tech.com"],
    hasButton: true,
  },
];

const FooterLayout: React.FC = () => {
  return (
    <FooterStyle id="footer">
      <FooterRow className="footer-row">
        {contentFooter.map((section, index) => (
          <FooterCol xs={12} sm={12} md={6} key={index}>
            <FooterSection>
              <FooterTitle>{section.title}</FooterTitle>
              <FooterList>
                {section.links.map((link, linkIndex) => (
                  <FooterListItem key={linkIndex}>
                    <FooterLink href="#">{link}</FooterLink>
                  </FooterListItem>
                ))}
              </FooterList>
              {section.hasButton && (
                <InstallButton type="primary" size="large">
                  <span style={{ fontSize: "16px" }}>📱</span>
                  <span>Install App</span>
                </InstallButton>
              )}
            </FooterSection>
          </FooterCol>
        ))}
      </FooterRow>
    </FooterStyle>
  );
};

export default FooterLayout;
