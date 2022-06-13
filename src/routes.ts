// @ts-ignore
import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
const router = new Router();

router
    .get('/', (context) => {
        context.response.body = 'Hello World!';
    })
    .get('/users', (context) => {
        context.response.body = 'Hello Users!';
    });

export default router;