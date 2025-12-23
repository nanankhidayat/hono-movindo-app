import { betterAuth } from "better-auth";
import { admin } from 'better-auth/plugins'
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/index";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        admin(),
    ]
});