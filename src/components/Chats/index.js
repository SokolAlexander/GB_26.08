import { useState, useEffect, useCallback, useMemo, useRef } from "react";
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
import { addChat, deleteChat, initChats } from "../../store/chats/actions";
import { addMessageWithReply, addMessageFb, initMessages } from "../../store/messages/actions";
import { selectIfChatExists } from "../../store/chats/selectors";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../services/firebase";

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

function Chats() {
  const { chatId } = useParams();
  const dispatch = useDispatch();

  // const [chats, setChats] = useState([]);
  // const [messages, setMessages] = useState([]);

  // const unsubscribeMessages = useRef(null);

  useEffect(() => {
    dispatch(initChats());
    dispatch(initMessages());
  }, []);

  const messages = useSelector((state) => state.messages.messages);

  const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
  const chatExists = useSelector(selectChatExists);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageFb(text, author, chatId));
    },
    [chatId]
  );

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
  );

  return (
    <div className="App">
      <ChatList />
      {!!chatId && chatExists && (
        <>
          {(Object.values(messages[chatId] || {}) || []).map((message) => (
            <Message key={message.id} text={message.text} id={message.id} />
          ))}
          <Form onSubmit={handleAddMessage} />
        </>
      )}
    </div>
  );
}

export default Chats;
