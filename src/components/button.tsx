import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button style={{ background: "red" }}>{children}</button>;
};

export default Button;
