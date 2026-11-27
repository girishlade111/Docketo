export interface InfrastructurePanelRecord {
  id: string;
  layerLabel: string;
  title: string;
  description: string;
  diagramAsset: string;
  labelAlignment: "left" | "right";
  verificationStatus: "VERIFIED";
}

export const INFRASTRUCTURE_PANELS: InfrastructurePanelRecord[] = [
  {
    id: "differentiate",
    layerLabel: "YOUR APP",
    title: "Differentiate",
    description: "Banking built into your app. Customers built into your business.",
    diagramAsset: "/assets/infrastructure/6aa286b4d8d1f5135772bcae_Fast_.svg",
    labelAlignment: "left",
    verificationStatus: "VERIFIED",
  },
  {
    id: "integrate",
    layerLabel: "YOUR TECH",
    title: "Integrate",
    description: "Build your tech on top of our platform with a simple API.",
    diagramAsset: "/assets/infrastructure/6aa286b4d8d1f5135772bcb1_Second.svg",
    labelAlignment: "right",
    verificationStatus: "VERIFIED",
  },
  {
    id: "power",
    layerLabel: "OUR PLATFORM",
    title: "Power",
    description: "Power your offering with best-in-class banking infrastructure.",
    diagramAsset: "/assets/infrastructure/6aa286b4767f6c66cb30e839_Third_.svg",
    labelAlignment: "left",
    verificationStatus: "VERIFIED",
  },
  {
    id: "secure",
    layerLabel: "OUR BANK LICENSE",
    title: "Secure",
    description: "Protect your customer's money with our regulatory cover.",
    diagramAsset: "/assets/infrastructure/6aa286b30acd33240bf453ea_Four_.svg",
    labelAlignment: "right",
    verificationStatus: "VERIFIED",
  },
];

export const INFRASTRUCTURE_DOT_BG = "/assets/infrastructure/6aa286b40acd33240bf4541d_BG_.svg";
