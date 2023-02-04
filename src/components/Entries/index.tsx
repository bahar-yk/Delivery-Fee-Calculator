import React from "react";
import "./index.css";

interface Ientriesprops extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "number" | "datetime-local" | "text";
  name: string;
  label: string;
  
  postFix?: React.ReactNode;
}

function Entries(props: Ientriesprops) {
  const { type = "number", name, label, postFix, ...rest } = props;
  return (
    <div className="entries">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} min={0} required {...rest} />
      
      {postFix}
    </div>
  );
}

export default Entries;
