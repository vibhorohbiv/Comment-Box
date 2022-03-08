import React from "react";

function MessageDisplay({ message, replyCallBack, deleteReply }) {
  let data = message?.map((x, i) => {
    if (x.reply) {
      return (
        <div className="col-12 reply-message" key={i}>
          <div className="col-12">
            <p className="replying-to">
              {x.sender} Replying to "{x?.repliedTo?.sender} :{" "}
              {x?.repliedTo?.message}"
            </p>
          </div>
          <div className="message flex">
            <p className="name col-1">{x.sender} : </p>
            <p className="sender-message col-4">{x.message}</p>
            <p className="sender-time col-2">
              {x.date} - {x.time}
            </p>
            <a
              className="col-1 reply"
              href="#!"
              onClick={(e) => replyCallBack(x, i)}
            >
              Reply
            </a>
            <a
              className="col-1 delete"
              href="#!"
              onClick={(e) => deleteReply(i)}
            >
              Delete
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-12 message flex" key={i}>
          <p className="name col-1">{x.sender} : </p>
          <p className="sender-message col-4">{x.message}</p>
          <p className="sender-time col-2">
            {x.date} - {x.time}
          </p>
          <a
            className="col-1 reply"
            href="#!"
            onClick={(e) => replyCallBack(x, i)}
          >
            Reply
          </a>
          <a className="col-1 delete" href="#!" onClick={(e) => deleteReply(i)}>
            Delete
          </a>
        </div>
      );
    }
  });

  if (!message.length) {
    data = (
      <h1 className="text-3xl font-bold underline">Sorry. No comments yet!</h1>
    );
  }

  return <div className="display-screen">{data}</div>;
}

export default React.memo(MessageDisplay);
