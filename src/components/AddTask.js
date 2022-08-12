import React from "react";
import nextId from "react-id-generator";
import { MdAddBox } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

const AddItem = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    const id = nextId();
    const hasDone = false;
    const newTask = { id, name, hasDone };
    dispatch(addTask(newTask));
    setName("");
  };

  return (
    <form className='form-container'>
      <input
        placeholder='Tapşırığı daxil edin'
        type='text'
        className='input'
        name={name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className='btn' onClick={handleSubmit}>
        <MdAddBox
          style={{
            width: "40px",
            height: "40px",
            color: "#00A3FF",
          }}
        />
      </button>
    </form>
  );
};

export default AddItem;
