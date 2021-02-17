import { SERVER_PORT } from "./config/server.config"
import express, { Request, Response } from "express"
import app from "./app"

const server = express()

server.use(app)

server.listen(SERVER_PORT, () => {
    console.log(`server is listening ${SERVER_PORT}`)
})
