import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import formatResult from "../utils/response.utils";

const requiresUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = get(req, "user");

  if (!user) {
    return res.status(403).send(formatResult(403, "You are not Logged In"));
  }

  return next();
};

export default requiresUser;
