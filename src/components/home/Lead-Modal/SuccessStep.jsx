import { CircleCheckBig, Upload } from "lucide-react";
import Link from "next/link";

const SuccessStep = ({onClose}) => {
  return (
    <div className="px-6 pb-6 pt-4 text-center">
      {/* Success Icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CircleCheckBig className="h-9 w-9 text-green-600" />
      </div>

      {/* Heading */}
      <h3 className="mt-5 text-2xl font-bold text-[#0B2346]">
        Request Submitted
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Thank you! Our loan experts will review your profile and contact you
        shortly with the best available loan offers.
      </p>

      {/* Upload CTA */}
      <div className="mt-6 rounded-2xl bg-[#F8FAFC] p-5 text-left">
        <h4 className="font-semibold text-[#0B2346]">
          Want Faster Processing?
        </h4>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share your documents with us to help our experts assess your
          eligibility faster and recommend the best loan options.
        </p>
        <Link
          href="https://wa.me/916265118905?text=Hi,%20I%20have%20submitted%20my%20loan%20enquiry%20on%20your%20website.%20I%20would%20like%20to%20proceed%20with%20my%20loan%20application%20and%20share%20my%20documents%20for%20a%20faster%20eligibility%20check."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] font-semibold text-[#0B2346] transition-colors hover:bg-[#C79F25]"
        >
          <Upload className="h-4 w-4" />
          Submit Documents
        </Link>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="mt-6 text-sm font-medium text-slate-500 transition-colors hover:text-[#0B2346]"
      >
        Close
      </button>
    </div>
  );
};

export default SuccessStep;
