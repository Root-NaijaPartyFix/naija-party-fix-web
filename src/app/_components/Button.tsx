import React, { type FC } from "react";

interface ReusableButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ReusableButton: FC<ReusableButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`${className} rounded-full border px-[2.5rem] py-[.5rem] text-[16px] font-medium outline-none transition-all md:px-[4rem] md:py-[.7rem]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ReusableButton;
