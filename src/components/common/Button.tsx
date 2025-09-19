import React from "react";

type ButtonProps = {
  className?: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ className = "", label, onClick, type = "button" }) => (
  <button className={`button ${className}`} onClick={onClick} type={type}>
    {label}
  </button>
);

export default Button;
