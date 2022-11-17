import { useContext } from "react";

import { ChatsContext } from "../components/ChatsContext";

import { Store } from "../store";

export const useStore = (): Store => {
  const store = useContext(ChatsContext);

  return store!;
};
