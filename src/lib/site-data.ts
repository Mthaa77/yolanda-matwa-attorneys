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

// Real, verifiable figures only — no fabricated "clients served" counters.
// Every number here can be substantiated from the public record or credentials.
export const STATS = [
  {
    value: "2013",
    label: "Admitted as an Attorney",
    sublabel: "of the High Court of South Africa",
  },
  {
    value: "6",
    label: "Core Practice Areas",
    sublabel: "conveyancing, notarial, family, estates, commercial, litigation",
  },
  {
    value: "3",
    label: "Postgraduate Qualifications",
    sublabel: "Tax Law, Competition Law, LLM in progress",
  },
  {
    value: "1",
    label: "Former Competition Tribunal Experience",
    sublabel: "rare among boutique conveyancers",
  },
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

export interface ServiceFAQ {
  q: string;
  a: string;
}

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
  faqs: ServiceFAQ[];
  related: string[]; // slugs of related services
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
    faqs: [
      {
        q: "Can I choose my own conveyancer, or does the bank decide?",
        a: "By law, the purchaser has the right to choose the transferring attorney — even when financing with a bond. The bank may appoint the bond registration attorney, but the transfer itself is your choice. We regularly work alongside bank-appointed bond attorneys to keep your transfer coordinated and on track.",
      },
      {
        q: "How long will my property transfer take?",
        a: "A straightforward residential transfer typically runs 8 to 12 weeks from signed offer to registration. The variables are bond approval, municipal rates clearance (often 2 to 4 weeks), and whether existing bonds need cancellation. We flag delays early and update you at every milestone.",
      },
      {
        q: "What will I pay in transfer costs?",
        a: "Beyond the purchase price: SARS transfer duty (on a sliding scale above R1.1m), the conveyancer's professional fee (LPC-regulated tariff), Deeds Office registration fees, and post/petties. Bond registration fees apply separately if financed. We provide a written, line-by-line estimate before you commit.",
      },
    ],
    related: ["commercial-contracts", "wills-estates"],
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
    faqs: [
      {
        q: "Do I need a notary to draft my will?",
        a: "No — any admitted attorney can draft a will. But a will drafted without tax and estate-planning thought can cost your heirs far more in estate duty and friction than the drafting fee. Yolanda's tax-law grounding means your will is efficient, not merely valid.",
      },
      {
        q: "How often should I update my will?",
        a: "Review your will after every major life event: marriage, divorce, birth or adoption of a child, death of a beneficiary or executor, significant asset acquisition or disposal, and relocation across borders. A will that no longer reflects your circumstances can cause precisely the disputes it was meant to prevent.",
      },
      {
        q: "What happens if I die without a will?",
        a: "Your estate is distributed according to the Intestate Succession Act — a fixed formula that may not match your wishes, can delay administration, and may impose guardianship arrangements you would not have chosen. A valid will is one of the most meaningful things you can leave behind.",
      },
    ],
    related: ["deceased-estates", "antenuptial-contracts"],
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
    faqs: [
      {
        q: "What is the difference between an ANC with and without accrual?",
        a: "An ANC without accrual means complete financial separation — each spouse keeps what is theirs, and growth during the marriage stays separate. An ANC with accrual means each spouse shares in the growth of the other's estate during the marriage, which the Constitutional Court has called the fairer default for most modern marriages. We help you choose what genuinely fits your circumstances.",
      },
      {
        q: "Can we change our marital regime after getting married?",
        a: "Yes — since a 2014 Constitutional Court ruling, a postnuptial contract can change an in-community marriage to out-of-community. But it requires a High Court application, notice to creditors, and is significantly more involved than an ANC signed before the wedding. Far simpler to decide before the day.",
      },
      {
        q: "When must the antenuptial contract be signed?",
        a: "Strictly before the marriage is solemnised. An ANC signed even one day after the wedding does not take effect — the marriage is then automatically in community of property, and changing it requires the full postnuptial court process. Plan the ANC at least two to three weeks before your date.",
      },
    ],
    related: ["wills-estates", "commercial-contracts"],
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
    faqs: [
      {
        q: "How long does deceased estate administration take?",
        a: "A straightforward estate runs 6 to 9 months from reporting to the Master through to final distribution. Complex estates — disputes, offshore assets, significant tax exposure — can take 12 to 18 months or longer. The L&D account laydown period, SARS compliance, and Master's Office processing times all factor in.",
      },
      {
        q: "What if there is no will?",
        a: "The estate is administered under the Intestate Succession Act, and the Master will appoint an executor (often a family member or a professional nominated by the family). The process is longer, the distribution follows a fixed formula, and estate duty planning opportunities are limited. We can still administer the estate efficiently — but a will makes everything simpler.",
      },
      {
        q: "Do I have to pay estate duty?",
        a: "Estate duty is levied at 20% on the dutiable estate above the primary abatement (currently R3.5 million), with a possible spousal rollover. Many estates fall below the threshold and pay nothing, but life policies, retirement interests, and property valuations all affect the calculation. Proper estate planning can materially reduce the duty your heirs pay.",
      },
    ],
    related: ["wills-estates", "conveyancing"],
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
    faqs: [
      {
        q: "How is your contract review different from a template-based service?",
        a: "Yolanda's competition-law grounding at the CCSA — assessing the public-interest impact of mergers and drafting merger conditions — means she reads a contract for the risks no template anticipates: regulatory exposure, anti-competitive clauses, compliance gaps, and the leverage points buried in boilerplate. You get a review, not a rubber stamp.",
      },
      {
        q: "Do you handle ongoing contract management, or just drafting?",
        a: "Both. We draft new agreements, review existing ones before signature, and assist with variations, renewals, and dispute resolution down the line. Many clients keep us on retainer for ongoing commercial matters — it is almost always cheaper to review a contract before signing than to litigate it after.",
      },
      {
        q: "What does a competition-law compliance review involve?",
        a: "We assess your commercial agreements and practices for exposure under the Competition Act — prohibited horizontal and vertical arrangements, abuse of dominance, and merger notification thresholds. For most SME clients this is a focused, fixed-fee review; for larger or regulated clients it can form part of a broader compliance programme.",
      },
    ],
    related: ["conveyancing", "litigation"],
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
    faqs: [
      {
        q: "Do I have to go to court to resolve my dispute?",
        a: "Not always — and often not. Yolanda approaches disputes strategically, having negotiated settlement agreements at the Competition Tribunal. A well-drafted letter of demand, a structured without-prejudice exchange, or mediation can resolve many matters without the cost and delay of trial. We pursue court only when it is genuinely the right path.",
      },
      {
        q: "What does litigation cost?",
        a: "It depends on complexity, the stage reached, and whether the matter is opposed. We quote in writing before any work begins and flag scope changes before they happen. For most matters we can offer a phased approach — a fixed fee for the demand and pre-litigation stage, then a revised estimate if proceedings become necessary.",
      },
      {
        q: "How long does a court matter take?",
        a: "An unopposed motion can be resolved in 2 to 4 months. An opposed application typically runs 6 to 12 months. A full trial, with pleadings, discovery, and witnesses, can take 18 to 36 months in the High Court roll. We give you a realistic timeline up front and update it as the matter progresses.",
      },
    ],
    related: ["commercial-contracts", "deceased-estates"],
  },
];

// Comparison matrix: rows = common client needs, columns = service slugs.
// "yes" = primary coverage, "partial" = tangentially covered, "no" = not applicable.
export type Coverage = "yes" | "partial" | "no";

export interface ComparisonRow {
  need: string;
  category: "Property" | "Family & Wills" | "Commercial" | "Disputes";
  coverage: Record<string, Coverage>;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    need: "Buying or selling a home",
    category: "Property",
    coverage: {
      conveyancing: "yes",
      "wills-estates": "no",
      "antenuptial-contracts": "no",
      "deceased-estates": "partial",
      "commercial-contracts": "partial",
      litigation: "no",
    },
  },
  {
    need: "Bond registration or cancellation",
    category: "Property",
    coverage: {
      conveyancing: "yes",
      "wills-estates": "no",
      "antenuptial-contracts": "no",
      "deceased-estates": "partial",
      "commercial-contracts": "no",
      litigation: "no",
    },
  },
  {
    need: "Drafting your will",
    category: "Family & Wills",
    coverage: {
      conveyancing: "no",
      "wills-estates": "yes",
      "antenuptial-contracts": "no",
      "deceased-estates": "partial",
      "commercial-contracts": "no",
      litigation: "no",
    },
  },
  {
    need: "Estate planning & trusts",
    category: "Family & Wills",
    coverage: {
      conveyancing: "partial",
      "wills-estates": "yes",
      "antenuptial-contracts": "no",
      "deceased-estates": "yes",
      "commercial-contracts": "partial",
      litigation: "no",
    },
  },
  {
    need: "Antenuptial / postnuptial contract",
    category: "Family & Wills",
    coverage: {
      conveyancing: "no",
      "wills-estates": "no",
      "antenuptial-contracts": "yes",
      "deceased-estates": "no",
      "commercial-contracts": "no",
      litigation: "no",
    },
  },
  {
    need: "Winding up a loved one's estate",
    category: "Family & Wills",
    coverage: {
      conveyancing: "partial",
      "wills-estates": "yes",
      "antenuptial-contracts": "no",
      "deceased-estates": "yes",
      "commercial-contracts": "no",
      litigation: "partial",
    },
  },
  {
    need: "Commercial / lease / employment contract",
    category: "Commercial",
    coverage: {
      conveyancing: "partial",
      "wills-estates": "no",
      "antenuptial-contracts": "no",
      "deceased-estates": "no",
      "commercial-contracts": "yes",
      litigation: "partial",
    },
  },
  {
    need: "Competition-law compliance review",
    category: "Commercial",
    coverage: {
      conveyancing: "no",
      "wills-estates": "no",
      "antenuptial-contracts": "no",
      "deceased-estates": "no",
      "commercial-contracts": "yes",
      litigation: "partial",
    },
  },
  {
    need: "Letter of demand / dispute resolution",
    category: "Disputes",
    coverage: {
      conveyancing: "partial",
      "wills-estates": "no",
      "antenuptial-contracts": "no",
      "deceased-estates": "partial",
      "commercial-contracts": "partial",
      litigation: "yes",
    },
  },
  {
    need: "Summons & court representation",
    category: "Disputes",
    coverage: {
      conveyancing: "no",
      "wills-estates": "no",
      "antenuptial-contracts": "no",
      "deceased-estates": "partial",
      "commercial-contracts": "no",
      litigation: "yes",
    },
  },
];

export const COMPARISON_CATEGORIES = [
  "All",
  "Property",
  "Family & Wills",
  "Commercial",
  "Disputes",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export interface InsightArticle {
  slug: string;
  topic: string;
  question: string;
  readTime: string;
  status: "drafting" | "planned";
  excerpt: string;
  body: string[];
}

// Draft preview content — reflects the attorney's actual expertise.
// Marked "Drafting"/"Planned" so readers understand these are not yet final published articles.
export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: "transfer-costs-pretoria",
    topic: "Property Law",
    question: "How much does property transfer really cost in Pretoria?",
    readTime: "6 min read",
    status: "drafting",
    excerpt:
      "Beyond the purchase price, buyers face transfer duty, conveyancer fees, Deeds Office charges, and — if bonded — bond registration fees. Here is what each one actually is, and why a written quote matters before you commit.",
    body: [
      "When you buy a property in South Africa, the purchase price is only the beginning. The law requires a conveyancer — an attorney with the additional conveyancing qualification — to handle the transfer of ownership from seller to buyer at the Deeds Office. That professional service carries a fee, and several statutory costs apply on top.",
      "Transfer duty is the tax paid to SARS on the acquisition of immovable property. It operates on a sliding scale: properties below R1.1 million are exempt, and the rate steps up progressively above that threshold. The duty is calculated on the purchase price (or market value, if higher), and the conveyancer pays it over to SARS on your behalf and obtains a transfer duty receipt before lodgement.",
      "The conveyancer's professional fee is regulated by the Legal Practice Council tariff guidelines, which means fees are broadly consistent across firms for a given property value — but the service and communication you receive can vary enormously. This is where choosing your own conveyancer (which you have the legal right to do, even when the bank finances the bond) genuinely matters.",
      "Deeds Office registration fees are relatively modest statutory charges. Post, petties and electronic generation fees cover the administrative cost of lodging documents electronically and physically. If you are financing with a bond, the bank's bond registration attorney charges a separate fee for registering the mortgage — and again, the fee is tariff-guideline based.",
      "The practical takeaway: always ask for a written, line-by-line cost estimate before instructing a conveyancer. A transparent practice will provide one without hesitation. If a firm is reluctant to put fees in writing, that reluctance is itself information.",
    ],
  },
  {
    slug: "anc-accrual",
    topic: "Family Law",
    question: "ANC with or without accrual: which actually protects you?",
    readTime: "5 min read",
    status: "drafting",
    excerpt:
      "An antenuptial contract can include or exclude accrual — and the choice shapes your entire financial life during the marriage and at its end. Here is what each option genuinely means, beyond the textbook definition.",
    body: [
      "An antenuptial contract (ANC) is signed before marriage to determine your marital property regime — in other words, how your assets and liabilities are treated during the marriage and if it ends. South African law recognises three regimes: in community of property, out of community with accrual, and out of community without accrual.",
      "An ANC without accrual means complete financial separation. Each spouse owns and controls their own assets and is responsible for their own debts. Growth during the marriage stays with the spouse who generated it. This offers the strongest protection for a spouse bringing significant pre-marital assets or business interests — but it can produce harsh outcomes where one spouse has sacrificed career to raise a family.",
      "An ANC with accrual means each spouse retains their own assets during the marriage, but at its end (by death or divorce), the growth in each estate is shared. The spouse whose estate grew less receives a share of the growth in the other's estate. The Constitutional Court has described accrual as the fairer default for most modern marriages, because it recognises indirect contributions to a household's prosperity.",
      "The choice is not abstract. It affects bond applications, business risk, estate duty planning, and the position of creditors. As a Notary of the High Court, Yolanda is one of the few practitioners legally empowered to draft and register an ANC — and the registration (at the Deeds Office) is what makes the contract effective against third parties. An ANC that is signed but never registered does not take effect.",
      "The practical rule: decide at least two to three weeks before your wedding date. An ANC signed even one day after the marriage does not take effect, and changing your regime afterwards requires a full postnuptial High Court application — far more complex and costly.",
    ],
  },
  {
    slug: "diy-wills-fail",
    topic: "Estates",
    question: "Why most DIY wills fail at the Master's Office",
    readTime: "7 min read",
    status: "planned",
    excerpt:
      "A will written on a napkin can be valid. A will printed from a template website can be invalid. The difference is not the paper — it is the formalities, the clarity, and the estate-planning thought that should sit behind the words.",
    body: [
      "The Wills Act 7 of 1953 sets out strict formalities for a valid will: it must be in writing, signed at the end by the testator (or someone in their presence and by their direction), and the signature must be made in the presence of two competent witnesses present at the same time. Each page other than the last must be signed. The witnesses must not be beneficiaries or spouses of beneficiaries.",
      "These formalities trip up DIY wills constantly. A will signed by only one witness is invalid. A will where a beneficiary also acted as witness disqualifies that beneficiary. A will with pages not initialled can be rejected. The Master of the High Court will examine every page — and a single defect can void the entire document.",
      "Beyond formalities, a will that is technically valid but poorly drafted can cause enormous friction. Ambiguous bequests, failure to nominate an executor, failure to provide for minor children through a trust, and no thought to estate duty — these are the gaps that turn a 'simple' will into a protracted, expensive estate administration.",
      "This article is being drafted. It will cover the most common defects we see in DIY wills, the Master's acceptance process, and why a will drafted with tax and estate-planning consideration costs less than the friction it prevents.",
    ],
  },
  {
    slug: "cartel-investigator-contracts",
    topic: "Competition Law",
    question: "What a cartel investigator looks for in your commercial contract",
    readTime: "8 min read",
    status: "planned",
    excerpt:
      "Yolanda investigated cartel cases and assessed the public-interest impact of mergers at the Competition Commission. That lens — trained to spot anti-competitive risk — now reads every commercial contract this firm drafts.",
    body: [
      "Most boutique conveyancers draft commercial contracts from templates. The risk is that a template, however well-structured, is blind to the competition-law exposure buried in its terms. A clause that looks standard can be a prohibited vertical restraint. A market-definition that looks reasonable can be an abuse of dominance.",
      "During her time at the Competition Commission of South Africa (CCSA), Yolanda investigated cartel cases, conducted dawn raids, negotiated settlement agreements and appeared at the Competition Tribunal. She also analysed the competition-law and public-interest impact of mergers and acquisitions, including drafting conditions for mergers approved with conditions.",
      "That training reads contracts differently. Where a template sees 'exclusivity', the competition lens asks: for how long, in what geographic market, and does it foreclose competitors? Where a template sees 'most-favoured-nation pricing', the lens asks: does this facilitate information exchange or price coordination? Where a template sees a non-compete, the lens asks: is it reasonably necessary to protect a legitimate interest, or is it a naked restraint?",
      "This article is being drafted. It will set out the practical competition-law checks that should sit behind every commercial contract — drawn from the perspective of someone who has been on the enforcement side of the table.",
    ],
  },
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
