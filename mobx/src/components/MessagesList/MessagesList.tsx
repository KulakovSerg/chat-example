import React from "react";
import { Message } from "../Message";
import type { FC } from "react";
import type { Message as MessaageType } from "../../type";

export const MessagesList: FC<{ messages: MessaageType[] }> = ({
  messages,
}) => {
  return (
    <div>
      {messages.map((message) => (
        <Message {...message} />
      ))}
    </div>
  );
};
