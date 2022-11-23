/* eslint-disable simple-import-sort/imports */
import React from 'react';
import { Card, CardContent, ButtonGroup, Button, Typography } from '@mui/material';

import type { FC } from 'react';
import type { Message as MessageType } from '../../type';
import { formatTime } from '../../utils';

export const MessageView: FC<Pick<MessageType, 'text' | 'status' | 'time' | 'chatId'>> = ({
  text,
  status,
  time,
  chatId,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 275,
        marginBottom: 1,
        cursor: 'pointer',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {text}
        </Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
          <Button>{status}</Button>
          <Button>{chatId}</Button>
          <Button>{formatTime(time)}</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
