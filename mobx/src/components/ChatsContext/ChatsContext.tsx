import React, { useMemo, createContext, PropsWithChildren } from "react";
import type { FC } from "react";
import { Store } from "../../store";
import { AjsxRepository } from "../../repository";

export const ChatsContext = createContext<Store | null>(null);

export const ChatsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const repository = useMemo(() => new AjsxRepository(), []);
  const store = useMemo(() => new Store(repository), []);

  return (
    <ChatsContext.Provider value={store}>{children}</ChatsContext.Provider>
  );
};
