import React from "react";

type ButtonProps = {
  className?: string;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ className = "", label }) => (
  <button className={`button ${className}`}>{label}</button>
);

export default Button;
