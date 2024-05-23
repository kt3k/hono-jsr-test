import { Hono } from "@hono/do-not-use-this";

const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

export default app
