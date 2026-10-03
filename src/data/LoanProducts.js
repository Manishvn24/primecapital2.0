// data/loanProducts.ts

export const loanProducts = {
  "business-loan": {
    slug: "business-loan",
    title: "Business Loan",
    shortDescription:
      "Flexible financing solutions to help businesses manage working capital, expansion, equipment purchases, and operational needs.",
    overview:
      "Whether you're expanding operations, purchasing machinery, hiring talent, or improving cash flow, our Business Loan solutions provide quick access to funds with competitive interest rates and flexible repayment options.",
    defaultLoanType: "Business Loan",
    highlights: [
      { label: "Interest Rate", value: "Starting from 8.50% p.a." },
      { label: "Processing Time", value: "Within 48 Hours" },
      { label: "Paperwork", value: "Minimal Documentation" },
      { label: "Support", value: "Dedicated Relationship Manager" },
    ],
    benefits: [
      "Quick approval process",
      "Competitive interest rates",
      "Minimal documentation",
      "Flexible repayment options",
      "Dedicated relationship manager",
      "Pan India service",
    ],
    eligibility: [
      "Business Owners",
      "Proprietorship Firms",
      "Partnership Firms",
      "Private Limited Companies",
      "LLPs",
      "MSMEs",
    ],
    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Business Proof",
      "Bank Statements",
      "Gumasta",
      "GST Registration",
    ],
    faq: "businessLoan",
  },

  "personal-loan": {
    slug: "personal-loan",
    title: "Personal Loan",
    shortDescription:
      "Unsecured funding for weddings, medical needs, travel, home renovation, or any personal requirement — no collateral required.",
    overview:
      "Get quick access to funds for your personal needs without pledging any security. Our Personal Loan offers fast disbursal, minimal paperwork, and repayment tenures designed around your monthly budget.",
    defaultLoanType: "Personal Loan",
    highlights: [
      { label: "Interest Rate", value: "Starting from 9.99% p.a." },
      { label: "Processing Time", value: "Within 24 Hours" },
      { label: "Paperwork", value: "Minimal Documentation" },
      { label: "Support", value: "Dedicated Relationship Manager" },
    ],
    benefits: [
      "No collateral required",
      "Fast disbursal",
      "Minimal documentation",
      "Flexible tenure options",
      "Dedicated relationship manager",
      "Pan India service",
    ],
    eligibility: [
      "Salaried Individuals",
      "Self-Employed Professionals",
      "Business Owners",
      "Minimum age 21 years",
      "Stable income source",
    ],
    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Salary Slips",
      "Bank Statements",
      "Electricity Bill",
    ],
    faq: "personalLoan",
  },

  "professional-loan": {
    slug: "professional-loan",
    title: "Professional Loan",
    shortDescription:
      "Tailored financing for doctors, CAs, engineers, and other qualified professionals to grow their practice or clinic.",
    overview:
      "Designed specifically for practicing professionals, this loan helps you set up or expand a clinic, office, or practice, purchase equipment, or manage working capital — backed by your professional qualification and income.",
    defaultLoanType: "Professional Loan",
    highlights: [
      { label: "Interest Rate", value: "Starting from 9.99% p.a." },
      { label: "Processing Time", value: "Within 48 Hours" },
      { label: "Paperwork", value: "Minimal Documentation" },
      { label: "Support", value: "Dedicated Relationship Manager" },
    ],
    benefits: [
      "Higher loan eligibility based on qualification",
      "Competitive interest rates",
      "Minimal documentation",
      "Flexible repayment options",
      "Dedicated relationship manager",
      "Pan India service",
    ],
    eligibility: [
      "Doctors (MBBS, BDS, MD, MS, etc.)",
      "Chartered Accountants",
      "Company Secretaries",
      "Engineers & Architects",
      "Other qualified professionals",
    ],
    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Working Address",
      "Registration Certificate (e.g. Medical Council)",
      "Bank Statements",
    ],
    faq: "professionalLoan",
  },

  "education-loan": {
    slug: "education-loan",
    title: "Education Loan",
    shortDescription:
      "Funding for higher education in India or abroad, covering tuition, living expenses, and other academic costs.",
    overview:
      "Turn an admission offer into an opportunity. Our Education Loan covers tuition fees, hostel and living expenses, and other study-related costs for courses in India and abroad, with repayment that starts after your course.",
    defaultLoanType: "Education Loan",
    highlights: [
      { label: "Interest Rate", value: "Starting from 9.5% p.a." },
      { label: "Processing Time", value: "Within 5-7 Days" },
      { label: "Paperwork", value: "Minimal Documentation" },
      { label: "Support", value: "Dedicated Relationship Manager" },
    ],
    benefits: [
      "Covers tuition and living expenses",
      "Moratorium period during study",
      "Competitive interest rates",
      "Minimal collateral for select courses",
      "Dedicated relationship manager",
      "Pan India service",
    ],
    eligibility: [
      "Indian citizen student",
      "Admission to a recognized institution",
      "Co-applicant / guarantor (parent or guardian)",
      "Courses in India or abroad",
    ],
    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Admission Letter",
      "Fee Structure",
      "Co-applicant's Income Proof",
      "Academic Records",
    ],
    faq: "educationLoan",
  },

  "loan-against-property": {
    slug: "loan-against-property",
    title: "Loan Against Property",
    shortDescription:
      "Unlock the value of your residential or commercial property for business expansion, education, or any large expense.",
    overview:
      "Leverage your owned property to access high-value funding at lower interest rates than unsecured loans. Ideal for business growth, debt consolidation, or major personal expenses, with long repayment tenures.",
    defaultLoanType: "Loan Against Property",
    highlights: [
      { label: "Interest Rate", value: "Starting from 8.50% p.a." },
      { label: "Processing Time", value: "Within 7-10 Days" },
      { label: "Paperwork", value: "Minimal Documentation" },
      { label: "Support", value: "Dedicated Relationship Manager" },
    ],
    benefits: [
      "High loan value against property",
      "Lower interest rates",
      "Longer repayment tenure",
      "Residential & commercial property accepted",
      "Dedicated relationship manager",
      "Pan India service",
    ],
    eligibility: [
      "Individuals with owned property",
      "Business Owners",
      "Self-Employed Professionals",
      "Salaried Individuals",
      "Clear property title",
    ],
    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Property Documents (Title Deed)",
      "Bank Statements",
      "Income Proof / ITR",
      "Property Tax Receipts",
    ],
    faq: "loanAgainstProperty",
  },


  "overdraft-facility": {
    slug: "overdraft-facility",
    title: "Overdraft Facility",
    shortDescription:
      "A pre-approved, unsecured credit limit you can use whenever you need funds. Withdraw only what you need and pay interest only on the amount you use.",
    overview:
      "An Overdraft (OD) facility gives you access to a pre-approved credit limit that you can use whenever you need funds. Unlike a regular loan, you don't have to take the entire amount at once. You can withdraw only the amount you need and pay interest only on the amount you actually use.\n\n" +
      "For example: Suppose you have an OD limit of ₹20 lakh. If you currently need only ₹5 lakh, you can use ₹5 lakh instead of taking the full ₹20 lakh. Interest is charged on the ₹5 lakh you have used, not on the entire ₹20 lakh limit.\n\n" +
      "As you repay the amount you've used, the available limit can become available again, subject to the terms of the facility.\n\n" +
      "In simple words: OD gives you flexible access to funds when you need them, without requiring you to use the entire approved limit at once.",
    defaultLoanType: "Overdraft Facility",
    highlights: [
      {
        label: "Interest Rate",
        value: "Starting from 9.99% p.a. on utilized amount",
      },
      { label: "Security", value: "Unsecured, no collateral required" },
      { label: "Processing Time", value: "Within 48 Hours" },
      { label: "Paperwork", value: "Minimal Documentation" },
    ],
    benefits: [
      "Unsecured, no collateral required",
      "Use funds as and when required",
      "Interest is generally charged on the amount utilized",
      "Flexibility to withdraw and repay within the approved limit",
      "Useful for managing short-term financial requirements and cash flow",
      "Higher limits may be available for eligible professionals and businesses",
      "Dedicated relationship manager",
      "Pan India service",
    ],
    eligibility: [
      "Business Owners",
      "Professionals (Doctors, CAs)",
      "Salaried Individuals",
    ],
    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Doctors: Medical Registration Certificate",
      "CAs: Certificate of Practice (COP)",
      "Business Owners: Gumasta / Business Registration",
      "Salaried: Latest Salary Slips",
    ],
    faq: "overdraftFacility",
  },
};


export function getLoanProduct(slug) {
  return loanProducts[slug];
}

export function getAllLoanSlugs(){
  return Object.keys(loanProducts);
}
