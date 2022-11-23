import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import { useStore } from '../../hooks';
import type { ChatId, Message as MessageType, MessageId } from '../../type';
import { MessageView } from './MessageView';

export const Message: FC<{ chatId: ChatId; id: MessageId }> = observer(({ chatId, id }) => {
  const { getMessage } = useStore();
  const message = getMessage(chatId, id) as MessageType;
  const { text, status, time } = message;
  return <MessageView text={text} status={status} time={time} chatId={chatId} />;
});
