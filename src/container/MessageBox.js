import React from "react";

function MessageBox(props) {
  return (
    <div className="chat-inputs">
      <div className="flex">
        <div className="col-4">
          <select
            id="sender"
            onChange={(e) => {
              props.setDetails({
                ...props.messageDetails,
                sender: e.target.value,
              });
            }}
          >
            <option value="">-</option>
            <option value="john">John</option>
            <option value="cory">Cory</option>
            <option value="smith">Smith</option>
          </select>
        </div>
        <div className="col-8">
          {props.reply ? (
            <>
              <p style={{ margin: "0px", textAlign: "left" }}>
                Replying to {props.reply.message}
              </p>
            </>
          ) : null}
          <textarea
            rows="2"
            onChange={(e) =>
              props.setDetails({
                ...props.messageDetails,
                message: e.target.value,
              })
            }
            value={props.messageDetails.message}
          ></textarea>
          <button onClick={props.onSubmit}>Add Comment</button>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
