"use client";
import { useState } from "react";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationFormSchema } from "@/app/validation/applicationForm";
import { Button } from "../ui/button";
import { createOrUpdateLead } from "@/lib/neodove";
import api from "@/lib/axios";
import { CircleCheckBig } from "lucide-react";


export default function ApplicationForm({ defaultLoanType }) {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset
    ,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      mobile: "",
      city: "",
      amount: "",
      loanType: defaultLoanType,
    },
  });

const onSubmit = async (data) => {
  try {
    await api.post("/api/telegram", data);
    console.log("telegram done")
    await createOrUpdateLead(data);
    console.log("neodove done");

    reset();
    setIsSuccess(true);
  } catch (error) {
    console.error(error);
  }
};

if (isSuccess) {
  return (
    <div className="rounded-xl border border-green-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CircleCheckBig className="mx-auto text-green-600" size={60} />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-[#0B2346]">
        Application Submitted
      </h3>

      <p className="mt-3 text-[#0B2346]/70">
        Thank you for your enquiry.
        <br />
        Our loan specialist will contact you shortly.
      </p>

      <div className="mt-8 rounded-lg bg-[#FAFAF8] p-4">
        <p className="text-sm text-[#0B2346]/70">Expected Response Time</p>

        <p className="mt-1 font-semibold text-[#0B2346]">Within 30 Minutes*</p>
      </div>
    </div>
  );
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-[#0B2346]/10 bg-white p-8 shadow-sm"
    >
      <h3 className="text-xl font-semibold text-[#0B2346]">
        Check Your Eligibility
      </h3>

      <p className="mt-1 text-sm text-[#0B2346]/60">
        Share a few details and our team will get back to you shortly.
      </p>

      <div className="mt-6 grid gap-4">
        <Field
          label="Full Name"
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register("name")}
        />

        <Field
          label="Mobile Number"
          type="tel"
          placeholder="10-digit mobile number"
          error={errors.phone?.message}
          {...register("mobile")}
        />

        <Field
          label="City"
          placeholder="Enter your city"
          error={errors.city?.message}
          {...register("city")}
        />

        <Field
          label="Loan Amount Required"
          placeholder="e.g. ₹10,00,000"
          error={errors.amount?.message}
          {...register("amount")}
        />

        <input type="hidden" {...register("loanType")} />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full bg-[#0B2346] hover:bg-[#091d3a]"
        >
          {isSubmitting ? "Submitting..." : `Apply for ${defaultLoanType}`}
        </Button>

        <p className="text-center text-xs text-[#0B2346]/40">
          By submitting, you agree to be contacted regarding your loan enquiry.
        </p>
      </div>
    </form>
  );
}

const Field = forwardRef(function Field(
  { label, error, placeholder, type = "text", ...props },
  ref,
) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[#0B2346]/50">
        {label}
      </span>

      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition-all ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            : "border-[#0B2346]/15 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
        }`}
        {...props}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </label>
  );
});
