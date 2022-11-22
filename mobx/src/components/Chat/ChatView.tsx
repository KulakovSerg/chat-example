/* eslint-disable simple-import-sort/imports */
import React, { useCallback } from 'react';
import { Card, CardContent, ButtonGroup, Button, Typography, useTheme } from '@mui/material';

import type { FC } from 'react';
import type { Chat as ChatType, ChatId } from '../../type';

export const ChatView: FC<
  Pick<ChatType, 'title' | 'status' | 'unreadMessages' | 'id' | 'isActive'> & {
    selectChat: (id: ChatId) => void;
  }
> = ({ id, title, status, unreadMessages, isActive, selectChat }) => {
  const theme = useTheme();
  const clickHandler = useCallback(() => selectChat(id), [selectChat, id]);
  return (
    <Card
      sx={{
        maxWidth: 275,
        marginBottom: 1,
        backgroundColor: isActive ? theme.palette.grey[300] : null,
        cursor: 'pointer',
      }}
      onClick={clickHandler}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
          <Button>{status}</Button>
          <Button>{unreadMessages}</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
