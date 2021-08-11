import { Express, Request, Response } from "express";
import { createUserHandler } from "../controller/user.controller";
import { validateRequest, requiresUser } from "../middleware";
import {
  createUserSchema,
  createUserSessionSchema,
} from "../schema/user.schema";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from "../controller/session.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  app.post(
    "/api/login",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/currentUser", requiresUser, getUserSessionsHandler);

  app.delete("/api/logout", requiresUser, invalidateUserSessionHandler);
}
