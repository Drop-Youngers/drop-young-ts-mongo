import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Sample, { SampleDocument } from "../model/sample.model";
import Session, { SessionDocument } from "../model/session.model";

export function createSample(input: DocumentDefinition<SampleDocument>) {
  return Sample.create(input);
}

export function findSample(
  query: FilterQuery<SampleDocument>,
  options: QueryOptions = { lean: true }
) {
  return Sample.findOne(query, {}, options);
}

export function findAll(query: FilterQuery<SessionDocument>) {
  return Sample.find();
}

export function findAndUpdate(
  query: FilterQuery<SampleDocument>,
  update: UpdateQuery<SampleDocument>,
  options: QueryOptions
) {
  return Sample.findOneAndUpdate(query, update, options);
}

export function deleteSample(query: FilterQuery<SampleDocument>) {
  return Sample.deleteOne(query);
}
