import { Hono } from "hono";
import { handle } from "hono/vercel";

import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/accounts", accounts); // Define the route directly

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof app; // Use `app` for type inference
