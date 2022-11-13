import React from "react";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label || "Button"}</button>;
};

export default Button;
