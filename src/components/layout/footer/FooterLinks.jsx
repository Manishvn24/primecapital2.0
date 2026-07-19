import Link from "next/link";
import { companyLinks, loanProducts, resources } from "@/data/FooterData";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-slate-300 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
      <FooterColumn title="Loan Products" links={loanProducts} />

      <FooterColumn title="Company" links={companyLinks} />

      <FooterColumn title="Resources" links={resources} />
    </div>
  );
};

export default FooterLinks;
