import type { ApiResponse } from '../components/LegalAssistant';

const cases: Record<string, ApiResponse> = {
  minor: {
    answer: `Yes, under Section 164 of the Motor Vehicles Act, 1988, the family of a deceased minor is entitled to compensation even if the minor was driving without a license.`,
    citation: {
      text: "The absence of a driving licence does not bar compensation under MV Act.",
      pdfLink: "https://indiankanoon.org/doc/1234567/",
      scrollToHighlight: true,
      source: "Raj Kumar v. Ajay Kumar & Anr."
    }
  },
  dowryDeath: {
    answer: `Dowry death is punishable under Section 304B of the IPC. If a woman dies within 7 years of marriage under suspicious circumstances, and it's shown she was harassed for dowry, the husband and in-laws may be presumed guilty.`,
    citation: {
      text: "Presumption under Section 113B of the Evidence Act is applicable.",
      pdfLink: "https://indiankanoon.org/doc/2345678/",
      scrollToHighlight: true,
      source: "Kans Raj v. State of Punjab"
    }
  },
  bailAnticipatory: {
    answer: `Anticipatory bail under Section 438 CrPC can be sought when there's a reasonable apprehension of arrest. Courts analyze nature of accusation, antecedents, and possibility of misuse of liberty.`,
    citation: {
      text: "Right to anticipatory bail is not absolute but can be exercised to prevent arbitrary arrest.",
      pdfLink: "https://indiankanoon.org/doc/3456789/",
      scrollToHighlight: true,
      source: "Siddharam Satlingappa Mhetre v. State of Maharashtra"
    }
  },
  chequeBounce: {
    answer: `Dishonour of cheques is governed under Section 138 of the Negotiable Instruments Act. A legal notice must be sent within 30 days of dishonour to initiate proceedings.`,
    citation: {
      text: "The offence is compoundable, and compromise can be made at any stage.",
      pdfLink: "https://indiankanoon.org/doc/4567890/",
      scrollToHighlight: true,
      source: "M/s Meters and Instruments Pvt. Ltd. v. Kanchan Mehta"
    }
  },
  consumerRights: {
    answer: `Consumers can approach forums under the Consumer Protection Act, 2019 for deficiency in services, unfair trade practices, or defective goods.`,
    citation: {
      text: "Consumer is entitled to fair remedy for loss or inconvenience caused.",
      pdfLink: "https://indiankanoon.org/doc/5678901/",
      scrollToHighlight: true,
      source: "Indian Medical Assn. v. V.P. Shantha"
    }
  },
  illegalArrest: {
    answer: `Article 22 of the Indian Constitution protects against illegal arrest. Arrest without legal grounds may be challenged through habeas corpus petitions.`,
    citation: {
      text: "Arrest must comply with Article 21 and CrPC provisions.",
      pdfLink: "https://indiankanoon.org/doc/6789012/",
      scrollToHighlight: true,
      source: "DK Basu v. State of West Bengal"
    }
  },
  workplaceHarassment: {
    answer: `Sexual harassment at workplace is governed by the POSH Act, 2013. Every organization with 10+ employees must have an Internal Complaints Committee.`,
    citation: {
      text: "Vishaka guidelines laid foundation for legislative framework.",
      pdfLink: "https://indiankanoon.org/doc/7890123/",
      scrollToHighlight: true,
      source: "Vishaka v. State of Rajasthan"
    }
  },
  marriageVoid: {
    answer: `A marriage is void under Hindu Marriage Act, 1955 if it's within prohibited degrees of relationship or one party is already married.`,
    citation: {
      text: "Second marriage without dissolution of the first is void.",
      pdfLink: "https://indiankanoon.org/doc/8901234/",
      scrollToHighlight: true,
      source: "Yamunabai v. Anantrao"
    }
  },
  domesticViolence: {
    answer: `Protection of Women from Domestic Violence Act, 2005 ensures civil remedies like residence, protection, and monetary relief for aggrieved women.`,
    citation: {
      text: "Domestic violence includes emotional, verbal, and financial abuse.",
      pdfLink: "https://indiankanoon.org/doc/9012345/",
      scrollToHighlight: true,
      source: "V.D. Bhanot v. Savita Bhanot"
    }
  },
  childCustody: {
    answer: `Child custody post-divorce is decided in the best interest of the child. Courts consider age, welfare, and preference (if mature).`,
    citation: {
      text: "Paramount consideration is the welfare of the minor.",
      pdfLink: "https://indiankanoon.org/doc/9123456/",
      scrollToHighlight: true,
      source: "Gaurav Nagpal v. Sumedha Nagpal"
    }
  },
  cyberCrime: {
    answer: `Cybercrime is regulated under the IT Act, 2000. Victims can lodge FIRs at local police stations or cyber cells.`,
    citation: {
      text: "Hacking, identity theft, and financial fraud are punishable.",
      pdfLink: "https://indiankanoon.org/doc/9134567/",
      scrollToHighlight: true,
      source: "Shreya Singhal v. Union of India"
    }
  },
  tenantEviction: {
    answer: `Landlords must follow due process to evict tenants. Illegal eviction is punishable. Notice under Rent Control Acts is mandatory.`,
    citation: {
      text: "Tenants have statutory protections against arbitrary eviction.",
      pdfLink: "https://indiankanoon.org/doc/9145678/",
      scrollToHighlight: true,
      source: "Krishna Ram Mahale v. Shobha Venkat Rao"
    }
  },
  propertyDispute: {
    answer: `Property disputes must be resolved via civil suits. Title, possession, and revenue records are critical evidence.`,
    citation: {
      text: "Possession without title is insufficient unless adverse possession is claimed.",
      pdfLink: "https://indiankanoon.org/doc/9156789/",
      scrollToHighlight: true,
      source: "Anathula Sudhakar v. P. Buchi Reddy"
    }
  },
  policeComplaint: {
    answer: `A police complaint can be filed online or offline under Section 154 CrPC. Denial of FIR registration can be escalated to Magistrate under Section 156(3).`,
    citation: {
      text: "Police is bound to register FIR if cognizable offence is disclosed.",
      pdfLink: "https://indiankanoon.org/doc/9167890/",
      scrollToHighlight: true,
      source: "Lalita Kumari v. Government of U.P."
    }
  },
  adoptionLaw: {
    answer: `Hindus can adopt under Hindu Adoption and Maintenance Act, 1956. Others must follow Guardians and Wards Act with court permission.`,
    citation: {
      text: "Only Hindus have legal right of adoption as per personal law.",
      pdfLink: "https://indiankanoon.org/doc/9178901/",
      scrollToHighlight: true,
      source: "Shabnam Hashmi v. Union of India"
    }
  },
  freedomOfSpeech: {
    answer: `Freedom of speech is guaranteed under Article 19(1)(a), but subject to reasonable restrictions under Article 19(2) on grounds like public order and morality.`,
    citation: {
      text: "Section 66A of IT Act was struck down for violating free speech.",
      pdfLink: "https://indiankanoon.org/doc/9189012/",
      scrollToHighlight: true,
      source: "Shreya Singhal v. Union of India"
    }
  },
  rightToEducation: {
    answer: `Right to Education is a fundamental right under Article 21A. Children aged 6–14 are entitled to free and compulsory education.`,
    citation: {
      text: "RTE Act ensures non-discriminatory access to schooling.",
      pdfLink: "https://indiankanoon.org/doc/9190123/",
      scrollToHighlight: true,
      source: "Society for Unaided Private Schools v. Union of India",
    }
  },
  abortionRights: {
    answer: `Medical Termination of Pregnancy Act, 1971 allows abortion up to 24 weeks in certain cases. Consent of woman is mandatory.`,
    citation: {
      text: "Unmarried women are also entitled to abortion under MTP Act.",
      pdfLink: "https://indiankanoon.org/doc/9201234/",
      scrollToHighlight: true,
      source: "X v. Principal Secretary, Health and Family Welfare Department"
    }
  },
  liveInRelationship: {
    answer: `Live-in relationships are legally recognized. Children born out of such unions have inheritance rights.`,
    citation: {
      text: "Live-in relationship not per se illegal in India.",
      pdfLink: "https://indiankanoon.org/doc/9212345/",
      scrollToHighlight: true,
      source: "Indra Sarma v. V.K.V. Sarma"
    }
  },
  tripleTalaq: {
    answer: `Triple Talaq (instant divorce) has been declared unconstitutional and is now a punishable offence under the Muslim Women (Protection of Rights on Marriage) Act, 2019.`,
    citation: {
      text: "Practice violates fundamental rights under Articles 14 and 21.",
      pdfLink: "https://indiankanoon.org/doc/9223456/",
      scrollToHighlight: true,
      source: "Shayara Bano v. Union of India"
    }
  },
  default: {
    answer: `This appears to be a complex legal matter that may not directly match a predefined category.

    However, based on the Motor Vehicles Act, Indian Penal Code, and allied legislation, you may still have legal remedies depending on your circumstances. Our AI assistant is designed to provide preliminary insights, not legal advice.

    **General Legal Guidelines:**
    - Collect all relevant facts, documents, and witness details
    - Understand applicable laws (e.g., CrPC, IPC, CPC, IT Act, etc.)
    - Avoid making decisions without clarity on jurisdiction and timelines
    - Most legal rights are time-bound—delays can affect your case

    **Next Steps:**
    - Consult a qualified lawyer with your documentation
    - You can file RTIs, police complaints, FIRs, or civil suits based on the issue
    - For faster help, try rephrasing your query with specific terms (e.g., "tenant eviction", "cyber fraud", "anticipatory bail")`,

    citation: {
      text: "",
      pdfLink: "",
      scrollToHighlight: false,
      source: ""
    }
  }

}

export default cases