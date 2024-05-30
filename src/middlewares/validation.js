import { Types } from "mongoose";

export function validation(schema) {
  return (req, res, next) => {
    const data = { ...req.body, ...req.params, ...req.query };
    const result = schema.validate(data, { abortEarly: false });
    if (result.error) {
      const errorMsg = result.error.details.map((messObj) => {
        return messObj.message;
      });
      return next(new Error(errorMsg));
    } else {
      next();
    }
  };
}

export const validateObjectId = (value, helper) => {
  if (Types.ObjectId.isValid(value)) return true;
  return helper.message("Invalid objectId", { cause: 400 });
};
