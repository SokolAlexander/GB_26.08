import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/actions";
import {
  selectChatsLength,
  selectFirstChatId,
} from "../../store/chats/selectors";
import { ChatItemView } from "./ChatItemVIew";

export const ChatItem = ({ chat }) => {
  const { chatId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const chatsLength = useSelector(selectChatsLength);
  const firstChatId = useSelector(selectFirstChatId);

  const handleDelete = () => {
    dispatch(deleteChat(chat.id));
    
    if (chatId !== chat.id) {
      return;
    }
    
    if (chatsLength === 1) {
      history.push(`/chats/${firstChatId}`);
    } else {
      history.push(`/chats`);
    }
  };

  return <ChatItemView name={chat.name} id={chat.id} onDelete={handleDelete} />;
};
