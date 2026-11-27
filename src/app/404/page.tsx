import type { Metadata } from "next";
import { NotFoundView } from "@/components/utilities/NotFoundView";

export const metadata: Metadata = {
  title: "404 Page Not Found - Docketo",
  description: "The page you are looking for does not exist or has been moved. Return to the Docketo homepage.",
};

export default function Custom404Page() {
  return <NotFoundView />;
}
