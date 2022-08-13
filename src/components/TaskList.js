import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleTask from "./SingleTask";
import NoResults from "./NoResults";
import AddTask from "./AddTask";
import { clearAllTask } from "../features/task/taskSlice";
import { toast } from "react-toastify";

const TaskList = () => {
  const { allTask, doneTask, generalTask } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  return (
    <div className='main-container'>
      {/* Apps Heading */}
      <div className='heading'>
        <h1>TODO</h1>
      </div>
      {/* Add ToDo item */}
      <AddTask />
      {/* If there is not any taks we add <NoResult/> component */}
      {generalTask ? (
        <div className='result-container'>
          {allTask.map((task) => {
            return <SingleTask key={task.id} {...task} />;
          })}
        </div>
      ) : (
        <NoResults />
      )}
      {/* total number of tasks and done tasks */}
      <div className='result-footer'>
        <div className='task results'>
          <span className='allTask'>{`Ümumi: ${generalTask} tapşırıq`}</span>
          <span className='doneTask'>{`Hazır: ${doneTask} tapşırıq`}</span>
        </div>
        <div className='clear-all'>
          {generalTask ? (
            <span
              className='clear-all-btn'
              onClick={() => {
                dispatch(clearAllTask());
                toast.success("Bütün tasklar uğurla silindi");
              }}
            >
              Hamısını sil
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
