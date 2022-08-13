import { useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/task/taskSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { allTask } = useSelector((store) => store.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [allTask, dispatch]);

  return (
    <div className='app'>
      <Header />
      <TaskList />
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
