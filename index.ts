import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routing.ts";
import notFound from "./handlers/notFound.ts";
import errorMiddleware from "./middlewares/error.ts";

const app = new Application();
const conf = config();

app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`Listening on ${conf.PORT}...`);

await app.listen(`${conf.HOST}:${conf.PORT}`);
