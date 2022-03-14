import { InputHTMLAttributes } from "react";

import "../Input/input.scss";

interface IIpuntProps extends InputHTMLAttributes<HTMLInputElement> {
  background?: string;
}

export function Input(props: IIpuntProps) {
  return <input className="input" {...props} />;
}
