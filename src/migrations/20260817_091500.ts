import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "team" (
     "id" serial PRIMARY KEY NOT NULL,
     "name" varchar NOT NULL,
     "role" varchar NOT NULL,
     "description" varchar,
     "image_id" integer,
     "order" numeric DEFAULT 0,
     "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
     "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
   );

   ALTER TABLE "team" ADD CONSTRAINT "team_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
   CREATE INDEX "team_updated_at_idx" ON "team" USING btree ("updated_at");
   CREATE INDEX "team_created_at_idx" ON "team" USING btree ("created_at");
   CREATE INDEX "team_order_idx" ON "team" USING btree ("order");

   ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "team_id" integer;
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
   CREATE INDEX "payload_locked_documents_rels_team_id_idx" ON "payload_locked_documents_rels" USING btree ("team_id");

   CREATE TABLE "pages_blocks_team_rels" (
     "id" serial PRIMARY KEY NOT NULL,
     "order" integer,
     "parent_id" varchar NOT NULL,
     "path" varchar NOT NULL,
     "team_id" integer
   );

   ALTER TABLE "pages_blocks_team_rels" ADD CONSTRAINT "pages_blocks_team_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
   ALTER TABLE "pages_blocks_team_rels" ADD CONSTRAINT "pages_blocks_team_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
   CREATE INDEX "pages_blocks_team_rels_order_idx" ON "pages_blocks_team_rels" USING btree ("order");
   CREATE INDEX "pages_blocks_team_rels_parent_idx" ON "pages_blocks_team_rels" USING btree ("parent_id");
   CREATE INDEX "pages_blocks_team_rels_path_idx" ON "pages_blocks_team_rels" USING btree ("path");
   CREATE INDEX "pages_blocks_team_rels_team_id_idx" ON "pages_blocks_team_rels" USING btree ("team_id");

   ALTER TABLE "pages_blocks_team_members" DISABLE ROW LEVEL SECURITY;
   DROP TABLE "pages_blocks_team_members" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_team_rels" DISABLE ROW LEVEL SECURITY;
   DROP TABLE "pages_blocks_team_rels" CASCADE;

   CREATE TABLE "pages_blocks_team_members" (
     "_order" integer NOT NULL,
     "_parent_id" varchar NOT NULL,
     "id" varchar PRIMARY KEY NOT NULL,
     "name" varchar NOT NULL,
     "role" varchar NOT NULL,
     "description" varchar,
     "image_id" integer
   );

   ALTER TABLE "pages_blocks_team_members" ADD CONSTRAINT "pages_blocks_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
   ALTER TABLE "pages_blocks_team_members" ADD CONSTRAINT "pages_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
   CREATE INDEX "pages_blocks_team_members_order_idx" ON "pages_blocks_team_members" USING btree ("_order");
   CREATE INDEX "pages_blocks_team_members_parent_id_idx" ON "pages_blocks_team_members" USING btree ("_parent_id");
   CREATE INDEX "pages_blocks_team_members_image_idx" ON "pages_blocks_team_members" USING btree ("image_id");

   ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_team_fk";
   DROP INDEX "payload_locked_documents_rels_team_id_idx";
   ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "team_id";

   ALTER TABLE "team" DISABLE ROW LEVEL SECURITY;
   DROP TABLE "team" CASCADE;`)
}
