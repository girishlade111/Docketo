export interface ArticleSectionBlock {
  heading?: string;
  paragraphs: string[];
  blockquote?: string;
}

export interface ArticleRecord {
  id: string;
  order: number;
  slug: string;
  title: string;
  categoryId: "product" | "compliance" | "company" | "guides";
  categoryLabel: "Product" | "Compliance" | "Company" | "Guides";
  publishedAt: string;
  excerpt: string;
  coverAsset: string;
  sections: ArticleSectionBlock[];
  relatedHeading: string;
  relatedSlugs: string[];
}

const DEFAULT_RECON_EXCERPT =
  "Reconciliation is one of those problems that stays invisible until it isn't. When you're processing a handful of payments a day, matching money in to money owed is a manageable chore.";

export const ARTICLES: ArticleRecord[] = [
  {
    id: "post-1",
    order: 1,
    slug: "how-embedded-bank-accounts-simplify-payment-reconciliation",
    title: "How embedded bank accounts simplify payment reconciliation",
    categoryId: "product",
    categoryLabel: "Product",
    publishedAt: "January 15, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fdd5ddd63f5869745221_2.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
      "why-we-built-business-banking-for-founders-by-founders",
      "shrinking-the-manual-review-queue-how-automated-decisions-free-up-your-team",
    ],
    sections: [
      {
        paragraphs: [
          "Payment reconciliation can become complicated when a business handles transactions across multiple accounts, payment providers, and internal systems. Embedded bank accounts offer a more structured way to connect incoming and outgoing payments with the customers and transactions they belong to.",
        ],
      },
      {
        heading: "The challenge of traditional reconciliation",
        paragraphs: [
          "Many businesses still rely on spreadsheets, exported bank statements, and manual checks to match payments. As transaction volumes increase, these processes become slower and more prone to errors. Finance teams spend valuable time investigating unmatched payments instead of focusing on reporting and business growth.",
        ],
      },
      {
        heading: "How embedded accounts improve visibility",
        paragraphs: [
          "Dedicated bank accounts can help businesses associate transactions with specific customers, projects, or payment flows. When account data is connected to internal systems, teams can identify where funds originated and which transaction they relate to more efficiently.",
        ],
      },
      {
        heading: "Automating transaction matching",
        paragraphs: [
          "With a suitable banking API integration, transaction data can flow directly into a company's operational systems. Businesses can use account identifiers, transaction references, and payment amounts to automate matching rules and flag exceptions that require human review.",
        ],
      },
      {
        heading: "Reducing errors and operational workload",
        paragraphs: [
          "A more connected reconciliation process reduces repetitive data entry and makes discrepancies easier to investigate. Teams can spend less time gathering information from different sources and more time resolving the exceptions that genuinely need attention.",
        ],
      },
      {
        heading: "Getting started with a better workflow",
        paragraphs: [
          "Start by mapping your current payment process and identifying where manual matching creates delays. Then evaluate how dedicated accounts, transaction-level data, and API integrations could improve visibility. A phased implementation allows teams to test the workflow before expanding it across the business.",
        ],
      },
    ],
  },
  {
    id: "post-2",
    order: 2,
    slug: "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
    title: "KYC and KYB, automated: a faster path to onboarding the right customers",
    categoryId: "compliance",
    categoryLabel: "Compliance",
    publishedAt: "February 26, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fddf2c01025898197b57_3.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "how-embedded-bank-accounts-simplify-payment-reconciliation",
      "why-we-built-business-banking-for-founders-by-founders",
      "shrinking-the-manual-review-queue-how-automated-decisions-free-up-your-team",
    ],
    sections: [
      {
        paragraphs: [
          "Customer onboarding is a critical part of building a financial product. Businesses must understand who their customers are, verify relevant information, and meet applicable compliance requirements without creating unnecessary friction. Automation can help make this process more consistent and efficient.",
        ],
      },
      {
        heading: "Understanding KYC and KYB",
        paragraphs: [
          "Know Your Customer (KYC) generally focuses on verifying individual customers, while Know Your Business (KYB) focuses on verifying companies and their ownership or control structures. The exact checks required depend on the business model, jurisdiction, and applicable regulations.",
        ],
      },
      {
        heading: "Why manual onboarding creates delays",
        paragraphs: [
          "Manual document collection, repeated data entry, and disconnected verification tools can slow down applications. Customers may need to submit information multiple times, while operations teams spend hours reviewing records and following up on missing details.",
        ],
      },
      {
        heading: "Automating routine verification steps",
        paragraphs: [
          "Automated onboarding workflows can collect information, validate required fields, check documents through appropriate verification providers, and route applications based on defined rules. Straightforward cases may move through the process faster, while incomplete or higher-risk applications can be escalated for additional review.",
        ],
      },
      {
        heading: "Keeping compliance and human oversight together",
        paragraphs: [
          "Automation should support compliance teams rather than replace accountability. Businesses need clear decision rules, secure data handling, audit trails, and appropriate human review for exceptions. Verification requirements should be designed around the applicable regulatory framework.",
        ],
      },
      {
        heading: "Building a smoother onboarding experience",
        paragraphs: [
          "Begin by documenting the information your business needs and identifying repetitive tasks. Integrate suitable verification services, test exception handling, and monitor completion rates and review times. The goal is to make onboarding easier for legitimate customers while maintaining appropriate safeguards.",
        ],
      },
    ],
  },
  {
    id: "post-3",
    order: 3,
    slug: "why-we-built-business-banking-for-founders-by-founders",
    title: "Why we built business banking for founders, by founders",
    categoryId: "company",
    categoryLabel: "Company",
    publishedAt: "February 26, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fdeb82d9108ae356721c_4.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "how-embedded-bank-accounts-simplify-payment-reconciliation",
      "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
      "shrinking-the-manual-review-queue-how-automated-decisions-free-up-your-team",
    ],
    sections: [
      {
        paragraphs: [
          "Founders often spend their days solving customer problems, developing products, and building teams. Financial operations should support that work rather than become another source of complexity. Business banking infrastructure can play an important role in helping growing companies operate with greater clarity.",
        ],
      },
      {
        heading: "Founders need more than a bank account",
        paragraphs: [
          "A growing business may need to receive payments, manage operating expenses, reconcile transactions, and provide financial services within its own product. When these activities rely on disconnected systems, teams face additional administrative work and limited visibility.",
        ],
      },
      {
        heading: "Understanding the everyday operational challenges",
        paragraphs: [
          "Small teams rarely have unlimited time or resources to manage financial workflows manually. Repeated data entry, slow processes, and fragmented reporting can distract founders from product development and customer relationships.",
        ],
      },
      {
        heading: "Building around real product needs",
        paragraphs: [
          "Financial infrastructure should fit the way a business operates. API access, flexible account structures, and connected transaction data can help companies design financial experiences around their customers instead of forcing every workflow into a separate system.",
        ],
      },
      {
        heading: "Making complex infrastructure easier to use",
        paragraphs: [
          "The best infrastructure reduces unnecessary complexity for the people building on top of it. Clear documentation, reliable integration patterns, and practical testing environments help development teams understand how financial capabilities fit into their products.",
        ],
      },
      {
        heading: "Creating room for sustainable growth",
        paragraphs: [
          "Founders should evaluate financial infrastructure based on reliability, operational fit, compliance requirements, and the ability to scale. Choosing a suitable foundation early can reduce the need to rebuild essential workflows as transaction volumes and customer expectations grow.",
        ],
      },
    ],
  },
  {
    id: "post-4",
    order: 4,
    slug: "shrinking-the-manual-review-queue-how-automated-decisions-free-up-your-team",
    title: "Shrinking the manual review queue: how automated decisions free up your team",
    categoryId: "product",
    categoryLabel: "Product",
    publishedAt: "February 15, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fe05e1fc3810f99470e6_5.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "how-embedded-bank-accounts-simplify-payment-reconciliation",
      "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
      "why-we-built-business-banking-for-founders-by-founders",
    ],
    sections: [
      {
        paragraphs: [
          "Manual review is an important part of many financial operations, but not every application or transaction needs the same level of investigation. Well-designed automation can help teams prioritize their attention and process routine cases more efficiently.",
        ],
      },
      {
        heading: "Why review queues keep growing",
        paragraphs: [
          "Review backlogs often develop when teams rely on manual checks for every application, inconsistent decision criteria, or disconnected information sources. As volumes increase, reviewers may struggle to distinguish straightforward cases from those that require deeper investigation.",
        ],
      },
      {
        heading: "Defining clear decision rules",
        paragraphs: [
          "A reliable automated workflow starts with documented criteria. Businesses can define which information is required, which conditions trigger additional checks, and which cases must be reviewed by an authorized person. Clear rules help make decisions more consistent and explainable.",
        ],
      },
      {
        heading: "Routing routine cases automatically",
        paragraphs: [
          "Automation can validate information, identify missing fields, compare submitted data against defined criteria, and direct cases to the appropriate next step. Applications that meet established requirements may proceed, while exceptions are routed to the relevant review team.",
        ],
      },
      {
        heading: "Maintaining oversight and accountability",
        paragraphs: [
          "Automated decisions need monitoring. Teams should track false positives, missed exceptions, processing times, and changes in outcomes. Sensitive or high-impact decisions may require additional human review, depending on the context and applicable regulations.",
        ],
      },
      {
        heading: "Measuring improvements over time",
        paragraphs: [
          "Establish a baseline for queue size, average review time, and the proportion of cases requiring manual intervention. Introduce automation in stages, review the results, and refine the rules. This helps teams improve efficiency without sacrificing quality or control.",
        ],
      },
    ],
  },
  {
    id: "post-5",
    order: 5,
    slug: "giving-every-customer-their-own-bank-account-use-cases-for-embedded-banking",
    title: "Giving every customer their own bank account: use cases for embedded banking",
    categoryId: "compliance",
    categoryLabel: "Compliance",
    publishedAt: "February 4, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fe11fddf0ff41dabd1dd_6.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "how-embedded-bank-accounts-simplify-payment-reconciliation",
      "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
      "why-we-built-business-banking-for-founders-by-founders",
    ],
    sections: [
      {
        paragraphs: [
          "Businesses that manage money for multiple customers often need a clear way to identify incoming payments and organize financial activity. Dedicated or individually assigned bank accounts, where supported by the banking provider, can help create a more structured experience within a digital product.",
        ],
      },
      {
        heading: "What individual customer accounts mean",
        paragraphs: [
          "An embedded banking product can allow a business to offer account functionality directly within its application through an integration with a banking infrastructure provider. The available account types, ownership arrangements, and permitted uses depend on the provider's product and regulatory framework.",
        ],
      },
      {
        heading: "Simplifying incoming payments",
        paragraphs: [
          "When a customer has an assigned account or unique payment details, incoming funds can be easier to associate with that customer. This can reduce reliance on manual references and help operations teams identify payments more efficiently.",
        ],
      },
      {
        heading: "Supporting different business models",
        paragraphs: [
          "Individual account structures may be useful for payment platforms, lending businesses, savings applications, and marketplaces. Each use case has different requirements for receiving funds, allocating balances, processing payouts, and maintaining transaction records.",
        ],
      },
      {
        heading: "Improving reconciliation and customer visibility",
        paragraphs: [
          "Connecting account activity with a company's internal systems can provide a clearer view of payments and balances. Automated transaction feeds can also help teams identify exceptions and keep customer-facing information more consistent with recorded activity.",
        ],
      },
      {
        heading: "Planning a responsible implementation",
        paragraphs: [
          "Before introducing dedicated accounts, evaluate eligibility requirements, account structures, customer verification, safeguarding obligations, and reporting needs. Work closely with your infrastructure provider to confirm which features are supported and how funds are handled.",
        ],
      },
    ],
  },
  {
    id: "post-6",
    order: 6,
    slug: "building-on-our-api-a-developers-guide-to-going-live-in-weeks",
    title: "Building on our API: a developer's guide to going live in weeks",
    categoryId: "guides",
    categoryLabel: "Guides",
    publishedAt: "February 24, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fe1b22e89633ca0d3f74_7.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "how-embedded-bank-accounts-simplify-payment-reconciliation",
      "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
      "why-we-built-business-banking-for-founders-by-founders",
    ],
    sections: [
      {
        paragraphs: [
          "Integrating financial services into an application can involve account creation, transaction processing, customer verification, and ongoing monitoring. A structured API implementation helps development teams understand these requirements and move from initial testing toward a production-ready integration.",
        ],
      },
      {
        heading: "Start with the right use case",
        paragraphs: [
          "Before writing code, define the customer journey and the financial capabilities your product needs. Identify which accounts, payment flows, verification steps, and reporting features are required. A clear scope helps avoid unnecessary integration work.",
        ],
      },
      {
        heading: "Explore the documentation and sandbox",
        paragraphs: [
          "Review the API documentation, authentication requirements, available endpoints, and example requests. Use a sandbox environment, when available, to understand the expected request and response formats before working with live financial data.",
        ],
      },
      {
        heading: "Build a secure integration",
        paragraphs: [
          "Keep credentials on the server side, validate incoming data, and handle errors explicitly. Use appropriate access controls, request validation, and secure logging. Where supported, idempotency controls and webhook signature verification can help prevent duplicate processing and protect event handling.",
        ],
      },
      {
        heading: "Test the complete transaction lifecycle",
        paragraphs: [
          "Test successful requests, invalid inputs, network failures, duplicate events, and incomplete workflows. Verify how your application responds when an operation fails or requires additional review. Testing should cover both technical behavior and the experience presented to customers.",
        ],
      },
      {
        heading: "Prepare for production launch",
        paragraphs: [
          "Before going live, confirm production access, monitoring, incident procedures, and applicable compliance requirements. Start with a controlled rollout, review transaction outcomes, and address issues before increasing usage. The timeline depends on the complexity of your use case and the required approvals.",
        ],
      },
    ],
  },
  {
    id: "post-7",
    order: 7,
    slug: "from-remittance-to-banking-how-africhange-expanded-with-docket",
    title: "From remittance to banking: how Africhange expanded with Docket",
    categoryId: "guides",
    categoryLabel: "Guides",
    publishedAt: "January 12, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fe27d22676da0ea480c4_8.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "how-embedded-bank-accounts-simplify-payment-reconciliation",
      "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
      "why-we-built-business-banking-for-founders-by-founders",
    ],
    sections: [
      {
        paragraphs: [
          "As a financial services business grows, its infrastructure needs can evolve beyond its original product. A remittance-focused service may begin exploring broader account functionality, additional payment experiences, and more integrated financial services as customer expectations change.",
        ],
      },
      {
        heading: "Understanding the needs of remittance customers",
        paragraphs: [
          "Remittance customers often want a convenient way to move money across borders and understand the status of their transactions. Businesses serving these customers must balance usability with reliable payment processing, clear communication, and applicable verification requirements.",
        ],
      },
      {
        heading: "Recognizing opportunities beyond transfers",
        paragraphs: [
          "As customer relationships deepen, a financial platform may identify demand for additional services. Depending on its strategy and regulatory permissions, this could include account functionality, more flexible ways to receive funds, or other financial features that complement its existing offering.",
        ],
      },
      {
        heading: "Connecting new services through infrastructure",
        paragraphs: [
          "Banking APIs can help eligible businesses integrate account-related functionality into their products. Rather than building every component from scratch, a company can evaluate infrastructure partners that provide the capabilities, documentation, and operational support needed for its intended use case.",
        ],
      },
      {
        heading: "Managing expansion responsibly",
        paragraphs: [
          "Moving into new financial services requires more than technical integration. Businesses must assess customer eligibility, compliance responsibilities, payment flows, operational support, and how funds are held and transferred. Each new feature should be validated against the provider's capabilities and applicable rules.",
        ],
      },
      {
        heading: "Planning the next stage of growth",
        paragraphs: [
          "Companies considering expansion should start with customer needs and a clearly defined business case. Pilot new functionality, measure adoption and operational performance, and use the results to guide further investment. A phased approach can help reduce complexity while the business develops its broader offering.",
        ],
        blockquote:
          "Note: Confirm the specific Africhange and Docket partnership details and outcomes before publishing this as a factual customer case study.",
      },
    ],
  },
  {
    id: "post-8",
    order: 8,
    slug: "what-the-new-120-000-fscs-limit-means-for-your-customers",
    title: "What the new $120,000 FSCS limit means for your customers",
    categoryId: "company",
    categoryLabel: "Company",
    publishedAt: "February 24, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fe34e5fb165b8f163f50_9.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "how-embedded-bank-accounts-simplify-payment-reconciliation",
      "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
      "why-we-built-business-banking-for-founders-by-founders",
    ],
    sections: [
      {
        paragraphs: [
          "Deposit protection is an important consideration for customers choosing where to hold their money. Changes to protection limits can affect how customers understand their coverage, while financial platforms need to communicate the applicable rules clearly and accurately.",
        ],
      },
      {
        heading: "Understanding deposit protection",
        paragraphs: [
          "The Financial Services Compensation Scheme (FSCS) protects eligible deposits with authorised institutions when a covered institution fails, subject to applicable rules and limits. Eligibility depends on factors such as the type of deposit, the institution involved, and the customer's circumstances.",
        ],
      },
      {
        heading: "What a higher protection limit can mean",
        paragraphs: [
          "A higher limit can increase the amount of eligible deposits protected for customers who meet the scheme's requirements. However, the limit alone does not determine whether every account, financial product, or balance is covered.",
        ],
      },
      {
        heading: "Understanding how accounts are structured",
        paragraphs: [
          "Customers using financial applications may not always deposit money directly with the company whose app they use. The underlying banking institution, legal account structure, and arrangements for holding funds can affect which protections apply.",
        ],
      },
      {
        heading: "Communicating coverage without confusion",
        paragraphs: [
          "Financial service providers should explain which institution holds the deposit, whether the customer is eligible for protection, and what conditions or exclusions may apply. Clear explanations help customers distinguish deposit protection from other arrangements, such as safeguarding.",
        ],
      },
      {
        heading: "Helping customers make informed decisions",
        paragraphs: [
          "Review the relevant FSCS guidance and your banking partner's documentation before making claims about protection. Confirm the effective date, applicable limit, and account eligibility, and update customer-facing materials whenever the rules or arrangements change.",
        ],
        blockquote:
          "Important: Verify the £120,000 figure and its effective date against official FSCS guidance before publishing. Do not present it as a confirmed current limit without checking.",
      },
    ],
  },
  {
    id: "post-9",
    order: 9,
    slug: "safeguarding-vs-client-money-accounts-which-does-your-business-need",
    title: "Safeguarding vs. client money accounts: which does your business need?",
    categoryId: "compliance",
    categoryLabel: "Compliance",
    publishedAt: "March 2, 2026",
    excerpt: DEFAULT_RECON_EXCERPT,
    coverAsset: "/assets/articles/6ad2fe3f08ca202ff5457def_0.png",
    relatedHeading: "More Articles",
    relatedSlugs: [
      "how-embedded-bank-accounts-simplify-payment-reconciliation",
      "kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers",
      "why-we-built-business-banking-for-founders-by-founders",
    ],
    sections: [
      {
        paragraphs: [
          "Businesses handling money on behalf of customers need to understand how those funds should be held, protected, and reported. Safeguarding and client money arrangements may serve different purposes, and choosing the appropriate structure requires careful consideration of the business model and applicable regulations.",
        ],
      },
      {
        heading: "What safeguarding arrangements are designed to do",
        paragraphs: [
          "Safeguarding requirements may apply to certain regulated payment and electronic money businesses. Depending on the applicable rules, firms may need to keep relevant customer funds separate from their own operational money or use another permitted safeguarding method.",
        ],
      },
      {
        heading: "Understanding client money accounts",
        paragraphs: [
          "Client money arrangements are used in certain regulated activities where a business holds money on behalf of clients. The relevant rules determine how the money must be held, recorded, and protected, including any applicable requirements for account structures and reconciliation.",
        ],
      },
      {
        heading: "Key differences between the arrangements",
        paragraphs: [
          "Safeguarding and client money requirements are not interchangeable. The appropriate framework depends on the type of regulated activity, the legal relationship with customers, and the rules governing the business. Similar-looking account structures do not necessarily provide the same legal protections.",
        ],
      },
      {
        heading: "Choosing the right financial infrastructure",
        paragraphs: [
          "Before selecting an account solution, identify the permissions your business operates under and the responsibilities attached to the funds you handle. Consult your compliance team and banking provider to confirm account eligibility, segregation arrangements, reconciliation procedures, and reporting obligations.",
        ],
      },
      {
        heading: "Building robust controls from day one",
        paragraphs: [
          "Document how funds move through your business, establish regular reconciliation, maintain accurate records, and define procedures for discrepancies. Review the arrangement whenever your product, customer base, or regulatory obligations change. Specialist legal or compliance advice may be necessary before launch.",
        ],
      },
    ],
  },
];
