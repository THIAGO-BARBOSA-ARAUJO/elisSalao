import express from "express"
import { getAllServices} from "../controllers/controllerServices.js"

const router = express.Router()

// router.post("/student", registrationStudent)

//router.get("/student", getStudent)

//router.get("/students", getAllStudents)

//router.put("/student/:id", updateStudent)

//router.delete("/student/:id", deleteStudent)

//router.get("/cep/:cep", getCep)

router.get("/services", getAllServices)

export default router