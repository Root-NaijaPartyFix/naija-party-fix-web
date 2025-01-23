import React, { type FC, type CSSProperties } from "react";

interface ReusableButtonProps {
  children: React.ReactNode;
  className?: string;
  radius?: "small" | "large";
  style?: CSSProperties;
  onClick?: () => void;
}

const ReusableButton: FC<ReusableButtonProps> = ({
  children,
  className = "",
  radius = "large",
  style = {},
  onClick,
}) => {
  return (
    <button
      className={`px-[2.5rem] py-[.5rem] md:px-[4rem] md:py-[.7rem] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ReusableButton;
