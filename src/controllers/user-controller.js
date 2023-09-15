import { PrismaClient } from "@prisma/client";
import { generateToken } from "../utils/generateToken.js";

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  const body = req.body;

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  const token = generateToken(user.id);

  res.status(200).json({ user: user, token: token });
};

const getUser = async (req, res) => {
  const id = req.body.id;

  const user = await prisma.user.findMany({
    where: {
      id: id,
    },
  });

  if (!Array.isArray(user) || user.length === 0) {
    res.status(404).json({ error: "el usuario no exixte" });
  }
  res.status(200).json(user);
};

export { createUser, getUser };
