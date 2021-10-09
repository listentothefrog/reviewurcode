import React from "react";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <div
      className={`mt-8 mx-auto w-full max-w-${
        variant === "regular" ? "lg" : "md"
      }`}
    >
      {children}
    </div>
  );
};
