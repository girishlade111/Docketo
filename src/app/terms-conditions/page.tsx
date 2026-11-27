import type { Metadata } from "next";
import { PolicyPageView } from "@/components/policies/PolicyPageView";
import { POLICIES } from "@/content/policies";

const policy = POLICIES["terms-conditions"];

export const metadata: Metadata = {
  title: policy.metaTitle,
};

export default function TermsPage() {
  return <PolicyPageView policy={policy} />;
}
