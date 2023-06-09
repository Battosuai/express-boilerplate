import express from "express";
import * as Notes from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/notes", Notes.List);
router.post("/notes", Notes.Create);
router.get("/notes/:id", Notes.Read);
router.put("/notes/:id", Notes.Update);
router.delete("/notes/:id", Notes.DeleteNote);

export default router;
