// @ts-ignore
import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
// @ts-ignore
import router from "./routes.ts";

const app = new Application();


app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
console.log("Server running on port 8000");