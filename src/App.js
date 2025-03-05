import "./App.css";
import Input from "./components/input/input";
import { useState } from "react";
function App() {
  const [task, setTask] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (!inputValue) return;

    const toDo = {
      id: Date.now(),
      text: inputValue,
      completed: completed,
    };

    setTask((prevTask) => [...prevTask, toDo]);
    setInputValue("");
  };

  const completeTask = (id) => {
    setTask(
      task.map((task) => {
        if (id === task.id) {
          return {
            id: task.id,
            text: task.text,
            completed: true,
          };
        }

        return task;
      })
    );
  };

  return (
    <div>
      <header className="App-header">
        <h1>Todos</h1>
        <Input
          addTask={addTask}
          inputValue={inputValue}
          handleChange={handleChange}
          setInputValue={setInputValue}
        />
      </header>
      <main className="todo">
        <div className="in-progress">
          <p className="title">In Progress:</p>
          {task
            .filter((task) => task.completed === false) // Filter tasks that are not completed
            .map((task) => (
              <div className="task-section" key={task.id}>
                <span>
                  <p className="task">{task.text}</p>
                </span>
                <div className="complete-box">
                  <p>Completed:</p>
                  <input
                    type="checkbox"
                    onClick={() => completeTask(task.id)} // Mark the task as completed
                  />
                </div>
              </div>
            ))}
        </div>

        <div className="completed">
          <p className="title">Complete:</p>
          {task
            .filter((task) => task.completed === true) // Filter tasks that are completed
            .map((task) => (
              <div className="task-section" key={task.id}>
                <span>
                  <p className="task">{task.text}</p>
                </span>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
