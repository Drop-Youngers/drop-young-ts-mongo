import { Express, Request, Response } from "express";
import { errorHandler, validateRequest, requiresUser } from "../middleware";
import {
  createSampleSchema,
  updateSampleSchema,
  deleteSampleSchema,
} from "../schema/sample.schema";
import {
  createSampleHandler,
  updateSampleHandler,
  getAllHandler,
  getSampleHandler,
  deleteSampleHandler,
} from "../controller/sample.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post(
    "/api/sample",
    [
      requiresUser,
      validateRequest(createSampleSchema),
      errorHandler(createSampleHandler),
    ],
    createSampleHandler
  );

  app.put(
    "/api/sample/:sampleId",
    [
      requiresUser,
      validateRequest(updateSampleSchema),
      errorHandler(updateSampleHandler),
    ],
    updateSampleHandler
  );

  app.get(
    "/api/sample/:sampleId",
    [requiresUser, errorHandler(getSampleHandler)],
    getSampleHandler
  );

  app.get("/api/sample/", [errorHandler(getAllHandler)], getAllHandler);

  app.delete(
    "/api/sample/:sampleId",
    [
      requiresUser,
      validateRequest(deleteSampleSchema),
      errorHandler(deleteSampleHandler),
    ],
    deleteSampleHandler
  );
}
