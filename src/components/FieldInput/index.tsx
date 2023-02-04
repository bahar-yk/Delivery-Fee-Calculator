import React from "react";
import "./style.css";

interface IFieldInputprops extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "number" | "datetime-local" | "text";
  name: string;
  label: string;
  postFix?: React.ReactNode;
}

function FieldInput(props: IFieldInputprops) {
  const {
    className = "",
    type = "number",
    name,
    label,
    postFix,
    ...rest
  } = props;
  return (
    <div className={`wolt-field-input ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} min={0} required {...rest} />

      {postFix}
    </div>
  );
}

export default FieldInput;
