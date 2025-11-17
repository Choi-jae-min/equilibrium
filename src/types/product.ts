import {products} from "@/db/schema";

export type Product = typeof products.$inferSelect;
export type ProductInsert = typeof products.$inferInsert;
