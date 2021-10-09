import React from "react";

export type ContainerVariant = "small" | "regular";

interface ContainerProps {
  variant?: ContainerVariant;
}

const Container: React.FC<ContainerProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <div
      className={`mt-8 mx-auto w-full max-w-${
        variant === "regular" ? "lg" : "xs"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
