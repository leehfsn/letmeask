import { ButtonHTMLAttributes } from "react";

import "../Button/button.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
}

export function Button(props: IButtonProps) {
  return <button className="button" {...props} />;
}
