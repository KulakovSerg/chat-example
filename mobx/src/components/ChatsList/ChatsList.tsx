import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

import { useStore } from '../../hooks';
import { Chat } from '../Chat';
import { ChatsListLoading } from './ChatsListLoading';
import { ChatsListView } from './ChatsListView';

export const ChatsList = observer(() => {
  const { start, chats, chatsLoading } = useStore();

  useEffect(() => {
    start();
  }, [start]);

  return chatsLoading ? (
    <ChatsListLoading />
  ) : (
    <ChatsListView>
      {Array.from(chats.keys()).map((id) => (
        <Chat id={id} key={id} />
      ))}
    </ChatsListView>
  );
});
