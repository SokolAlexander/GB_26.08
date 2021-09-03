import TextField from "@material-ui/core/TextField";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./App.scss";
import { SimpleText } from "./components/SimpleText";
import { Counter } from "./components/Counter";
import { Message } from "./components/Message";

const initialMessages = [
  { text: "nnnn", author: "HUMAN", id: "mess-2" },
  { text: "nnnn", author: "HUMAN", id: "mess-1" },
];

const imgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/";

function App() {
  const [showCounter, setShowCounter] = useState(true);

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  const inputRef = useRef(null);

  const [messages, setMessages] = useState(initialMessages);
  const [value, setValue] = useState("");

  const messagesToShow = useMemo(() => {
    console.log("filtering...");
    return messages.filter(({ text }) => text.includes("nnn"));
  }, [messages]);
  // console.log('filtering...');
  // const messagesToShow = messages.filter(({ text }) => text.includes("nnn"));

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("hello from timeout");
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "HUMAN") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I am bot", author: "bot", id: `mess-${Date.now()}` },
      ]);
      inputRef.current.focus();
    }
  }, [messages]);

  const handleAddMessage = (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: value,
        author: "HUMAN",
        id: `mess-${Date.now()}`,
      },
    ]);

    setValue("");
    inputRef.current.focus();
  };

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
      console.log(messages.length);
    },
    [messages]
  );

  const handleMessageClick = useCallback((id) => {
    console.log("clicked", id);
  }, []);

  return (
    <div className="App">
      <div onClick={toggleCounter}>TOGGLE COUNTER</div>
      <img src={imgUrl + "1280px-React-icon.svg.png"} />
      <SimpleText name="Alex" age={300} />
      {showCounter ? <Counter /> : null}
      {messagesToShow.map((message, i) => (
        <Message
          key={message.id}
          text={message.text}
          onClick={handleMessageClick}
          id={message.id}
        />
      ))}
      <form onSubmit={handleAddMessage}>
        <TextField
          placeholder="message"
          label="Label"
          value={value}
          onChange={handleChange}
          inputRef={inputRef}
        />
        <button>Add message</button>
      </form>
    </div>
  );
}

export default App;
