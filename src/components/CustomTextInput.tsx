import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { FieldRenderProps } from "react-final-form";

type CustomTextInputProps = TextFieldProps &
  FieldRenderProps<any, HTMLElement, any> & {
    label: string;
  };

export const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
  const { meta, input } = props;
  const isError = !!meta.touched && !!meta.error;
  return (
    <div className="mb-3 flex flex-col">
      <label className="text-gray-800 text-sm">{props.label}</label>
      <TextField error={isError} variant={props.variant} {...input} />
      {isError && <span>{meta.error}</span>}
    </div>
  );
};
