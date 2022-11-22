import type { FC } from 'react';
import React from 'react';

export const ChatsListView: FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  return <div style={{ padding: 20, overflow: 'auto' }}>{children}</div>;
};
