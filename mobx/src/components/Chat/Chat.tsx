import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import { useStore } from '../../hooks';
import type { Chat as ChatType, ChatId } from '../../type';
import { ChatView } from './ChatView';

export const Chat: FC<{ id: ChatId }> = observer(({ id }) => {
  const { getChat, selectChat } = useStore();
  const { title, status, unreadMessages, isActive } = getChat(id) as ChatType;

  return (
    <ChatView
      id={id}
      title={title}
      status={status}
      unreadMessages={unreadMessages}
      isActive={isActive}
      selectChat={selectChat}
    />
  );
});
