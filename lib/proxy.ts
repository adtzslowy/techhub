import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const session = await auth();

  if (!session) redirect("/login")

  return session;
}

export async function requireRole(roles: Array<"ADMIN" | "ANGGOTA" | "MAHASISWA">) {
  const session = await requireAuth();

  if (!roles.includes(session.user.role)) {
    redirect("/unauthorized")
  }

  return session
}

export async function requreBidang(bidangId: number) {
  const session = await requireAuth();

  if (!session.user.bidangIds.includes(bidangId)) {
    redirect("/unauthorized")
  }

  return session
}

export default function proxy() { }
