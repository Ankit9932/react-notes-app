import React, { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={onChangeHandler}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={onChangeHandler}
          value={note.content}
          placeholder="Content here..."
          row="3"
        />
        <button onClick={submitNote}>ADD</button>
      </form>
    </div>
  );
}
