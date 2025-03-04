import "./input.css";

function Input({ addTask, inputValue, handleChange }) {
  return (
    <div>
      <h3 className="sub-header">Enter a task</h3>
      <input
        type="text"
        className="input"
        placeholder="Learn React"
        value={inputValue}
        onChange={handleChange}
      ></input>
      <button className="add-button" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default Input;
