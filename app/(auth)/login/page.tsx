import LoginPage from "./LoginPage"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In form to access dashboard"
};

export default function LoginForm() {
  return (
    <LoginPage />
  )
}
