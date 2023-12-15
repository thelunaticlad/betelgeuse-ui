import React from "react";
import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
