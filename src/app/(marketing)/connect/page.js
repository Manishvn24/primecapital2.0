
import Link from "next/link";
import {
  MessageCircle,
  BadgeCheck,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

function Instagram({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Youtube({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon
        points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
export const metadata = {
  title: "Connect with Us | VN Prime Capital",
  description:
    "Reach VN Prime Capital for loan and OD enquiries, eligibility check, careers, and follow us on Instagram and YouTube.",
};

const WA_NUMBER = "916265118905";
const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const links = [
  {
    title: "Enquiry for Loan / OD",
    desc: "Chat with our team on WhatsApp",
    href: waLink(
      "Hello VN Prime Capital, I would like to enquire about a Loan / OD. Please guide me.",
    ),
    icon: MessageCircle,
    external: true,
    primary: true,
  },
  {
    title: "Check Eligibility",
    desc: "Find out what you qualify for",
    href: "/contact",
    icon: BadgeCheck,
    external: false,
  },
  {
    title: "Instagram",
    desc: "@vnprimecapital",
    href: "https://www.instagram.com/vnprimecapital/",
    icon: Instagram,
    external: true,
  },
  {
    title: "YouTube",
    desc: "Watch our latest videos",
    href: "https://www.youtube.com/channel/UCDI2gI3rdCiLwNvOz4b39UA",
    icon: Youtube,
    external: true,
  },
  {
    title: "Careers",
    desc: "Join the VN Prime Capital team",
    href: waLink(
      "Hello VN Prime Capital, I am interested in career opportunities with your team. Please share the details.",
    ),
    icon: Briefcase,
    external: true,
  },
];

export default function ConnectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B2346] px-4 py-16 sm:py-24">
      {/* soft gold glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-md">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Financing Your Ambitions
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Connect with{" "}
            <span className="text-[#D4AF37]">VN Prime Capital</span>
          </h1>
          <p className="mt-3 text-sm text-white/70">
            Choose how you&apos;d like to reach us. We usually reply within a
            few hours.
          </p>
        </div>

        <ul className="space-y-4">
          {links.map(({ title, desc, href, icon: Icon, external, primary }) => {
            const className = `group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
              primary
                ? "border-[#D4AF37] bg-[#D4AF37] text-[#0B2346] hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)]"
                : "border-white/10 bg-white/5 text-white backdrop-blur hover:border-[#D4AF37]/60 hover:bg-white/10"
            }`;

            const content = (
              <>
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    primary
                      ? "bg-[#0B2346] text-[#D4AF37]"
                      : "bg-[#D4AF37]/15 text-[#D4AF37]"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="flex-1">
                  <span className="block text-base font-semibold">{title}</span>
                  <span
                    className={`block text-sm ${
                      primary ? "text-[#0B2346]/75" : "text-white/60"
                    }`}
                  >
                    {desc}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </>
            );

            return (
              <li key={title}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={href} className={className}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
