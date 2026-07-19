import { z } from "zod";

export const phoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(1, "Mobile number is required.")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid mobile number."),
});

export const detailsSchema = z.object({
  name: z.string().trim().min(3, "Please enter your full name."),
});
