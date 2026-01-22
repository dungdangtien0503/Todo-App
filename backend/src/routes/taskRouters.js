import express from "express";
import {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/taskControllers.js";

const router = express.Router();

// tạo api
router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;


