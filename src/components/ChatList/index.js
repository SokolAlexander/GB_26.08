import React from "react";
import { List } from "@material-ui/core";

import { Button } from "../Button";
import { ChatItem } from "../ChatItem";

export const ChatList = ({ chats }) => {
  return (
    <List>
      {chats.map((chat) => (
        <ChatItem chat={chat} key={chat.id} />
      ))}
      <Button>
        {() => <span style={{ fontWeight: "bold" }}>Add chat</span>}
      </Button>
    </List>
  );
};
