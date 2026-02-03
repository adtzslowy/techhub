import { pgTable, serial, text, timestamp, integer, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const roleEnum = pgEnum('role', ['USER', 'ADMIN']);

// Table users
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: roleEnum('role').default('USER').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Table bidang
export const bidang = pgTable('bidang', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// table aggregat user dan bidang
export const userBidang = pgTable('user_bidang', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  bidangId: integer('bidang_id').notNull().references(() => bidang.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
  userBidang: many(userBidang),
}));

export const bidangRelations = relations(bidang, ({ many }) => ({
  userBidang: many(userBidang),
}));

export const userBidangRelations = relations(userBidang, ({ one }) => ({
  user: one(users, {
    fields: [userBidang.userId],
    references: [users.id],
  }),
  bidang: one(bidang, {
    fields: [userBidang.bidangId],
    references: [bidang.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Bidang = typeof bidang.$inferSelect;
export type UserBidang = typeof userBidang.$inferSelect;
