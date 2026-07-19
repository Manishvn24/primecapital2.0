"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoanTypeSelect from "./InqueryCard/LoanTypeSelect";
import AmountSlider from "./InqueryCard/AmountSlider";
import PhoneInput from "./InqueryCard/PhoneInput";
import CheckOfferButton from "./InqueryCard/CheckOfferButton";
import { inquirySchema } from "@/app/validation/inquirySchema";
import { toast } from "sonner";
import { createOrUpdateLead } from "@/lib/neodove";
import api from "@/lib/axios";


const InquiryCard = () => {
  const {
    control,
    handleSubmit,reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(inquirySchema),
    mode : "onSubmit",
    defaultValues: {
      loanType: "personal",
      loanAmount: 1000000,
      mobile: "",
    },
  });

const onSubmit = async (data) => {
  console.log(data);

  await createOrUpdateLead({
    mobile: data.mobile,
    loanType: data.loanType,
    loanAmount: data.loanAmount,
  });

  await api.post("/api/telegram", data);
  toast.success("Your enquiry has been submitted successfully.", {
    position: "bottom-right",
  });

  reset();
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl shadow-[#0B2346]/10 border border-gray-100 p-6 space-y-5">
      {/* Card Header */}
      <div>
        <h3 className="text-lg font-bold text-[#0B2346]">
          Check Your Loan Offers
        </h3>
        <p className="mt-0.5 text-sm text-gray-500">
          Get personalized offers in just a few steps
        </p>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-[#D4AF37]/40 via-gray-100 to-transparent" />

      {/* Form Fields */}
      <div className="space-y-4">
          <Controller
            name="loanType"
            control={control}
            render={({ field }) => (
              <LoanTypeSelect
                value={field.value}
                onChange={field.onChange}
                error={errors.loanType?.message}
              />
            )}
          />{" "}
          <Controller
            name="loanAmount"
            control={control}
            render={({ field }) => (
              <AmountSlider
                value={field.value}
                onChange={field.onChange}
                error={errors.loanAmount?.message}
              />
            )}
          />{" "}
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <PhoneInput
                value={field.value}
                onChange={field.onChange}
                error={errors.mobile?.message}
              />
            )}
          />{" "}
        </div>
        <div className="space-y-1">
          {errors.mobile && (
            <p className="text-xs text-red-500">{errors.mobile.message}</p>
          )}

          {errors.loanAmount && (
            <p className="text-xs text-red-500">{errors.loanAmount.message}</p>
          )}

          {errors.loanType && (
            <p className="text-xs text-red-500">{errors.loanType.message}</p>
          )}
      </div>

      {/* Submit Button */}
        <CheckOfferButton type="submit" loading={isSubmitting} disabled={!isValid} />

      {/* Trust line */}
      <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
        <svg
          className="h-3.5 w-3.5 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        Your information is secure and confidential
      </p>
    </div>
    </form>
  );
};

export default InquiryCard;
