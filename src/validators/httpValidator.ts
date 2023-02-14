import { z } from "zod";

export const requestValidator = z.object({
  message: z
    .string({
      required_error: "message must be a string",
    })
    .min(1, { message: "string must not be empty" }),
  number: z
    .string()
    .regex(new RegExp("^+?d{1,2}d{3}d{3}d{4}$", "g"))
    .min(1, "phone number must not be empty"),
});
