import type { Chat, Message } from '../type';

export interface Repository {
  getMessages: (chatId: string) => Promise<Message[]>;
  getActiveChats: () => Promise<Chat[]>;
  getArchiveChats: () => Promise<Chat[]>;
}
