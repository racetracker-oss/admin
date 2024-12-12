import { ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  link?: string;
}

const Button = ({
  type = "button",
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="w-max py-2 px-5 text-base font-medium text-center rounded-lg focus:ring-2 focus:ring-lead bg-lead text-primary hover:bg-lead-dark disabled:bg-disabled disabled:hover:bg-lead"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
