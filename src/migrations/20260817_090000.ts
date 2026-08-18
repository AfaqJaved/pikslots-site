import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_todos_fk";
   DROP INDEX "payload_locked_documents_rels_todos_id_idx";
   ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "todos_id";
   ALTER TABLE "todos" DISABLE ROW LEVEL SECURITY;
   DROP TABLE "todos" CASCADE;

   CREATE TABLE "settings" (
     "id" serial PRIMARY KEY NOT NULL,
     "primary_color" varchar DEFAULT '#3B21B6' NOT NULL,
     "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
     "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
   );

   ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "settings_id" integer;
   CREATE INDEX "settings_updated_at_idx" ON "settings" USING btree ("updated_at");
   CREATE INDEX "settings_created_at_idx" ON "settings" USING btree ("created_at");
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_settings_fk" FOREIGN KEY ("settings_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
   CREATE INDEX "payload_locked_documents_rels_settings_id_idx" ON "payload_locked_documents_rels" USING btree ("settings_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_settings_fk";
   DROP INDEX "payload_locked_documents_rels_settings_id_idx";
   ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "settings_id";
   ALTER TABLE "settings" DISABLE ROW LEVEL SECURITY;
   DROP TABLE "settings" CASCADE;

   CREATE TABLE "todos" (
     "id" serial PRIMARY KEY NOT NULL,
     "title" varchar NOT NULL,
     "is_completed" boolean DEFAULT false NOT NULL,
     "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
     "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
   );

   ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "todos_id" integer;
   CREATE INDEX "todos_updated_at_idx" ON "todos" USING btree ("updated_at");
   CREATE INDEX "todos_created_at_idx" ON "todos" USING btree ("created_at");
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_todos_fk" FOREIGN KEY ("todos_id") REFERENCES "public"."todos"("id") ON DELETE cascade ON UPDATE no action;
   CREATE INDEX "payload_locked_documents_rels_todos_id_idx" ON "payload_locked_documents_rels" USING btree ("todos_id");`)
}
