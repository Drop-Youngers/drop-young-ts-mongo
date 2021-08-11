import { Request, Response } from "express";
import { get } from "lodash";
import {
  createSample,
  findSample,
  findAll,
  findAndUpdate,
  deleteSample,
} from "../service/sample.service";
import formatResult from "../utils/response.utils";

export async function createSampleHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const body = req.body;

  const sample = await createSample({ ...body, user: userId });

  return res
    .status(201)
    .send(formatResult(201, "Sample created successfully", sample));
}

export async function updateSampleHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const sampleId = get(req, "params.sampleId");
  const update = req.body;

  const sample = await findSample({ sampleId });

  if (!sample) {
    return res.status(404).send(formatResult(404, "Sample not found"));
  }

  if (String(sample.user) !== userId) {
    return res.status(401).send(formatResult(401, "This is not your sample"));
  }

  const updatedSample = await findAndUpdate({ sampleId }, update, { new: true });

  return res
    .status(201)
    .send(formatResult(201, "Sample updated successfully", updatedSample));
}

export async function getSampleHandler(req: Request, res: Response) {
  const sampleId = get(req, "params.sampleId");
  const sample = await findSample({ sampleId });

  if (!sample) {
    return res.status(404).send(formatResult(404, "Sample not found"));
  }

  return res
    .status(200)
    .send(formatResult(200, "Sample retrieved successfully", sample));
}

export async function getAllHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  console.log(userId);

  const items = await findAll({ userId });

  return res
    .status(200)
    .send(formatResult(200, "Samples retrieved successfully", items));
}

export async function deleteSampleHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const sampleId = get(req, "params.sampleId");

  const sample = await findSample({ sampleId });

  if (!sample) {
    return res.status(404).send(formatResult(404, "Sample not found"));
  }

  if (String(sample.user) !== String(userId)) {
    return res.status(403).send(formatResult(403, "This is not your sample"));
  }

  await deleteSample({ sampleId });

  return res.status(204).send(formatResult(204, "Sample deleted successfully"));
}
