import { useContext } from 'react';

import { ChatsContext } from '../components/ChatsContext';
import type { Store, StoreInterface } from '../store';

export const useStore = (): StoreInterface => {
  const store = useContext(ChatsContext) as Store;

  return store;
};
