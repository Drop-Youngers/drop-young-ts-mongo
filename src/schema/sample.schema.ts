import { object, string, date, boolean } from "yup";

const payload = {
  body: object({
    fieldString: string().required("FieldString must be defined"),
    fieldDate: date()
      .min(new Date())
      .max(
        new Date(
          new Date().getFullYear() + 1,
          new Date().getMonth(),
          new Date().getDate()
        )
      )
      .required("FieldDate must be defined"),
    fieldBoolean: boolean(),
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
