import { UserModel } from "@/models/user.model"
import bcrypt from "bcryptjs"

export const AuthService = {
  async validate(email: string, password: string) {
    const user = await UserModel.findByEmail(email)
    if (!user) return null

    const isValid = await bcrypt.compare(
      password,
      user.password
    )

    if (!isValid) return null

    const { password, ...safeUser } = user

    return safeUser
  }
}
