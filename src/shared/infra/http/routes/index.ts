import { Router } from "express";

import { encriptsRouting } from "./encripts.routing";

const router = Router();
router.use("/encryptions", encriptsRouting);

export { router };
