import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const completeTask = (index) => {
    const task = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, task]);
  };

  const deleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  const moveBackToTasks = (index) => {
    const task = completedTasks[index];
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h2>To Be Performed</h2>
      <input 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="New task" 
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => completeTask(index)}>Finish</button>
          </li>
        ))}
      </ul>

      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveBackToTasks(index)}>Move Back</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
