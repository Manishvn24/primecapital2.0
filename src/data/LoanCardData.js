import {
  BriefcaseBusiness,
  House,
  Landmark,
  GraduationCap,
  Building2,
  UserRound,
  ArrowLeftRight,
  Stethoscope,
} from "lucide-react";

const loanProductsData = [
  {
    id: 1,
    title: "Overdraft Facility",
    description:
      "Access funds whenever you need them while paying interest only on what you use.",
    image: "/images/loan-products/overdraft.jpg",
    icon: Landmark,
    href: "/loan-products/overdraft-facility",
    badge: "Flexible",
  },
  {
    id: 2,
    title: "Professional Loan",
    description:
      "Exclusive financing solutions for doctors, CAs, architects, and professionals.",
    image: "/images/loan-products/professional.jpg",
    icon: Stethoscope,
    href: "/loan-products/professional-loan",
    badge: "Professionals",
  },
  {
    id: 3,
    title: "Personal Loan",
    description:
      "Meet life's unexpected expenses with instant unsecured personal financing.",
    image: "/images/loan-products/personal.jpg",
    icon: UserRound,
    href: "/loan-products/personal-loan",
    badge: "Quick Approval",
  },
  {
    id: 4,
    title: "Business Loan",
    description:
      "Fuel your business growth with flexible financing and quick approvals.",
    image: "/images/loan-products/business.jpg",
    icon: BriefcaseBusiness,
    href: "/loan-products/business-loan",
    badge: "Most Popular",
  },
  {
    id: 5,
    title: "LAP",
    description:
      "Unlock the value of your property to meet personal or business financial needs.",
    image: "/images/loan-products/house.jpg",
    icon: Building2,
    href: "/loan-products/loan-against-property",
    badge: "High Value",
  },
];

export default loanProductsData;
