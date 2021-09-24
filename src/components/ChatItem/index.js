import React from "react";
import { Link, useParams } from "react-router-dom";
import { ListItem } from "@material-ui/core";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteChat } from "../../store/chats/actions";
// import {
//   selectChatsLength,
//   selectFirstChatId,
// } from "../../store/chats/selectors";

export const ChatItem = ({ chat }) => {
  const { chatId } = useParams();
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const chatsLength = useSelector(selectChatsLength);
  // const firstChatId = useSelector(selectFirstChatId);

  const handleDelete = () => {
    // dispatch(deleteChat(chat.id));

    // if (chatId !== chat.id) {
    //   return;
    // }

    // if (chatsLength === 1) {
    //   history.push(`/chats/${firstChatId}`);
    // } else {
    //   history.push(`/chats`);
    // }
  };

  return (
    <ListItem>
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
      <span onClick={handleDelete}>delete</span>
    </ListItem>
  );
};
