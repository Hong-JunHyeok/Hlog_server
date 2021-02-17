import express from "express"
import router from "./router"
import cors from "cors"
import logger from "morgan"

const app = express()

app.use(express.json()) //bodyParsing
app.use(logger("combined"))
app.use("/api", router)
app.use(cors({ origin: true, credentials: true }))

export default app
