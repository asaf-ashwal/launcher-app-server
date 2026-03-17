import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  login,
  getUser,
  getAllUser,
} from "../controller/usersC.js";
import {verifay} from "../midllewer/auth.js";
import {isAdmin} from "../midllewer/roles.js";

const router = express.Router();

router.post("/register/create", verifay, isAdmin, createUser);

router.put("/register/update/:id", verifay, isAdmin, updateUser);

router.delete("/register/delete/:id", verifay, isAdmin, deleteUser);

router.post("/login", login);

router.get("/getUser",verifay, getUser);

router.get("/getAllUser",verifay, getAllUser);

export default router;
