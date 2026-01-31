import { UserService } from "@/services/UserService";
import { NextResponse } from "next/server";

export class UserController {
  static async index() {
    const users = await UserService.getAll()
  }
}
