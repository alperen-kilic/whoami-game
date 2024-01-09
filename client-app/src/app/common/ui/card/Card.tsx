import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  centered?: boolean;
  bordered?: boolean;
  className?: string;
};

const Card = (props: Props) => {
  return (
    <div
      className={clsx("pt-1 pb-6 px-2 bg-white rounded-md drop-shadow-md", props.className, {
        ["text-center flex flex-col justify-center items-center"]: props.centered,
      })}
    >
      {props.children}
    </div>
  );
};

export default Card;
