import { Chat, Message } from "../type";
import type { Repository as RepositoryInterface } from "./types";
import ActiveChats from "./__stubs__/activeChats.json";
import ArchiveChats from "./__stubs__/activeChats.json";
import Messages from "./__stubs__/messages.json";
import { makeDelayedPromise } from "../utils";

const DELAY = 1000;

export class AjsxRepository implements RepositoryInterface {
  getMessages(chatId: string): Promise<Message[]> {
    return makeDelayedPromise(
      () =>
        (Messages as Message[]).filter(
          ({ chatId: messageChatId }) => messageChatId === chatId
        ),
      DELAY
    );
  }
  getActiveChats(): Promise<Chat[]> {
    return makeDelayedPromise(() => ActiveChats as Chat[], DELAY);
  }
  getArchiveChats(): Promise<Chat[]> {
    return makeDelayedPromise(() => ArchiveChats as Chat[], DELAY);
  }
}
