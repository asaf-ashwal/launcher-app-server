import jwt from "jsonwebtoken";
import {config} from "dotenv";
import {GetUserByUserNAndPass} from "../dal/usersD.js";
import { UpdateLastLoginS } from "../service/usersS.js";

config();

export async function sign({username, password}) {
  const user = await GetUserByUserNAndPass({username, password});
  if (!user) throw new Error("user not exist !");
  console.log({user});
  
  const token = jwt.sign(user, process.env.SECRET, {expiresIn: "1d"});
      await UpdateLastLoginS(user.id);
  return `birrer ${token}`;
}

export async function verifay(req, res, next) {
  try {
    const {headers} = req;
    if (!headers || !headers.token)
      return res.status(400).send("missing token !");
    const token = headers.token.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}
