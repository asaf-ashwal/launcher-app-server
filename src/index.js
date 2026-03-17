import express from "express";
import cors from "cors";
import {config} from "dotenv";
import launcherR from "./routers/launcherR.js";
import usersR from "./routers/usersR.js";
import {verifay} from "./midllewer/auth.js";
config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/launchers", verifay, launcherR);
app.use("/api/auth", usersR);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
