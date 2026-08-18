import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_contact" (
   	"_order" integer NOT NULL,
   	"_path" varchar NOT NULL,
   	"id" serial PRIMARY KEY NOT NULL,
   	"heading" varchar DEFAULT 'Get in touch',
   	"description" varchar,
   	"contact_info_email" varchar,
   	"contact_info_phone" varchar,
   	"contact_info_address" varchar,
   	"form_submit_label" varchar DEFAULT 'Send Message',
   	"form_success_message" varchar DEFAULT 'Thank you! We will get back to you shortly.',
   	"block_name" varchar,
   	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_parent_idx" ON "pages_blocks_contact" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_contact" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_contact" CASCADE;`)
}
