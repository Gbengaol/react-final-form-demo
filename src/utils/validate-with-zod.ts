import { ZodObject } from "zod";

export const validateWithZod = ({
  values,
  schema,
}: {
  values: Record<string, string>;
  schema: ZodObject<any>;
}) => {
  const newErrors = schema.safeParse(values);
  return newErrors.error?.errors.reduce((val, error) => {
    const { path, message } = error;
    val[path?.toString()] = message;
    return val;
  }, {} as Record<string, string>);
};
