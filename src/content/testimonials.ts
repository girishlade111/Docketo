export interface TestimonialRecord {
  id: string;
  quote: string;
  name: string;
  role: string;
  portraitAsset: string;
}

export const TESTIMONIAL_ARROWS = {
  prev: "/assets/testimonials/6a9fdc88983dc258ee9692e4_Vector.svg",
  next: "/assets/testimonials/6a9fdc888fc86088ef8f6cbe_2.svg",
};

export const TESTIMONIALS: TestimonialRecord[] = [
  {
    id: "sarah-mitchell",
    quote:
      "“We embedded banking directly into our product and finally own the customer relationship end to end. Retention is up and our team spends far less time on back-office headaches.”",
    name: "Sarah Mitchell",
    role: "Founder & CEO, Loop Payments",
    portraitAsset: "/assets/testimonials/6a9fda900758034b7333addf_Rectangle_16.webp",
  },
  {
    id: "priya-anand",
    quote:
      "\"The API was genuinely simple to build on. We layered our own tech on top and scaled without ever worrying about the infrastructure underneath.\"",
    name: "Priya Anand",
    role: "VP of Engineering, Bright Lending",
    portraitAsset: "/assets/testimonials/6a9fda902cc984feaa2cba89_Rectangle_17.webp",
  },
  {
    id: "david-chen",
    quote:
      "\"Onboarding used to take us weeks. Now clients are up and running in days, fully compliant, with reconciliation that just works. It's changed how we operate.\"",
    name: "David Chen",
    role: "Chief Operating Officer, Meridian Wealth",
    portraitAsset: "/assets/testimonials/6a9fda905a39433fe60621c9_Rectangle_18.webp",
  },
];
