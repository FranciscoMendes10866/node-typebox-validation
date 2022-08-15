import Koa from "koa";
import Router from "@koa/router";
import koaBody from "koa-body";

import { profileSchema, ProfileSchemaType } from "./schema";
import { validatorFactory } from "./validator";

const profileValidation = validatorFactory<ProfileSchemaType>(profileSchema);

const app = new Koa();
const router = new Router();

app.use(koaBody());

router.post("/", (ctx) => {
  const body = ctx.request.body as ProfileSchemaType;
  const data = profileValidation.verify(body);
  ctx.body = data;
});

app.use(router.routes());

app.listen(3000);
