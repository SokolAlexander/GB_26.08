import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";

export const ChatItem = ({ chat }) => {
  const showName = useSelector((state) => state.showName);
  
  console.log(showName);
  return (
    <ListItem>
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
    </ListItem>
  );
};
