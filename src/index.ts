import * as Koa from "koa"
import * as Router from "koa-router"
import * as bodyParser from "koa-bodyparser"
import { SERVER_PORT } from "./config/server.config"

const app = new Koa()
const router = new Router()

//middleware
app.use(bodyParser())

router.get("/", (ctx: Koa.ParameterizedContext) => {
    ctx.body = {
        message: "Welcome to HLOG server",
    }
})

app.use(router.routes())

app.listen(SERVER_PORT, () => {
    console.log(`Koa server is listening on SERVER_PORT ${SERVER_PORT}`)
})
