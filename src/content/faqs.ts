export interface FaqRecord {
  id: string;
  question: string;
  answer: string;
  referenceNote?: string;
}

export const FAQ_ICON = "/assets/brand/6a9fe1572a8174be32f150f5_Subtract.svg";

export const SHARED_FAQS: FaqRecord[] = [
  {
    id: "faq-1",
    question: "What is embedded banking, and how does it work?",
    answer:
      "Embedded banking lets you offer bank accounts, payments, and other financial services directly inside your own product, with no need to send customers to a separate provider. You connect to our platform through a simple API, and we handle the underlying banking infrastructure while you keep full ownership of the customer relationship.",
  },
  {
    id: "faq-2",
    question: "Do I need my own banking license to build with Docket?",
    answer:
      "No. Because we hold the necessary regulatory permissions, you can offer banking and payment services under our infrastructure without obtaining your own license. This lets you launch faster and stay compliant from day one.",
    referenceNote: "Template note: Confirm exact regulatory wording with compliance before public launch.",
  },
  {
    id: "faq-3",
    question: "How quickly can I integrate and go live?",
    answer:
      "Integration timelines depend on your use case, but our API is built to be developer-friendly with clear documentation, so many teams move from testing to launch in a matter of weeks rather than months.",
  },
  {
    id: "faq-4",
    question: "How do client money and safeguarding accounts keep funds protected?",
    answer:
      "Client money and safeguarding accounts keep your customers' funds separate from your operating capital, in line with regulatory requirements. This protects those funds and simplifies your reporting, reconciliation, and compliance obligations.",
    referenceNote: "Template note: Verify specifics against safeguarding documentation before public launch.",
  },
  {
    id: "faq-5",
    question: "What kinds of businesses use Docket?",
    answer:
      "Our platform supports a wide range of use cases, from lenders and payment providers to wealth managers, fintechs, and platforms building new financial products. If you want to embed accounts, payments, or compliant money management into your offering, it is likely a fit.",
  },
  {
    id: "faq-6",
    question: "How does Docket help with reconciliation and compliance?",
    answer:
      "Our embedded accounts are designed to reduce manual work by streamlining reconciliation and automating much of the reporting and compliance that typically slows teams down, so you can focus on your product instead of back-office admin.",
  },
];
