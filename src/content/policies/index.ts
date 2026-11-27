export interface PolicySection {
  heading?: string;
  level?: 2 | 3 | 4 | 5 | 6;
  paragraphs?: string[];
  bullets?: string[];
}

export interface PolicyDocument {
  slug: "privacy" | "terms-conditions" | "cookies" | "eligibility";
  title: string;
  metaTitle: string;
  lastUpdated: string;
  hasDownloadPdf: boolean;
  referenceOnly: true;
  productionApproved: false;
  sections: PolicySection[];
}

export const POLICIES: Record<PolicyDocument["slug"], PolicyDocument> = {
  privacy: {
    slug: "privacy",
    title: "Privacy",
    metaTitle: "Privacy Policy - Docketo",
    lastUpdated: "Last updated: Oct 03, 2026",
    hasDownloadPdf: true,
    referenceOnly: true,
    productionApproved: false,
    sections: [
      {
        heading: "Introduction",
        level: 2,
        paragraphs: [
          "Docket (\"Docketo,\" \"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your personal data when you use our website, products, and services (together, the \"Services\"), and describes your rights in relation to that data.",
          "Docket is operated by [Legal Entity Name], a company registered in [Country] under company number [Number], with its registered office at [Address]. For the purposes of applicable data protection law, [Legal Entity Name] is the data controller of your personal data. [Add Data Protection Officer contact details if you have appointed one.]",
        ],
      },
      {
        heading: "2. Information we collect",
        level: 3,
        paragraphs: ["We may collect and process the following categories of personal data:"],
        bullets: [
          "Information you provide: such as your name, email address, phone number, company details, and any information you submit when creating an account, contacting us, or using the Services.",
          "Identity and verification data: where required for compliance, such as identity documents and information gathered during KYC or KYB checks.",
          "Transaction and account data: details relating to payments, accounts, and activity carried out through the Services.",
          "Technical data: such as IP address, device information, browser type, and usage data collected automatically when you interact with our website or products.",
          "Communications: records of your correspondence with us.",
        ],
      },
      {
        heading: "3. How we use your information",
        level: 4,
        paragraphs: ["We use your personal data to:"],
        bullets: [
          "Provide, operate, and improve the Services;",
          "Create and manage your account;",
          "Carry out identity verification and meet our legal and regulatory obligations;",
          "Process transactions and provide customer support;",
          "Communicate with you about the Services, including important updates;",
          "Detect, prevent, and address fraud, security, or technical issues;",
          "Comply with applicable laws and regulations.",
        ],
      },
      {
        heading: "4. Legal bases for processing",
        level: 5,
        paragraphs: [
          "Where applicable data protection law requires it, we rely on the following legal bases: performance of a contract with you; compliance with a legal obligation; our legitimate interests (such as improving and securing the Services); and your consent, where specifically requested. [Confirm and tailor legal bases with your advisor.]",
        ],
      },
      {
        heading: "5. How we share your information",
        level: 5,
        paragraphs: ["We may share your personal data with:"],
        bullets: [
          "Service providers who help us operate the Services, under appropriate confidentiality and data protection obligations;",
          "Financial and regulatory partners where necessary to provide the Services or meet compliance requirements;",
          "Authorities and regulators where required by law or to protect our legal rights;",
          "Third parties in connection with a business transfer, such as a merger or acquisition.",
        ],
      },
      {
        heading: "6. International transfers",
        level: 6,
        paragraphs: [
          "Where we transfer personal data outside [your jurisdiction], we take steps to ensure it is protected by appropriate safeguards, such as standard contractual clauses or equivalent measures. [Detail your actual transfer mechanisms.]",
        ],
      },
    ],
  },
  "terms-conditions": {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    metaTitle: "Terms & Conditions - Docketo",
    lastUpdated: "Last updated: Oct 03, 2026",
    hasDownloadPdf: true,
    referenceOnly: true,
    productionApproved: false,
    sections: [
      {
        heading: "Introduction",
        level: 2,
        paragraphs: [
          "Welcome to Docketo. These Terms & Conditions (\"Terms\") govern your access to and use of Docket's website, products, and services (together, the \"Services\"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use the Services.",
          "Docket is operated by [Legal Entity Name], a company registered in [Country] under company number [Number], with its registered office at [Address]. References to \"Docket,\" \"we,\" \"us,\" or \"our\" mean [Legal Entity Name]. [Include regulatory status and regulator details here if applicable.]",
        ],
      },
      {
        heading: "2. Definitions",
        level: 3,
        paragraphs: [
          "In these Terms: \"Account\" means any account you open or access through the Services; \"Customer\" or \"you\" means the person or entity using the Services; \"Content\" means any information, data, or materials made available through the Services. [Add further definitions as needed.]",
        ],
      },
      {
        heading: "3. Eligibility",
        level: 4,
        paragraphs: [
          "To use the Services, you must be at least 18 years old and have the legal capacity to enter into a binding agreement. If you are using the Services on behalf of an organisation, you confirm you have authority to bind that organisation to these Terms.",
        ],
      },
      {
        heading: "4. Your account",
        level: 5,
        paragraphs: [
          "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorised use. We may suspend or restrict access where we reasonably believe your account security has been compromised.",
        ],
      },
      {
        heading: "5. Use of the Services",
        level: 5,
        paragraphs: [
          "You agree to use the Services only for lawful purposes and in accordance with these Terms. You must not misuse the Services, attempt to gain unauthorised access, interfere with their operation, or use them in any way that breaches applicable laws or regulations.",
        ],
      },
      {
        heading: "6. Fees and payment",
        level: 5,
        paragraphs: [
          "Where fees apply, they will be set out in your plan or a separate agreement. Unless stated otherwise, fees are exclusive of applicable taxes. [Detail billing cycles, payment terms, and consequences of non-payment.]",
        ],
      },
      {
        heading: "7. Intellectual property",
        level: 6,
        paragraphs: [
          "All intellectual property rights in the Services and their content belong to Docket or our licensors. These Terms do not grant you any rights in our trademarks, logos, or other intellectual property except as necessary to use the Services.",
        ],
      },
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Cookies",
    metaTitle: "Cookie Policy - Docketo",
    lastUpdated: "Last updated: Oct 03, 2026",
    hasDownloadPdf: false,
    referenceOnly: true,
    productionApproved: false,
    sections: [
      {
        heading: "Introduction",
        level: 2,
        paragraphs: [
          "This Cookie Policy explains how Docket uses cookies and similar technologies on our website and services together, the Services. It should be read alongside our Privacy Policy.",
          "By using our Services, or by accepting cookies through our cookie banner, you agree to our use of cookies as described in this policy. You can manage or withdraw your consent at any time see Managing your preferences below.",
        ],
      },
      {
        heading: "1. What are cookies?",
        level: 3,
        paragraphs: [
          "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to improve your experience, and to provide information to site owners. Similar technologies, such as pixels, tags, and local storage, perform comparable functions, and references to \"cookies\" in this policy include these technologies.",
        ],
      },
      {
        heading: "2. Types of cookies we use",
        level: 4,
        paragraphs: [
          "Strictly necessary cookies: These are essential for the Services to function, for example enabling you to log in, navigate pages, and keep your session secure. The Services cannot work properly without them, so they cannot be switched off.",
        ],
      },
      {
        heading: "Functional cookies",
        level: 5,
        paragraphs: [
          "These remember your preferences and choices such as language or region to give you a more personalised experience.",
        ],
      },
      {
        heading: "Analytics and performance cookies",
        level: 6,
        paragraphs: [
          "These help us understand how visitors use our Services by collecting information such as which pages are visited most often. We use this to improve how the Services work. This data is typically aggregated.",
        ],
      },
      {
        heading: "Marketing cookies",
        level: 6,
        paragraphs: [
          "These may be used to deliver content relevant to you and to measure the effectiveness of our campaigns. Only include if you actually use these.",
        ],
      },
      {
        heading: "Third-party cookies",
        level: 6,
        paragraphs: [
          "Some cookies are set by third parties that provide services on our behalf, such as analytics or content delivery providers. These third parties may process your data in line with their own privacy and cookie policies, which we encourage you to review. [List your actual third-party providers here.]",
        ],
      },
    ],
  },
  eligibility: {
    slug: "eligibility",
    title: "Eligibility",
    metaTitle: "Account Eligibility Requirements - Docketo",
    lastUpdated: "Last updated: Oct 03, 2026",
    hasDownloadPdf: false,
    referenceOnly: true,
    productionApproved: false,
    sections: [
      {
        paragraphs: [
          "We're a new bank, and that means we can't support every type of business right away. There are also industries we won't work with under any circumstances. This page provides a transparent list of those business types and industries.",
          "Please be aware that these criteria are broad and non-exhaustive, and we may ultimately decide that we can’t work with your business for other reasons.",
          "We review our eligibility criteria on a regular basis and update this page with any changes. We aim to be as clear as possible so we don’t waste anyone's time, but if you're unsure about something or think your business might be an edge case, don't hesitate to contact us.",
        ],
      },
      {
        heading: "Business types",
        level: 2,
        paragraphs: [
          "You can bank with us if you are a registered company limited by shares (Ltd) based in the UK. You must have an active status on Companies House and at least one active company director listed.",
          "You must also have the correct regulatory permissions for the products and services you offer. For example, if you plan to issue e-money, you must be licensed as an electronic money institution (EMI) in the UK. We don't work with dormant companies, shell companies, or offshore entities.",
          "Right now, we also don't support:",
        ],
        bullets: [
          "Clubs or other non-registered organisations",
          "Community interest companies (CIC)",
          "Limited companies by guarantee",
          "Partnerships, including limited liability partnerships (LLP)",
          "Public limited companies (PLC)",
          "Registered societies (except credit unions)",
          "Royal Charter companies",
          "Trusts or funds",
          "Unlimited companies",
        ],
      },
      {
        heading: "Locations",
        level: 3,
        paragraphs: [
          "We may not be able to work with you if your company is based, registered or tax resident outside the UK, but this depends on what kind of products and services you are looking for. If you're outside the UK and eager to work with us, please get in touch and tell us a bit about your requirements.",
        ],
      },
      {
        heading: "Industries",
        level: 4,
        paragraphs: [
          "We will not work with you under any circumstances if your company (or your customers) operate in or have connections to these industries.",
        ],
        bullets: [
          "Adult services, including pornography",
          "Controlled drugs, including cannabidiol products",
          "Dark web activities",
          "Gambling, specifically unregistered and unregulated online gambling",
          "Gas, including petroleum, natural gas and chemicals",
          "Illegal drugs",
          "Illegal goods, including counterfeit products",
          "Mining and extractive industries, specifically involving the extraction and burning of fossil fuels",
          "Oil production and sale",
          "Online gaming, specifically games that support in-game payments and allow funds to be transferred between players",
          "Political NGOs",
          "Precious metals and stones",
          "Public administration and compulsory social security, including things like defence, immigration services, and foreign affairs",
          "Remittance, currency exchange, and money service businesses where funds can be exchanged as cash, both domestic and international",
          "Rotating savings and credit associations (ROSCAs), also known as savings circles",
          "Scrap metal",
          "Waste management",
          "Weapons manufacturing and selling",
        ],
      },
      {
        paragraphs: [
          "If your industry isn't mentioned above, you can apply to work with Docketo. If you want to try out our technology first, create a sandbox account to get instant access to our platform with no credit card or NDA required.",
        ],
      },
    ],
  },
};
