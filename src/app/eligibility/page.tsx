import type { Metadata } from "next";
import { PolicyPageView } from "@/components/policies/PolicyPageView";
import { POLICIES } from "@/content/policies";

const policy = POLICIES["eligibility"];

export const metadata: Metadata = {
  title: policy.metaTitle,
};

export default function EligibilityPage() {
  return <PolicyPageView policy={policy} />;
}
