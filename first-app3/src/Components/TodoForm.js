import React from 'react';
import { Button, Input } from "reactstrap";

function TodoForm({ handleChange, handleClick, description }) {
  return (
    <>
      <form className="form" onSubmit={(e) => {
          e.preventDefault();
	   }} >
        <Input  onChange={handleChange} value={description} placeholder="Description..." />
        <Button type="submit" onClick={handleClick}> Add</Button>
      </form>
    </>
  );
};

export default TodoForm;