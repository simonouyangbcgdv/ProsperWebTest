import React, { MouseEvent } from 'react';

export interface ButtonProps {
  label: string;
  onClick?: (event: MouseEvent) => void;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;
