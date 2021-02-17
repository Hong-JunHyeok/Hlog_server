import express from "express"
import router from "./router"
import cors from "cors"
import logger from "morgan"
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger("combined"))
app.use("/api", router)
app.use(cors({ origin: true, credentials: true }))

export default app
