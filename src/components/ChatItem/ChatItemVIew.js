import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";

export const ChatItemView = ({ name, id, onDelete }) => (
  <ListItem>
    <Link to={`/chats/${id}`}>{name}</Link>
    <span onClick={onDelete}>delete</span>
  </ListItem>
);
