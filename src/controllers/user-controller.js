import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createSession = async (req, res) => {
  const body = req.body;

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: parseInt(body.password),
    },
  });
};

export { createSession };
