import type { Metadata } from "next";
import { PolicyPageView } from "@/components/policies/PolicyPageView";
import { POLICIES } from "@/content/policies";

const policy = POLICIES["cookies"];

export const metadata: Metadata = {
  title: policy.metaTitle,
};

export default function CookiesPage() {
  return <PolicyPageView policy={policy} />;
}
