import { SERVER_PORT, MONGO_URI } from "./config/server.config"
import express, { Request, Response } from "express"
import app from "./app"
import mongoose from "mongoose"

const server = express()

server.use(app)

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err))

server.listen(SERVER_PORT, () => {
    console.log(`server is listening ${SERVER_PORT}`)
})
