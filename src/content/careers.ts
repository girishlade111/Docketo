export interface CareerValueRecord {
  index: string;
  title: string;
  description: string;
  bullets: string[];
  imageAsset: string;
}

export interface CareerRoleRecord {
  id: string;
  department: "Engineering" | "Marketing" | "Finance";
  title: string;
  location: string;
  referenceApplyUrl: string;
  productionApplyUrl: string;
}

export const CAREERS_CONTENT = {
  heroHeading: "Careers at Docket",
  heroSubtitle:
    "We're changing the future of banking, and we're looking for kind, thoughtful, resilient people to help us get there.",
  ctaLabel: "Explore Open Roles",
  photoStrip: [
    { src: "/assets/about-careers/6a9fe3182a8174be32f2ce35_LinkFilm-Image__11_1.webp", alt: "Team collaboration" },
    { src: "/assets/about-careers/6a9fe3182a8174be32f2ce23_Carer_.webp", alt: "Product engineering meeting" },
    { src: "/assets/about-careers/6a9fe31841d07c1bd72742b2_LinkFilm-Image__12_1.webp", alt: "Focused workspace" },
  ],
  highlights: [
    {
      title: "Our culture",
      description: "Our culture is our most valuable asset. Learn more about our core values and behaviours.",
      icon: "/assets/misc/6a9fe45eb9d62c1a54b0ca46_0.svg",
    },
    {
      title: "Where we hire",
      description: "Outside the UK, we can currently hire people based in Germany, Ireland, and Sweden.",
      icon: "/assets/misc/6a9fe4d58ff20741e1440dab_Group.svg",
    },
  ],
  valuesHeading: "Our values are a commitment to our customers and a signal of the culture we're building.",
  values: [
    {
      index: "01",
      title: "Transparency",
      description: "We empower our people to do their best work by being as transparent as we can internally.",
      bullets: [
        "No hidden fees, no surprises, just clear pricing and honest answers.",
        "We tell you exactly how things work, so you always know where you stand.",
        "Clear Pricing, open communication, and no fine print.",
        "What you see is what you get, always.",
      ],
      imageAsset: "/assets/misc/6a9fe7e62e2c16a2df201663_1.webp",
    },
    {
      index: "02",
      title: "Flexibility",
      description: "We care about your insights and your impact, not how many hours you spend at your desk.",
      bullets: [
        "Build the way you want, with infrastructure that adapts to your needs.",
        "One platform, endless use cases shaped around how you work.",
        "From startup to scale, our products flex to fit your business.",
        "Integrate anywhere, build anything on your terms.",
      ],
      imageAsset: "/assets/misc/6a9fe81734447b477d4d3f5d_Group_180.webp",
    },
    {
      index: "03",
      title: "Trust",
      description: "We assume everyone who works here will act in the best interest of the company by default.",
      bullets: [
        "Bank-grade security and full compliance, built in from day one.",
        "Your funds protected, your data secure, your business covered.",
        "Regulated, reliable, and built to keep your customers' money safe.",
        "The dependable foundation your customers can bank on.",
      ],
      imageAsset: "/assets/misc/6a9fe8178ff20741e146a81e_3.webp",
    },
  ] as CareerValueRecord[],
  benefitsHeading: "Benefits & Perks",
  benefitsGroups: [
    {
      title: "For Employees",
      items: [
        "Comprehensive health, dental, and vision insurance",
        "Mental health support",
        "Company sponsored retirement plan",
        "Daily lunch in-office (in SF and NY)",
      ],
    },
    {
      title: "Family and Time Off",
      items: [
        "18 weeks paid parental leave",
        "Flexible time off",
        "Fertility benefits",
        "Sabbatical after 4 years of service",
      ],
    },
    {
      title: "Culture and Personal Development",
      items: [
        "Annual learning & development stipend",
        "AI skill development and enablement",
        "Personalized Funko Pop on 3-year anniversary",
        "\"Raising The Bar\" professional development program",
      ],
    },
  ],
  jobsHeading: "Join our team.",
  mapPinIcon: "/assets/misc/6aa0078361dc79fb57968229_map-pin.svg",
  roles: [
    {
      id: "eng-manager",
      department: "Engineering",
      title: "Engineering Manager",
      location: "London or remote within the UK",
      referenceApplyUrl: "https://www.linkfilm.ai/",
      productionApplyUrl: "/contact?role=Engineering+Manager",
    },
    {
      id: "software-engineer",
      department: "Engineering",
      title: "Software Engineer",
      location: "London or remote within the UK",
      referenceApplyUrl: "https://www.linkfilm.ai/",
      productionApplyUrl: "/contact?role=Software+Engineer",
    },
    {
      id: "marketing-associate",
      department: "Marketing",
      title: "Marketing Associate",
      location: "London or remote within the UK",
      referenceApplyUrl: "https://www.linkfilm.ai/",
      productionApplyUrl: "/contact?role=Marketing+Associate",
    },
    {
      id: "treasury-manager",
      department: "Finance",
      title: "Treasury Manager",
      location: "London or remote within the UK",
      referenceApplyUrl: "https://www.linkfilm.ai/",
      productionApplyUrl: "/contact?role=Treasury+Manager",
    },
  ] as CareerRoleRecord[],
};
