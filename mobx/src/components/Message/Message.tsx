import React from "react";
import type { FC } from "react";
import type { Message as MessageType } from "../../store/types";

export const Message: FC<MessageType> = ({ text, status }: MessageType) => {
  return (
    <div>
      <div>{text}</div>
      <div>{status}</div>
    </div>
  );
};
