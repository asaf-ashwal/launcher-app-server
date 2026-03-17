import express from "express";
import {
  getAll,
  getlauncher,
  createLauncher,
  deleteLauncher,
  updateLauncher,
  updateDestroyedLauncher,
  // updateDestroyed,
} from "../controller/lanuncherC.js";
import {isAirForce, isModiin} from "../midllewer/roles.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getlauncher);
router.post("/", isModiin, createLauncher);
router.delete("/:id", isModiin, deleteLauncher);
router.put("/destroyed/:id", isAirForce, updateDestroyedLauncher);
router.put("/:id", isModiin, updateLauncher);



export default router;
