export interface SolutionTabRecord {
  id: string;
  tabLabel: string;
  heading: string;
  bullets: string[];
  backgroundAsset: string;
  overlayAsset: string;
}

export const SOLUTION_BULLET_ICON = "/assets/misc/6aa28b39b1aa1a3f15e47997_Rectangle_3.svg";

export const SOLUTION_TABS: SolutionTabRecord[] = [
  {
    id: "payment-platforms",
    tabLabel: "Payment platforms",
    heading: "Handle repayments, reporting, and compliance in one place.",
    bullets: [
      "Earn interest or commission",
      "Open new accounts instantly",
      "Own your customer experience",
    ],
    backgroundAsset: "/assets/misc/6aa28c4afaca763983043f94_01.webp",
    overlayAsset: "/assets/misc/6aa28c4b26723c02fcb78a45_1st.webp",
  },
  {
    id: "wealth-savings",
    tabLabel: "Wealth and savings apps",
    heading: "Streamline reconciliation and strengthen retention in one move.",
    bullets: [
      "Increased share-of-wallet",
      "Instant reconciliation",
      "CASS compliant",
    ],
    backgroundAsset: "/assets/misc/6aa28c931fb171c307a5a51d_02.webp",
    overlayAsset: "/assets/misc/6aa28c93d255b280f126199b_2.webp",
  },
  {
    id: "lending",
    tabLabel: "Lending",
    heading: "One infrastructure, endless payment possibilities.",
    bullets: [
      "Fully compliant",
      "Flexible accounts",
      "Competitive interest rates",
    ],
    backgroundAsset: "/assets/misc/6aa28ce0220840992bed1040_03.webp",
    overlayAsset: "/assets/misc/6aa28ce0912008c55faa6a5c_3.webp",
  },
  {
    id: "proptech",
    tabLabel: "Proptech solutions",
    heading: "Set your clients up for success with dedicated, compliant accounts.",
    bullets: [
      "Fast account opening",
      "Streamlined reconciliation",
      "CMP compliant",
    ],
    backgroundAsset: "/assets/misc/6aa28bd293cb646794fa6791_06.webp",
    overlayAsset: "/assets/misc/6aa28bf54380b28027a006cd_Ss_4.webp",
  },
];
