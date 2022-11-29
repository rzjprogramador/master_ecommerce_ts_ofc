import "module-alias/register"
import "express-async-errors"

import app from "@src/_main/config/app"
import { env } from "@src/_main/env/enviroments"

const PORT: number = env.portExpress

app.listen(PORT, () => console.log(`SERVER_ON >> ${PORT}`))
