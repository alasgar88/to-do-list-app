import React from "react";
import { MdAddBox } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeTask, compleateTask } from "../features/task/taskSlice";

const Task = ({ id, name, hasDone }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='task-container'>
        <div className='task'>
          <input type='checkbox' onClick={() => dispatch(compleateTask(id))} />
          <h2 className={`taskName ${hasDone && "hasDone"}`}> {name}</h2>
          <button className='btn garbage'>
            <RiDeleteBin6Line
              style={{
                width: "24px",
                height: "24px",
                color: "#FF542F",
              }}
              onClick={() => {
                dispatch(removeTask(id));
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
