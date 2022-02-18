import React from 'react';

function TodoList({ todos, handleDelete, handleClear,  hadleCompl }) {
    return (
      <div>
        {todos.map((todo, i) => (
          <div key={i}>
            <b>{todo.id + 1}. </b>
            <span className={todo.compl ? "span" : ""}
              data-id={todo.id}
              onClick={hadleCompl}>
              {todo.description}
            </span>
            <button data-id={todo.id} onClick={handleDelete}> Delete </button>
          </div>
        ))}
        <br />
        <button onClick={handleClear}>Clear</button>
      </div>
    );
};

export default TodoList;