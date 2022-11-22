import type { ChatId, Chats, ChatWithMessages, Message, MessageId } from '../type';

export interface StoreInterface {
  chats: Chats;
  chatsLoading: boolean;
  messagesLoading: boolean;
  selectedChatId: string;
  start(): void;
  selectChat(id: ChatId): void;
  getChat(id: ChatId): ChatWithMessages | undefined;
  getMessage(chatId: ChatId, id: MessageId): Message | undefined;
}
