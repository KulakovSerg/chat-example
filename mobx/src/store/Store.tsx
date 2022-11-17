import { makeAutoObservable, runInAction } from "mobx";
import { Chat } from "../components/Chat";
import type { Repository } from "../repository";
import { ChatId, Chats, ChatWithMessages, Message, MessageId } from "../type";

export class Store {
  chats: Chats = new Map();
  chatsLoading!: boolean;
  messagesLoading!: boolean;
  activeChat!: ChatId;
  isArchive!: boolean;
  repository: Repository;

  get chatKeys() {
    return Array.from(this.chats.keys());
  }

  constructor(repository: Repository) {
    this.repository = repository;
    makeAutoObservable(this, { repository: false });
  }

  start = async () => {
    await this.getChats();
    this.switchChat(this.chats.values().next().value.id);
  };

  switchChat = (chatId: ChatId) => {
    this.activeChat = chatId;
    this.getMessages(this.activeChat);
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

  getChat = (id: ChatId) => {
    return this.chats.get(id);
  };
}
