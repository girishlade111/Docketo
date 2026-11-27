export const STYLE_GUIDE_CONTENT = {
  note: "Note: Change the colors through the swatches panel. This will change all locations where the color is used on the website. You can learn more about global swatches on Webflow University.",
  swatches: [
    { label: "FFFFFF", cssValue: "#ffffff", bordered: true },
    { label: "FAFAF9", cssValue: "#fafaf9", bordered: true },
    { label: "CCCAC6", cssValue: "#cccac6", bordered: false },
    { label: "33312C", cssValue: "#33312c", bordered: false },
    { label: "191815", cssValue: "#191815", bordered: false },
    { label: "100F0D", cssValue: "#100f0d", bordered: false },
    { label: "7CF584/Green", cssValue: "#7cf584", bordered: false },
    { label: "Success/Form", cssValue: "#45e455", bordered: false },
    { label: "Error/Form", cssValue: "rgba(211, 50, 50, 0.85)", bordered: false },
  ],
  headings: [
    { role: "Heading 1 - Font size 62 px / line height 72", className: "heading-h1", sample: "Heading H1 - Aa" },
    { role: "Heading 2 - Font size 40 px / line height 48", className: "heading-h2", sample: "Heading H2 - Aa" },
    { role: "Heading 3 - Font size 32 px / line height 40", className: "heading-h3", sample: "Heading H3 - Aa Bb Cc" },
    { role: "Heading 4 - Font size 28 px / line height 36", className: "heading-h4", sample: "Heading H4 - Aa Bb Cc" },
    { role: "Heading 5 - Font size 24 px / line height 32", className: "heading-h5", sample: "Heading H5 - Aa Bb Cc Dd" },
    { role: "Heading 6 - Font size 20 px / line height 26", className: "heading-h6", sample: "Heading H6 - Aa Bb Cc Dd" },
  ],
  paragraphs: [
    {
      name: "CP Paragraph",
      meta: "Subtitle Font size 12 px / line height 20",
      className: "text-cp",
      sample:
        "Lorem ipsum dolor sit amet consectetur. Lacus iaculis placerat condimentum integer. Amet odio pretium sit arcu turpis. Quam feugiat at ullamcorper fermentum arcu.",
    },
    {
      name: "RG Paragraph",
      meta: "Subtitle Font size 16 px / line height 22",
      className: "text-rg",
      sample:
        "Lorem ipsum dolor sit amet consectetur. Lacus iaculis placerat condimentum integer. Amet odio pretium sit arcu turpis. Quam feugiat at ullamcorper fermentum arcu.",
    },
    {
      name: "Small Paragraph",
      meta: "Body Font size 14 px / line height 18",
      className: "text-sm",
      sample:
        "Lorem ipsum dolor sit amet consectetur. Lacus iaculis placerat condimentum integer. Amet odio pretium sit arcu turpis. Quam feugiat at ullamcorper fermentum arcu.",
    },
  ],
};

export const CHANGELOG_CONTENT = {
  version: "Version 1.0",
  date: "Oct 03, 2026",
  title: "Docketo HTML Webflow Template Release",
};

export const LICENSES_CONTENT = {
  intro:
    "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.",
  photography: {
    heading: "Photography",
    description:
      "All images used in the template are licensed for personal and commercial use. If you want to use some specific image, you can check the licenses and download the images for free from LinkFilm",
    linkLabel: "LinkFilm",
    linkUrl: "https://www.linkfilm.ai/",
    images: [
      { src: "/assets/misc/6aa28c93d255b280f126199b_2.webp", alt: "Licenses Image 1" },
      { src: "/assets/misc/6aa4d462dd74f803af3e3724_61f0c8cc5a3c7c2016543a0cc1d63df4_0.webp", alt: "Licenses Image 2" },
      { src: "/assets/misc/6aa28c4b26723c02fcb78a45_1st.webp", alt: "Licenses Image 3" },
      { src: "/assets/about-careers/6aa134a5f0daf588087db12d_Rectangle_52.webp", alt: "Licenses Image 4" },
      { src: "/assets/about-careers/6a9fe3182a8174be32f2ce35_LinkFilm-Image__11_1.webp", alt: "Licenses Image 5" },
      { src: "/assets/about-careers/6aa134a662337786c352cf7d_Rectangle_51.webp", alt: "Licenses Image 6" },
    ],
  },
  icons: {
    heading: "Icons",
    description:
      "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below. All icons are sourced from Iconify And Thenounproject",
    iconifyUrl: "https://iconify.design/",
    nounProjectUrl: "https://thenounproject.com/",
  },
  typography: {
    heading: "Typography",
    description:
      "This template uses General Sans and Amethysta (documented as Clash Grotesk in the original text) which you can obtain from Fontshare and Google Fonts.",
    buttons: [
      { label: "General Sans", href: "https://www.fontshare.com/?q=General+Sans", variant: "green" as const },
      { label: "Amethysta", href: "https://fonts.google.com/specimen/Amethysta?preview.script=Latn", variant: "dark" as const },
    ],
  },
};

export const UTILITY_MEDIA = {
  protectedIllustration: "/assets/utilities/6a97e0888b7091a5fa9de269_Itam.webp",
  notFoundIllustration: "/assets/utilities/6a97e0888b7091a5fa9de265_Frame.webp",
};
