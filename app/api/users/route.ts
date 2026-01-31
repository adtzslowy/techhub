import { UserController } from "@/controllers/UserController";

export async function GET() {
  return UserController.index();
}
