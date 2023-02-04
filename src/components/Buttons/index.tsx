import React from "react";
import './style.css'

interface Ibuttonsprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit";
  children: React.ReactNode;
}
function Buttons(props: Ibuttonsprops) {
  const { type, children, ...rest } = props;

  return (
    <div className="button">
    <button type={type} {...rest}>
      {children}
    </button>
    </div>
  );
}
export default Buttons;
