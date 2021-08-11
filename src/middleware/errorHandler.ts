import { Request, Response, NextFunction } from "express";
import log from "../logger";
import formatResult from "../utils/response.utils";

const errorHandler =
  (handler: Function) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      handler(req, res);
      return next();
    } catch (e) {
      log.error(e);
      return res.status(500).send(formatResult(500, e.errors));
    }
  };

export default errorHandler;
