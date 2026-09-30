import { z } from "zod";
import { contactMethods, matterTypes } from "@/content/forms";

const matterValues = matterTypes.map((item) => item.value) as [
  string,
  ...string[],
];
const methodValues = contactMethods.map((item) => item.value) as [
  string,
  ...string[],
];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name is too long.")
    .regex(/^[\p{L}\p{M}\s.'-]+$/u, "Please use letters in the name field."),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a telephone number.")
    .max(20, "Telephone number is too long.")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid telephone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(120),
  matter: z.enum(matterValues, {
    errorMap: () => ({ message: "Please select a type of legal matter." }),
  }),
  description: z
    .string()
    .trim()
    .min(10, "Please give a brief description (at least 10 characters).")
    .max(1000, "Please keep the description under 1,000 characters."),
  preferredMethod: z.enum(methodValues, {
    errorMap: () => ({ message: "Please choose a preferred contact method." }),
  }),
  /** Honeypot. Bots that fill this are silently ignored. */
  company: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function sanitizePlain(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}
