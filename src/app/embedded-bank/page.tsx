import type { Metadata } from "next";
import { ProductPageView } from "@/components/products/ProductPageView";
import { PRODUCT_PAGES } from "@/content/products";

const config = PRODUCT_PAGES["embedded-bank"];

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
};

export default function EmbeddedBankPage() {
  return <ProductPageView config={config} />;
}
