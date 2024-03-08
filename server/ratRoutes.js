import { Router } from "express";
import {
  retrieveAllRats,
  submitIncident,
  destroyAllRats,
} from "./controllers.js";

const router = Router();

router.get("/", retrieveAllRats);

router.post("/", submitIncident);

router.put("/destroy", destroyAllRats);

export { router as ratRouter };
