import React from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface SiteLayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

export function SiteLayout({ children, hideHeader = false }: SiteLayoutProps) {
  return (
    <>
      {!hideHeader && <SiteHeader />}
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
