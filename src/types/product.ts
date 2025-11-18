import {productImages, products} from "@/db/schema";

export type Product = typeof products.$inferSelect & {
    image :typeof productImages.$inferSelect | null;
};
export type ProductInsert = typeof products.$inferInsert;

