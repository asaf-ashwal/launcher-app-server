import express from "express";
import {
  getAll,
  getlauncher,
  createLauncher,
  deleteLauncher,
    updateLauncher,
} from "../controller/lanuncherC.js";

const router = express.Router()


router.get('/', getAll)
router.get("/:id", getlauncher);
router.post("/", createLauncher);
router.delete("/:id", deleteLauncher);

router.put("/:id", updateLauncher);


export default router