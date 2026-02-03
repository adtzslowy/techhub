import bcrypt from "bcryptjs";

async function run() {
  const password = "d476ead1";
  const hash = await bcrypt.hash(password, 10);
  console.log(hash)
}

run();



