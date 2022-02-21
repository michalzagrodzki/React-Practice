import { useState, useEffect, useRef } from "react";

function UserList({list, onClick}) {
  function handleClick(e) {
    onClick(e.target.attributes.userid.value)
  }
  return (
    <>
    {list.map((user, idx) => <div key={idx} onClick={handleClick} userid={user.id}>{user.name}</div>)}
    </>
  )
}

function ChatList({list, sendMessage}) {
  const inputEl = useRef(null)
  function submitInput() {
    sendMessage(inputEl.current.value)
  }
  if (list.length < 1) {
    return <div>Empty list</div>;
  }
  return (
    <>
    {list.map((msg, idx) => {
      return <div key={idx}>{msg.msg}</div>
    })}
    <input ref={inputEl} />
    <button onClick={submitInput}>Send</button>
    </>
    
  )
}

function Exercise_5() {
  const chatInitialState = [
    {
      userId: 1,
      stream: [{msg: "bla bla"}, {msg: "bla bla"}],
    },
    {
      userId: 2,
      stream: [{msg: "bla bla 2"}, {msg: "bla bla 2"}],
    },
    {
      userId: 3,
      stream: [{msg: "bla bla 3"}, {msg: "bla bla 3"}],
    }
  ];
  const userIinitialState = [
    {id: 1, name: "John"}, 
    {id: 2, name: "Joe"},
    {id: 3, name: "James"}
  ]
  const [userId, setUserId] = useState(null);
  const [currentChat, setCurrentChat] = useState([])

  function handleUser(userId) {
    setUserId(userId);
  }
  function handleMessage(message) {
    setCurrentChat([...currentChat, {msg: message}])
  }
  useEffect(() => {
    const chatStream = chatInitialState.find(chat => {
      return chat.userId === parseInt(userId, 10)
    });
    if (chatStream) {
      setCurrentChat(chatStream.stream);
    }
  }, [userId])

  return (
    <div>
      <header>
        <UserList list={userIinitialState} onClick={handleUser} />
        <ChatList list={currentChat} sendMessage={handleMessage} />
      </header>
    </div>
  );
}

export default Exercise_5;
