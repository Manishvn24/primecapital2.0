import { z } from "zod";

export const applicationFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid mobile number"),

  city: z
    .string()
    .min(2, "Please enter your city"),

  amount: z
    .string()
    .optional(),

  loanType: z.string(),
});
