import Express from "express";
import {
  checkPort,
  checkDatabaseUrl,
  checkSecretKey,
} from "./src/config/check_enviroment.js";
import cors from "cors";
import router from "./src/routes/router.js";
import "dotenv/config";

const app = Express();

app.use(Express.json());

checkPort(process.env.PORT);
checkDatabaseUrl(process.env.DATABASE_URL);
checkSecretKey(process.env.JWT_ACCESS_SECRET);

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
