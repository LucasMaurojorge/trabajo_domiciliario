import Express from "express";
import { checkPort } from "./src/config/check_enviroment.js";
import cors from "cors";
import cors from "cors";
import "dotenv/config";

const app = Express();

app.use(Express.json());

checkPort(process.env.PORT);

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use("/", router);

const port = process.env.PORT;
app.listen(port, () => console.log(`server running on port ${port}`));
