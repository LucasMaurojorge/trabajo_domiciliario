import { PrismaClient } from "@prisma/client";
import { generateToken } from "../utils/generateToken.js";
import { verifyToken } from "../middleware/verifyToken.js";

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const body = req.body;

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    if (err.code === "P2002") {
      res.json({ error: "las credenciales del usuario se repiten" });
    } else {
      res.json(err);
    }
  }
};

const loginUser = async (req, res) => {
  const body = req.body;

  const user = await prisma.user.findMany({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (Object.keys(user).length === 0) {
    res.status(404).json({ error: "el usuario no exixte" });
  }

  const token = generateToken(user);
  res.json({ token: token });
};

const getUser = async (req, res) => {
  const payload = await verifyToken(req.body.token);

  if (!payload.login) {
    res.status(400).json({ error: "tienes que iniciar sesion" });
  }

  const user = await prisma.user.findMany({
    where: {
      id: payload.data.user[0].id,
    },
  });

  if (!Array.isArray(user) || user.length === 0) {
    res.status(404).json({ error: "el usuario no exixte" });
  }
  res.status(200).json(user);
};

export { createUser, loginUser, getUser };
