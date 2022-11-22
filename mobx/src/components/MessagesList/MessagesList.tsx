import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import { useStore } from '../../hooks';
import type { ChatWithMessages } from '../../type';
import { Message } from '../Message';
import { MessagesListLoading } from './MessagesListLoading';
import { MessagesListView } from './MessagesListView';

export const MessagesList: FC = observer(() => {
  const { messagesLoading, getChat, selectedChatId } = useStore();
  const { messages } = (getChat(selectedChatId) || {}) as ChatWithMessages;

  return messagesLoading || !selectedChatId || !messages ? (
    <MessagesListLoading />
  ) : (
    <MessagesListView>
      {Array.from(messages.keys()).map((id) => (
        <Message id={id} chatId={selectedChatId} key={id} />
      ))}
    </MessagesListView>
  );
});
