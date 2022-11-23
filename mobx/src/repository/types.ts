import type { Chat, ChatId, Message, MessageId } from '../type';

export type ChatsUpdater = (data: { [key: ChatId]: Chat }) => void;
export type MessagesUpdater = (data: { [key: MessageId]: Message }) => void;

export interface Repository {
  getMessages: (chatId: string) => Promise<Message[]>;
  getActiveChats: () => Promise<Chat[]>;
  getArchiveChats: () => Promise<Chat[]>;
  updateChats: (callback: ChatsUpdater) => void;
  updateMessages: (callback: MessagesUpdater) => void;
}
