import { useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/task/taskSlice";

function App() {
  const { allTask } = useSelector((store) => store.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [allTask]);

  return (
    <div className='app'>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
