import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function ToDo() {
    const [id, setId] = useState(0);
    const [description, setDescription] = useState("");
    const [toDos, setTodos] = useState([]);
    
    const handleChange = (e) => {
        setDescription(e.target.value);
    };

    const handleClick = () => {
        setTodos([
            ...toDos,
            {
                id,
                description,
                compl: false,
            },
        ]);
        setId(id + 1);
        setDescription("");
    };

    const handleDelete = (e) => {
        const todoId = e.target.getAttribute("data-id");
        setTodos(toDos.filter((todo) => {
            if(todo.id !== Number(todoId)) {
				return todo;
			};
	}));
    };

	 const hadleCompl = (e) => {
     const todoId = e.target.getAttribute("data-id");
     setTodos(toDos.map((todo) => {
         if (todo.id === Number(todoId)) {
           todo.compl = !todo.compl;
         };
         console.log(todo);
         return todo;
       })
     );
   };

   const handleClear = () => {
     setTodos(toDos.filter((todo) => {
         if (!todo.compl) {
			return todo;  
		 };
       })
     );
   };

    return (
      <>
        <TodoForm handleChange={handleChange} 
		  description={description} 
		  handleClick={handleClick}
        />
        <TodoList todos={toDos}
		  handleDelete={handleDelete}  
		  hadleCompl={hadleCompl}
		  handleClear={handleClear}
		/>
      </>
    );
};

export default ToDo;