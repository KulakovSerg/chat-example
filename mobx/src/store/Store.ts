import { makeAutoObservable, runInAction } from 'mobx';

import type { Repository } from '../repository';
import type { ChatId, Chats, Message, MessageId, Messages } from '../type';
import type { StoreInterface } from './types';

export class Store implements StoreInterface {
  chats: Chats = new Map();
  messages: Messages = new Map();
  chatsLoading!: boolean;
  messagesLoading!: boolean;
  isArchive!: boolean;
  repository: Repository;
  selectedChatId!: string;

  constructor(repository: Repository) {
    this.repository = repository;
    makeAutoObservable(this, { repository: false });
  }

  start = async () => {
    await this.getChats();
    const firstChatId = this.chats.values().next().value.id;
    setTimeout(() => this.selectChat(firstChatId), 0);
  };

  getChats = async () => {
    this.chats.clear();
    this.chatsLoading = true;

    const getterMethod = this.isArchive
      ? this.repository.getArchiveChats
      : this.repository.getActiveChats;

    const chats = await getterMethod();

    runInAction(() => {
      chats.forEach((chat) => {
        this.chats.set(chat.id, {
          ...chat,
          messages: new Map<MessageId, Message>(),
        });
      });

      this.chatsLoading = false;
    });
  };

  getMessages = async (chatId: ChatId) => {
    const chat = this.getChat(chatId);

    if (chat) {
      this.messagesLoading = true;

      const messages = await this.repository.getMessages(chatId);

      runInAction(() => {
        messages.forEach((message) => {
          chat.messages.set(message.id, message);
        });

        this.messagesLoading = false;
      });
    }
  };

  getChat = (chatId: ChatId) => {
    return this.chats.get(chatId);
  };

  getMessage = (chatId: ChatId, messageId: MessageId) => {
    return this.chats.get(chatId)?.messages?.get(messageId);
  };

  selectChat = (id: ChatId) => {
    if (id !== this.selectedChatId) {
      const oldChat = this.getChat(this.selectedChatId);
      if (oldChat) {
        oldChat.isActive = false;
      }

      const newChat = this.getChat(id);
      if (newChat) {
        newChat.isActive = true;
        this.getMessages(id);
        this.selectedChatId = id;
      }
    }
  };
}
