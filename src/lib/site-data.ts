import {
  Home,
  ScrollText,
  HeartHandshake,
  FileCheck2,
  Briefcase,
  Gavel,
  Scale,
  ShieldCheck,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export const FIRM = {
  tradingName: "Yolanda Matwa Attorneys",
  legalName: "Matwa Nongogo Incorporated",
  tagline: "Committed to Helping Our Clients Succeed",
  secondaryTagline: "Professional and Experienced Conveyancing Attorneys",
  eyebrow: "Attorneys · Notaries · Conveyancers",
  phone: "012 992 5308",
  phoneIntl: "+27129925308",
  email: "info@yminc.co.za",
  address: {
    line1: "Pegasus Building 1, 210 Amarand Avenue",
    line2: "Menlyn Maine, Pretoria",
    line3: "0181, Gauteng, South Africa",
  },
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday – Sunday", time: "Closed" },
  ],
  facebook:
    "https://www.facebook.com/p/Yolanda-Matwa-Attorneys-61560226510063/",
  whatsapp: "27129925308",
  mapsEmbed:
    "https://www.google.com/maps?q=Pegasus+Building,+210+Amarand+Avenue,+Menlyn+Maine,+Pretoria&output=embed",
  mapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=Pegasus+Building+1,+210+Amarand+Avenue,+Menlyn+Maine,+Pretoria",
};

export const TRUST_MARKERS = [
  { label: "Admitted Attorney", value: "since 2013" },
  { label: "Notary & Conveyancer", value: "of the High Court, since 2019" },
  { label: "Former Competition Commission", value: "Investigator" },
  { label: "Menlyn Maine", value: "Pretoria East" },
];

export const CREDENTIALS = [
  {
    year: "2012",
    title: "Certificate in Tax Law",
    issuer: "University of South Africa",
  },
  {
    year: "2013",
    title: "Admitted Attorney",
    issuer: "High Court of South Africa",
  },
  {
    year: "2016",
    title: "Certificate in Competition Law",
    issuer: "University of Pretoria",
  },
  {
    year: "2019",
    title: "Notary & Conveyancer",
    issuer: "High Court of South Africa",
  },
  {
    year: "In progress",
    title: "LLM in Taxation",
    issuer: "University of KwaZulu-Natal",
  },
];

export const FOUNDER_BIO = {
  name: "Yolanda Okharedia",
  maiden: "née Matwa",
  title: "Attorney, Notary & Conveyancer — Founder",
  intro:
    "Mrs. Yolanda Okharedia has experience in conveyancing and notarial services such as the transferring of houses, registration of antenuptial contracts, drafting of agreements, registration of trusts and drafting of wills.",
  ccsa:
    "In addition, she has extensive experience in competition law that she obtained during her employ at the Competition Commission of South Africa (CCSA). During this time, she investigated cartel cases, conducted dawn raids, negotiated settlement agreements and appeared at the Competition Tribunal.",
  mergers:
    "She also analysed the competition law and public interest impact of mergers and acquisitions, including drafting conditions for mergers that had been approved with conditions, assessing compliance on conditional mergers, and investigating complaints where there had been non-compliance with conditions imposed on mergers.",
  prior:
    "Prior to joining the CCSA, Mrs Okharedia was in practice wherein she obtained experience in motor vehicle accident claims, litigation, and drafting business rescue and liquidation applications.",
  pullQuote:
    "Unexpected legal bills can be incredibly frustrating. It can also erode trust in our relationship. So, when it comes to pricing, we are transparent.",
};

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  featured?: boolean;
  covers: string[];
  approach: string;
  prepare: string[];
  accent: "navy" | "gold" | "sage";
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "conveyancing",
    title: "Conveyancing & Property Transfers",
    shortTitle: "Conveyancing",
    icon: Home,
    tagline: "The anchor of our practice.",
    description:
      "Residential and commercial property transfers and registrations handled end-to-end — from lodgement to final registration at the Deeds Office.",
    featured: true,
    accent: "gold",
    covers: [
      "Residential property transfers (purchases & sales)",
      "Commercial property transfers and registrations",
      "Bond registrations and bond cancellations",
      "Transfer duty submissions and SARS clearance",
      "Title deed amendments and endorsements",
      "Sectional title registrations",
    ],
    approach:
      "Conveyancing is the anchor of our practice. We manage the full transfer lifecycle with the rigour you would expect from someone who once investigated cartel cases at the Competition Commission — every lodgement, every clearance certificate, every rate figure checked against the source. You receive clear progress updates and transparent fee quotes before work begins, so there are no surprises at registration.",
    prepare: [
      "A copy of the signed Offer to Purchase / Agreement of Sale",
      "Your South African ID document (or passport for non-residents)",
      "Proof of address (utility bill, not older than 3 months)",
      "Bond grant letter from your bank (if financed)",
      "Rates account number for the property (if available)",
    ],
  },
  {
    slug: "wills-estates",
    title: "Wills & Estate Planning",
    shortTitle: "Wills & Estates",
    icon: ScrollText,
    tagline: "Clarity for the people you love most.",
    description:
      "Drafting of wills and structured estate planning that protects your wishes and minimises friction for the family you leave behind.",
    accent: "sage",
    covers: [
      "Drafting of wills and testaments",
      "Estate planning and structuring",
      "Registration of trusts",
      "Living wills and advance directives",
      "Codices and amendments to existing wills",
      "Guardianship nominations for minor children",
    ],
    approach:
      "A will is the most personal legal document you will ever sign. We take the time to understand your family structure, your assets, and your wishes — then draft language that leaves no room for ambiguity. Our tax-law grounding (UNISA certificate, LLM in Taxation in progress) means we also flag the structural issues most basic wills miss.",
    prepare: [
      "Your South African ID document",
      "A list of your assets and approximate values (property, accounts, policies)",
      "Full names and ID numbers of intended beneficiaries",
      "Names and details of your chosen executor (or ask us to act)",
      "Guardian details, if you have minor children",
    ],
  },
  {
    slug: "antenuptial-contracts",
    title: "Antenuptial & Postnuptial Contracts",
    shortTitle: "Antenuptial Contracts",
    icon: HeartHandshake,
    tagline: "Fair foundations for a life together.",
    description:
      "Drafting and registration of antenuptial and postnuptial contracts, notarised and registered correctly the first time.",
    accent: "gold",
    covers: [
      "Antenuptial contracts (with or without accrual)",
      "Postnuptial contracts",
      "Notarial registration at the Deeds Office",
      "Asset and accrual structuring advice",
      "Variation of marital property regimes",
      "Drafting of cohabitation agreements",
    ],
    approach:
      "As a Notary of the High Court, Yolanda is one of the few practitioners legally empowered to register antenuptial contracts. We explain accrual in plain language, help you choose the structure that genuinely fits your circumstances, and ensure the contract is notarised and registered — not merely signed.",
    prepare: [
      "Both parties' South African ID documents",
      "Proposed wedding date (the ANC must be signed before the marriage)",
      "A list of assets each party brings into the marriage",
      "Details of any existing trusts or business interests",
      "Whether you wish to include or exclude accrual",
    ],
  },
  {
    slug: "deceased-estates",
    title: "Deceased Estate Administration",
    shortTitle: "Deceased Estates",
    icon: FileCheck2,
    tagline: "Compassionate, competent administration.",
    description:
      "Full administration of deceased estates — from reporting the estate to the Master, through to final distribution and winding-up.",
    accent: "sage",
    covers: [
      "Reporting the estate to the Master of the High Court",
      "Appointment of executors and representatives",
      "Drafting and lodging the Liquidation & Distribution account",
      "SARS estate tax compliance and clearance",
      "Distribution to heirs and beneficiaries",
      "Winding-up of trusts within the estate",
    ],
    approach:
      "Losing a loved one is hard enough without navigating the Master's Office alone. We handle the full administration — reporting, the L&D account, SARS compliance, distribution — with quiet competence and regular, plain-language updates. Our estate-planning and tax background means we catch the issues that delay estates, before they delay yours.",
    prepare: [
      "The original will (if one exists)",
      "The deceased's South African ID and death certificate",
      "A list of the deceased's assets and liabilities",
      "Details of all beneficiaries and next of kin",
      "Bank statements and bond account details (where applicable)",
    ],
  },
  {
    slug: "commercial-contracts",
    title: "Commercial Contracts",
    shortTitle: "Commercial Contracts",
    icon: Briefcase,
    tagline: "Agreements that hold under pressure.",
    description:
      "Drafting and review of commercial contracts, lease agreements and employment contracts — built on a competition-law foundation.",
    accent: "navy",
    covers: [
      "Commercial contracts and service agreements",
      "Lease agreements (commercial & residential)",
      "Employment contracts and policies",
      "Shareholder and partnership agreements",
      "Competition-law compliance review",
      "Contract negotiation support",
    ],
    approach:
      "Most boutique conveyancers draft contracts from templates. Yolanda's competition-law grounding at the CCSA — where she assessed the public-interest impact of mergers and drafted merger conditions — means she reads a contract for the risks no template anticipates. Regulatory exposure, anti-competitive clauses, compliance gaps: caught before you sign.",
    prepare: [
      "An outline of the transaction or relationship you wish to record",
      "Any existing draft agreement or term sheet",
      "Company / CC registration documents (if a business party)",
      "Details of the other contracting party or parties",
      "Your commercial non-negotiables and preferred timelines",
    ],
  },
  {
    slug: "litigation",
    title: "General Litigation",
    shortTitle: "Litigation",
    icon: Gavel,
    tagline: "Measured, deliberate representation.",
    description:
      "Letters of demand, summons, and dispute resolution — handled with the deliberation of someone who has appeared at the Competition Tribunal.",
    accent: "navy",
    covers: [
      "Letters of demand and pre-litigation strategy",
      "Summons and pleadings",
      "Opposed and unopposed motion proceedings",
      "Business rescue and liquidation applications",
      "Motor vehicle accident claims",
      "Negotiated settlements and settlement agreements",
    ],
    approach:
      "Litigation should be a last resort, never a reflex. Having negotiated settlement agreements and appeared at the Competition Tribunal, Yolanda approaches disputes strategically — looking for the resolution that protects your interests without unnecessary cost. When court is unavoidable, every pleading is prepared to a standard that withstands scrutiny.",
    prepare: [
      "A written chronology of events (dates, what happened, who was involved)",
      "Copies of all relevant correspondence and contracts",
      "Invoices, receipts or proof of financial loss (if claimed)",
      "Contact details of any witnesses",
      "Any prior court documents or demand letters received",
    ],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

// Value props grounded in REAL, verified credentials — no fabrication
export const VALUE_PROPS: ValueProp[] = [
  {
    icon: Scale,
    title: "Rare Competition Tribunal Experience",
    description:
      "Most boutique conveyancers cannot claim this. Yolanda investigated cartel cases, conducted dawn raids and appeared at the Competition Tribunal — rigour now applied to every property transfer and contract.",
    highlight: "Former CCSA Investigator",
  },
  {
    icon: ScrollText,
    title: "Dual Notary & Conveyancer Admission",
    description:
      "Not every attorney holds both. As a Notary of the High Court, Yolanda is empowered to register antenuptial contracts and notarial documents — handled correctly the first time, not merely signed.",
    highlight: "Admitted 2019",
  },
  {
    icon: ShieldCheck,
    title: "Transparent, Upfront Pricing",
    description:
      "We promise it because we mean it. Clear fee quotes before work begins — no surprise line items at registration, no opaque disbursements. Trust is built on receipts you can read.",
    highlight: "Our stated value",
  },
  {
    icon: GraduationCap,
    title: "Continually Sharpening Expertise",
    description:
      "Certificate in Tax Law (UNISA), Certificate in Competition Law (UP), and an LLM in Taxation currently in progress at UKZN. The law moves — so does our founder's mastery of it.",
    highlight: "LLM in progress",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "First Conversation",
    description:
      "You reach out by phone, email, WhatsApp or the form below. We listen to understand your matter — no jargon, no pressure, no obligation. Most first calls take fifteen minutes.",
    duration: "Same day",
  },
  {
    number: "02",
    title: "Clear Scope & Quote",
    description:
      "We set out in writing exactly what we will do, what it will cost, and what you can expect at each stage. You decide whether to proceed — with full information, never in the dark.",
    duration: "1–2 days",
  },
  {
    number: "03",
    title: "Diligent Handling",
    description:
      "Your matter is prepared with the rigour of a practitioner who has appeared at the Competition Tribunal. Every document checked, every deadline tracked, every step explained in plain language.",
    duration: "Per matter",
  },
  {
    number: "04",
    title: "Resolution & Handover",
    description:
      "From registration at the Deeds Office to a signed will to a winding-up certificate — you receive the final deliverable, a clear record of what was done, and an open door for what comes next.",
    duration: "Closure",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "Property" | "Family & Wills" | "General";
}

// FAQ grounded in the long-tail SEO keyword opportunities flagged in the content scrape (Section 21)
export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Property",
    question: "How long does a property transfer take in South Africa?",
    answer:
      "A straightforward residential transfer typically takes 8 to 12 weeks from the moment the sale agreement is signed to registration at the Deeds Office. The timeline depends on the bond approval process, the municipal rates clearance (which can take 2–4 weeks alone), and whether there are existing bonds to cancel. We keep you updated at every milestone so you are never left wondering where your transfer stands.",
  },
  {
    category: "Property",
    question: "What costs are involved in transferring a property?",
    answer:
      "Beyond the purchase price, buyers should budget for transfer duty (payable to SARS on a sliding scale above R1.1 million), the conveyancer's professional fee (regulated by the Legal Practice Council tariff), Deeds Office registration fees, and post, petties and electronic generation fees. If you are financing with a bond, bond registration fees apply separately. We provide a written cost estimate before any work begins — transparently, line by line.",
  },
  {
    category: "Family & Wills",
    question: "What is the difference between an antenuptial and postnuptial contract?",
    answer:
      "An antenuptial contract (ANC) is signed before marriage and determines your marital property regime from day one — either excluding accrual (complete financial separation) or including accrual (sharing growth during the marriage). A postnuptial contract is entered into after marriage and, since a 2014 Constitutional Court ruling, can change an in-community marriage to out-of-community — but it requires a High Court application and is significantly more complex. As a Notary, Yolanda is qualified to draft and register both.",
  },
  {
    category: "Family & Wills",
    question: "Do I need a notary to draft my will?",
    answer:
      "No — any admitted attorney can draft a will. However, a will drafted without proper tax and estate-planning consideration can cost your heirs far more in estate duty and administrative friction than the drafting fee. Yolanda's tax-law grounding (UNISA certificate, LLM in Taxation in progress) means your will is drafted not just to be valid, but to be efficient — catching the structural issues most basic wills miss.",
  },
  {
    category: "Family & Wills",
    question: "How long does deceased estate administration take?",
    answer:
      "A straightforward estate typically takes 6 to 9 months from reporting to the Master of the High Court through to final distribution. Complex estates — those with disputes, offshore assets, or significant tax exposure — can take 12 to 18 months or longer. The Master's Office processing times, SARS estate tax compliance, and the required Liquidation & Distribution account laydown period (which allows objections) all factor in. We manage every step and keep executors informed throughout.",
  },
  {
    category: "General",
    question: "Why is transparent pricing so important for legal services?",
    answer:
      "Because unexpected legal bills erode trust — and trust is the foundation of any attorney-client relationship. We quote in writing before work begins, explain what each fee covers, and flag any change in scope before it happens. If a matter becomes more complex than first assessed, we tell you first. This is not a marketing line; it is how we choose to practise.",
  },
];
