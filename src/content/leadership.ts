export interface LeadershipRecord {
  id: string;
  name: string;
  role: string;
  portraitAsset: string;
}

export const LEADERSHIP_TEAM: LeadershipRecord[] = [
  {
    id: "david-jarvis",
    name: "David Jarvis",
    role: "Founder, Chief Executive Officer",
    portraitAsset: "/assets/about-careers/6aa12ba43272f0bdc3381d68_Team_1.webp",
  },
  {
    id: "allen-rohner",
    name: "Allen Rohner",
    role: "Founder, Chief Technology Officer",
    portraitAsset: "/assets/about-careers/6aa12ba48d7c2b18e45594b9_team_02.webp",
  },
  {
    id: "phoebe-wallis",
    name: "Phoebe Wallis",
    role: "Chief Revenue Officer",
    portraitAsset: "/assets/about-careers/6aa12ba4102fa7661edc41bc_team_03.webp",
  },
  {
    id: "ed-carter",
    name: "Ed Carter",
    role: "Chief Operating Officer",
    portraitAsset: "/assets/about-careers/6aa12ba4f810c0e6c9cdaaa8_team_04.webp",
  },
  {
    id: "jenna-baker",
    name: "Jenna Baker",
    role: "Chief People Officer",
    portraitAsset: "/assets/about-careers/6aa12ba4b8aca1654c7c9b4f_team_05.webp",
  },
  {
    id: "bob-vanbreda",
    name: "Bob VanBreda",
    role: "Interim Chief Financial Officer",
    portraitAsset: "/assets/about-careers/6aa12ba444bfba1a96ab80f6_team_06.webp",
  },
];
