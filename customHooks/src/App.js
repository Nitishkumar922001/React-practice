import React, { useCallback, useEffect, useState } from "react";
import useHttp from "./Hooks/use-http";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTask = useCallback((data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendReq: fetchTasks } = useHttp(transformTask);
  useEffect(() => {
    fetchTasks({
      url: "https://howtosendhttpreq-default-rtdb.firebaseio.com/tasks.json",
    });
  }, [fetchTasks]);
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={() =>
          fetchTasks({
            url: "https://howtosendhttpreq-default-rtdb.firebaseio.com/tasks.json",
          })
        }
      />
    </React.Fragment>
  );
}

export default App;
