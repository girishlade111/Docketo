import type { Metadata } from "next";
import { PolicyPageView } from "@/components/policies/PolicyPageView";
import { POLICIES } from "@/content/policies";

const policy = POLICIES["privacy"];

export const metadata: Metadata = {
  title: policy.metaTitle,
};

export default function PrivacyPage() {
  return <PolicyPageView policy={policy} />;
}
