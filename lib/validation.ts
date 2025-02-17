import { z } from 'zod';

export const signUpSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    userId: z.coerce.number(),
    idCard: z.string().nonempty('Id Card is Required'),
    password: z.string().min(8),
});

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});
