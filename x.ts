import { Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

export default app
