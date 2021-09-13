import { useState, useEffect, useCallback, useMemo } from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Message } from "../Message";
import { AUTHORS } from "../../utils/constants";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { addChat, deleteChat } from "../../store/chats/actions";
import { addMessage } from "../../store/messages/actions";
import { selectIfChatExists } from "../../store/chats/selectors";

const initialChats = [
  { name: "chat1", id: "chat-1" },
  { name: "Chat 2", id: "chat-2" },
];

const initialMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];

  return acc;
}, {});

console.log(initialMessages);

// const initialMessages = {
//   "chat-1": [
//     { text: "nnnn", author: "HUMAN", id: "mess-2" },
//     { text: "nnnn", author: "HUMAN", id: "mess-1" },
//   ],
//   "chat-2": [],
// };

function Chats(props) {
  const { chatId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messages.messages);
  const chats = useSelector((state) => state.chats.chats);

  const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);

  const chatExists = useSelector(selectChatExists);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessage(chatId, text, author));
    },
    [chatId]
  );

  useEffect(() => {
    let timeout;
    const curMess = messages[chatId];

    if (!!chatId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        sendMessage("I am bot", AUTHORS.bot);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
  );

  const handleAddChat = useCallback(
    (name) => {
      dispatch(addChat(name));
    },
    [dispatch]
  );

  const handleDeleteChat = useCallback(
    (id) => {
      dispatch(deleteChat(id));

      if (chatId !== id) {
        return;
      }

      if (chats.length === 1) {
        history.push(`/chats/${chats[0].id}`);
      } else {
        history.push(`/chats`);
      }
    },
    [chatId, dispatch, chats, history]
  );

  return (
    <div className="App">
      <ChatList
        chats={chats}
        onAddChat={handleAddChat}
        onDeleteChat={handleDeleteChat}
      />
      {!!chatId && chatExists && (
        <>
          {(messages[chatId] || []).map((message) => (
            <Message key={message.id} text={message.text} id={message.id} />
          ))}
          <Form onSubmit={handleAddMessage} />
        </>
      )}
    </div>
  );
}

export default Chats;
