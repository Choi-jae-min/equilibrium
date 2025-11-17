import {
    pgTable,
    text,
    integer,
    timestamp, uuid, pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const productTypeEnum = pgEnum("product_type", [
    "COFFEE",
    "DESSERT",
    "BEVERAGE",
    "TEA",
    "FILTER_COFFEE",
]);

export const products = pgTable("products", {
    id: uuid("id").defaultRandom().primaryKey(),
    koreaName: text("koreaName").notNull(),
    englishName: text("englishName").notNull(),
    description: text("description"),
    price: integer("price").notNull(),
    productType: productTypeEnum("productType").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});
export const productImages = pgTable("product_images", {
    id: uuid("id").defaultRandom().primaryKey(),
    productId: uuid("product_id")
        .notNull()
        .references(() => products.id, { onDelete: "cascade" })
        .unique(),
    imageKey: text("image_key").notNull(),
});

export const productRelations = relations(products, ({ one }) => ({
    image: one(productImages, {
        fields: [products.id],
        references: [productImages.productId],
    }),
}));

export const productImageRelations = relations(productImages, ({ one }) => ({
    product: one(products, {
        fields: [productImages.productId],
        references: [products.id],
    }),
}));
