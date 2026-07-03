import {
  Home,
  ScrollText,
  HeartHandshake,
  FileCheck2,
  Briefcase,
  Gavel,
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
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];
