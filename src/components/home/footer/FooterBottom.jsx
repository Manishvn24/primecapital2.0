import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="mt-14 border-t border-slate-700 pt-6">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 lg:flex-row">
        <p>
          © {new Date().getFullYear()} VN Prime Capital. All Rights Reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-[#D4AF37]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="transition-colors hover:text-[#D4AF37]"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
