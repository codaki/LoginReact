import { Router } from "express";
import {
  addTActivo,
  deleteTActivo,
  updateTActivo,
  getTActivoId,
  getTActivos,
} from "../controllers/tipoactivo.controller.js";
const router = Router();

router.get("/",getTActivos);
router.get("/:id",getTActivoId);
router.post("/",addTActivo);
router.delete("/:id",deleteTActivo);
router.put("/:id",updateTActivo);
export default router;
