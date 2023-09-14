import Express from "express";
import { checkPort } from "./src/config/check_enviroment";
import { checkDatabaseUrl } from "./src/config/check_enviroment";
import cors from "cors";
import cors from "cors";
import "dotenv/config";

const app = Express();

app.use(Express.json());

checkPort(process.env.PORT);
checkDatabaseUrl(process.env.DATABASE_URL);

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
