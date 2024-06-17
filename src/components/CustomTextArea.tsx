import { TextFieldProps, TextareaAutosize } from "@mui/material";
import React from "react";
import { FieldRenderProps } from "react-final-form";

type CustomTextAreaProps = TextFieldProps &
  FieldRenderProps<any, HTMLElement, any> & {
    label: string;
  };

export const CustomTextArea: React.FC<CustomTextAreaProps> = (props) => {
  const { meta, input } = props;
  return (
    <div className="mb-3 flex flex-col">
      <label className="text-gray-800 text-sm">{props.label}</label>
      <TextareaAutosize minRows={4} aria-label={props.label || ""} {...input} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};
