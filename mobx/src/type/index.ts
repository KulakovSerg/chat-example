export enum MessageStatus {
  SENDING = 'SENDING',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  READ = 'READ',
  NOT_SENT = 'NOT_SENT',
}

export enum MessageDirection {
  INCOMING = 'INCOMING',
  OUTCOMING = 'OUTCOMING',
}

export enum ChatStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVE = 'ARCHIVE',
}

export type MessageId = string;
export type ChatId = string;
export type Time = string;

export type Message = {
  id: MessageId;
  text: string;
  direction: MessageDirection;
  status: MessageStatus;
  time: Time;
  chatId: ChatId;
};

export type Messages = Map<MessageId, Message>;

export type Chat = {
  id: ChatId;
  title: string;
  status: ChatStatus;
  unreadMessages: number;
  isActive: boolean;
};

export type Chats = Map<ChatId, ChatWithMessages>;

export type ChatWithMessages = {
  messages: Map<MessageId, Message>;
} & Chat;
