import React from "react";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeTask, compleateTask } from "../features/task/taskSlice";
import { toast } from "react-toastify";

const Task = ({ id, name, hasDone }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };
  return (
    <>
      <div className='task-container'>
        <div
          className='task'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <input
            checked = {hasDone}
            type='checkbox'
            onClick={() => {
              dispatch(compleateTask(id));
              !hasDone
                ? toast.success(`Task yerinə yetirildi`)
                : toast.error(`Task statusu dəyişdirildi`);
            }}
          />
          <h2 className={`taskName ${hasDone && "hasDone"}`}> {name}</h2>
          <button className={`btn garbage ${show ? "show" : null}`}>
            <RiDeleteBin6Line
              style={{
                width: "24px",
                height: "24px",
                color: "#FF542F",
              }}
              onClick={() => {
                dispatch(removeTask(id));
                toast.success("Task uğurla silindi");
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
