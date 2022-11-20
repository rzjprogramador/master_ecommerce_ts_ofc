import express from "express"

import setupMiddlewares from "@src/_main/config/setup_app_use_middlewares"
import { setupRoutes } from "@src/_main/config/routes"
import { setupApolloServer } from "@src/_main/graphql/server/setup_middle_apollo_server"

const app = express()
setupMiddlewares(app)
setupRoutes(app)
setupApolloServer(app)
export default app
