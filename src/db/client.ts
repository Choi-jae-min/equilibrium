// src/db/client.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/db/schema";

const pool =
    globalThis.pool ??
    new Pool({
        connectionString: process.env.SUPABASE_DB_URL!,
    });

const dbInstance = drizzle(pool, { schema });

export const db = globalThis.db ?? dbInstance;

if (!globalThis.pool) {
    globalThis.pool = pool;
}
if (!globalThis.db) {
    globalThis.db = dbInstance;
}

declare global {
    var pool: Pool | undefined;
    var db: typeof dbInstance | undefined;
}
