import React, { useState, useEffect } from "react";
import "./App.css";
import MessageBox from "./container/MessageBox";
import MessageDisplay from "./container/MessageDisplay";

function App() {
  const [message, setMessage] = useState([]);
  const [messageDetails, setDetails] = useState({ sender: "", message: "" });
  const [reply, setReply] = useState(null);

  useEffect(() => {
    setDetails({ sender: "", message: "" });
    setReply(null);
    document.getElementById("sender").value = "";
  }, [message]);

  const onSubmit = () => {
    let callBackData = messageDetails;
    callBackData["date"] = new Date()
      .toDateString("DD/mm/yyyy")
      .split(" ")
      .slice(1)
      .join(" ");
    callBackData["time"] = [
      new Date().getHours(),
      new Date().getMinutes(),
    ].join(":");
    callBackData["reply"] = reply ? true : false;
    if (callBackData["reply"]) {
      callBackData["repliedTo"] = reply;
    }
    if (messageDetails.sender && messageDetails.message) {
      setMessage((prev) => [...prev, messageDetails]);
    } else {
      alert("Please Select Person and input Text to be commented.");
    }
  };

  const replyCallBack = (message, index) => {
    setReply(message);
    console.log(message, index);
  };

  const deleteReply = (index) => {
    const allMessages = message;
    const filteredMessage = allMessages.filter((_, i) => i !== index);
    console.log(filteredMessage);
    setMessage([...filteredMessage]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Comment-Box</h3>
      </header>
      <div className="container">
        <div className="chat-box">
          <div className="col-12">
            <MessageDisplay
              message={message}
              replyCallBack={replyCallBack}
              deleteReply={deleteReply}
            />
          </div>
          <div className="col-12">
            <MessageBox
              setDetails={setDetails}
              onSubmit={onSubmit}
              messageDetails={messageDetails}
              reply={reply}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
