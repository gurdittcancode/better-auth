import { betterAuth } from "better-auth";
import { openAPI } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import { account, session, user, verification } from "@/db/auth-schema";

export const auth = betterAuth({
	plugins: [openAPI()],
	database: drizzleAdapter(db, {
		provider: "sqlite",
		schema: {
			user,
			session,
			account,
			verification,
		},
	}),

	emailAndPassword: {
		enabled: true,
	},
});
