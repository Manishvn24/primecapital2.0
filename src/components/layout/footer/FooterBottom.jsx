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
          <p className=" text-slate-400 hover:text-[#D4AF37] transition-colors">
            Built with ♥ by MT
            <a
              href="https://www.instagram.com/manishxthakur7/?__d=dist"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            ></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
