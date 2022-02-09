import React, { useState } from "react";

const FormTodo = (props) => {
  const [description, setDescription] = useState("");

  const { handleAddItem } = props;

  const handleSubmit = e => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription("");
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="todo-list">
          <div className="file-input">
            <input
              type="text"
              className="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className="button red"
              disabled={description ? "" : "disabled"}
            >
              Añadir
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
