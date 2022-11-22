import type { Chat, Message } from '../type';
import { makeDelayedPromise } from '../utils';
import ActiveChats from './__stubs__/activeChats.json';
import ArchiveChats from './__stubs__/archiveChats.json';
import Messages from './__stubs__/messages.json';
import type { Repository as RepositoryInterface } from './types';

const DELAY = 1000;

export class MockRepository implements RepositoryInterface {
  getMessages(chatId: string): Promise<Message[]> {
    return makeDelayedPromise(
      () => (Messages as Message[]).filter(({ chatId: messageChatId }) => messageChatId === chatId),
      DELAY,
    );
  }
  getActiveChats(): Promise<Chat[]> {
    return makeDelayedPromise(() => ActiveChats as Chat[], DELAY);
  }
  getArchiveChats(): Promise<Chat[]> {
    return makeDelayedPromise(() => ArchiveChats as Chat[], DELAY);
  }
}
