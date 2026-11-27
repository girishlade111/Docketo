export interface CustomerStoryRecord {
  id: string;
  company: string;
  headline: string;
  backgroundAsset: string;
  logoAsset: string;
  videoUrl: string;
}

export const STORY_PLAY_ICON = "/assets/misc/6aa4d11a9365cab3f810b390_Vector.svg";

export const CUSTOMER_STORIES: CustomerStoryRecord[] = [
  {
    id: "prosper",
    company: "Prosper",
    headline: "How Prosper removed payment complexity with Docket embedded bank accounts",
    backgroundAsset: "/assets/misc/6aa4d462dd74f803af3e3724_61f0c8cc5a3c7c2016543a0cc1d63df4_0.webp",
    logoAsset: "/assets/misc/6aa4d600117cf2fc8cea8a2a_wehite_2.svg",
    videoUrl: "https://www.youtube.com/watch?v=LyS9bT-BvEY",
  },
  {
    id: "rettspay",
    company: "RettsPay",
    headline: "How Docket client money accounts helped RettsPay meet compliance",
    backgroundAsset: "/assets/misc/6aa4d461125e7d701f6632b8_1.webp",
    logoAsset: "/assets/misc/6aa4d60067c9f6de9833e693_whte_02.svg",
    videoUrl: "https://www.youtube.com/watch?v=LyS9bT-BvEY",
  },
  {
    id: "africhange",
    company: "Africhange",
    headline: "Africhange broadens its offering with UK bank accounts, powered by Docketo",
    backgroundAsset: "/assets/misc/6aa4d462dd74f803af3e3724_61f0c8cc5a3c7c2016543a0cc1d63df4_0.webp",
    logoAsset: "/assets/misc/6aa4d60074020678a589c723_white_02.svg",
    videoUrl: "https://www.youtube.com/watch?v=LyS9bT-BvEY",
  },
];
