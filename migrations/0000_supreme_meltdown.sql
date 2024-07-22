CREATE TABLE IF NOT EXISTS "credential_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"website" text NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
