import { z } from "zod";

export const inquirySchema = z.object({
  loanType: z.string().min(1, "Please select a loan type."),

  loanAmount: z.number().min(100000),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid mobile number."),
});
