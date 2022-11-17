import React from "react";
import type { FC } from "react";
import type { Chat as ChatType, ChatId } from "../../type";

export const ChatView: FC<{
  chat: ChatType;
}> = ({ chat: { title, status, unreadMessages } }) => (
  <div>
    <div>{title}</div>
    <div>{status}</div>
    <div>{unreadMessages}</div>
  </div>
);
