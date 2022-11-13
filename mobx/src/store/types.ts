export enum MessageStatus {
  SENDING = "SENDING",
  SENT = "SENT",
  DELIVERED = "DELIVERED",
  READ = "READ",
  NOT_SENT = "NOT_SENT",
}

export enum ChatStatus {
  ACTIVE = "ACTIVE",
  ARCHIVE = "ARCHIVE",
}

export type Message = {
  text: string;
  status: MessageStatus;
};

export type Chat = {
  title: string;
  status: ChatStatus;
  unreadMessages: number;
};

export type ChatWithMessages = {
  messages: Message[];
} & Chat;
