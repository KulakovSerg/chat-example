import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { Chat } from "../Chat";
import { useStore } from "../../hooks";

import type { FC } from "react";
import type { ChatId } from "../../type";

const ChatsObserver: FC = observer(() => {
  const { chatKeys, chatsLoading } = useStore();
  return chatsLoading ? (
    <ChatsLoading />
  ) : (
    <>
      {chatKeys.map((id) => (
        <Chat id={id} key={id} />
      ))}
    </>
  );
});

const ChatsLoading: FC = () => <div>Loading...</div>;

export const ChatsList = () => {
  const { start } = useStore();
  useEffect(() => {
    start();
  }, []);
  return (
    <div>
      <ChatsObserver />
    </div>
  );
};
