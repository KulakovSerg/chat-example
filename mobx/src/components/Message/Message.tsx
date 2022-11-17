import React from "react";
import { formatTime } from "../../utils";
import type { FC } from "react";
import type { Message as MessageType } from "../../type";

export const Message: FC<MessageType> = ({
  text,
  status,
  time,
}: MessageType) => {
  return (
    <div>
      <div>{text}</div>
      <div>{status}</div>
      <div>{formatTime(new Date(time))}</div>
    </div>
  );
};
