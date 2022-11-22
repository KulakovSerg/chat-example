import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useMemo } from 'react';

import { MockRepository } from '../../repository';
import { Store } from '../../store';

export const ChatsContext = createContext<Store | null>(null);

export const ChatsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const repository = useMemo(() => new MockRepository(), []);
  const store = useMemo(() => new Store(repository), [repository]);

  return <ChatsContext.Provider value={store}>{children}</ChatsContext.Provider>;
};
