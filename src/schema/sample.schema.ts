import { object, string, date, boolean } from "yup";

const payload = {
  body: object({
    task: string().required("Task must be defined"),
    deadline: date()
      .min(new Date())
      .max(
        new Date(
          new Date().getFullYear() + 1,
          new Date().getMonth(),
          new Date().getDate()
        )
      )
      .required("Deadline must be defined"),
    isCompleted: boolean(),
  }),
};

const params = {
  params: object({
    sampleId: string().required("sampleId is required"),
  }),
};

export const createSampleSchema = object({
  ...payload,
});

export const updateSampleSchema = object({
  ...params,
  ...payload,
});

export const deleteSampleSchema = object({
  ...params,
});
