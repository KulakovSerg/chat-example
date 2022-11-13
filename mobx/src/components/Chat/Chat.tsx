import React from "react";
import type { FC } from "react";
import type { Chat as ChatType } from "../../store/types";

export const Chat: FC<ChatType> = ({
  title,
  status,
  unreadMessages,
}: ChatType) => {
  return (
    <div>
      <div>{title}</div>
      <div>{status}</div>
      <div>{unreadMessages}</div>
    </div>
  );
};
