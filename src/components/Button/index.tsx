import { ButtonHTMLAttributes } from "react";

import "../Button/button.scss";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: IButtonProps) {
  return <button className="button" {...props} />;
}

<Button />;
