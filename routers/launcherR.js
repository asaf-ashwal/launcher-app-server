import express from "express";
import {
  getAll,
  getlauncher,
  createLauncher,
  deleteLauncher,
  updateLauncher,
  // updateDestroyed,
} from "../controller/lanuncherC.js";
import {isModiin} from "../midllewer/roles.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getlauncher);
router.post("/", isModiin, createLauncher);
router.delete("/:id", isModiin, deleteLauncher);
router.put("/:id", isModiin, updateLauncher);

// router.put("/:id", isAirForce, updateDestroyed);


export default router;
