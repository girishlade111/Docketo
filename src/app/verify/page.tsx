import type { Metadata } from "next";
import { ProductPageView } from "@/components/products/ProductPageView";
import { PRODUCT_PAGES } from "@/content/products";

const config = PRODUCT_PAGES["verify"];

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
};

export default function VerifyPage() {
  return <ProductPageView config={config} />;
}
