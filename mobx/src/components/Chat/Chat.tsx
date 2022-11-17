import React from "react";
import { useStore } from "../../hooks";
import { observer } from "mobx-react";
import { ChatView } from "./ChatView";

import type { FC } from "react";
import type { Chat as ChatType, ChatId } from "../../type";

const ChatObserver = observer(ChatView);

export const Chat: FC<{ id: ChatId }> = ({ id }) => {
  const { getChat } = useStore();
  const chat = getChat(id) as ChatType;

  return <ChatObserver chat={chat} />;
};
