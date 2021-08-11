import { createUser } from "../service/user.service";
import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";
import formatResult from "../utils/response.utils";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res
      .status(201)
      .send(
        formatResult(
          201,
          "User registered successfully",
          omit(user.toJSON(), "password")
        )
      );
  } catch (e) {
    log.error(e);
    return res.status(409).send(formatResult(409, e.message));
  }
}
