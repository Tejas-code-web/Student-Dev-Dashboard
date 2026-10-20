import { useState,useEffect} from "react";
function App() {
  
const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("devtrack-tasks");

  if (savedTasks !== null) {
    return JSON.parse(savedTasks);
  }

  return [
    { id: 1, title: "Learn React components", completed: true },
    { id: 2, title: "Practice useState", completed: false },
    { id: 3, title: "Build DevTrack dashboard", completed: false },
  ];
});

useEffect(() => {
  localStorage.setItem(
    "devtrack-tasks",
    JSON.stringify(tasks)
  );
}, [tasks]);

  
const [filter, setFilter] = useState("all");

const [newTask, setNewTask] = useState("");

function toggleTask(id) {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const pendingTasks = totalTasks - completedTasks;

const progressPercentage =
  totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);


const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;

  return true;
});


  return (
    <div className="app">
      <aside className="sidebar">
        <h2>DevTrack</h2>

        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#tasks">My Tasks</a>
          <a href="#progress">Progress</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <h1>Dashboard</h1>
          <p>Welcome back! Ready to make progress?</p>
        </header>

      
<section className="overview" id="dashboard">
  <h2>Overview</h2>
  <p>Your productivity at a glance.</p>

  <div className="stats-container">
    <div className="stat-card">
      <p>Total Tasks</p>
      <h3>{totalTasks}</h3>
    </div>

    <div className="stat-card">
      <p>Completed</p>
      <h3>{completedTasks}</h3>
    </div>

    <div className="stat-card">
      <p>Pending</p>
      <h3>{pendingTasks}</h3>
    </div>
  </div>
  
<div className="progress-section" id="progress">
  <div className="progress-heading">
    <h3>Overall Progress</h3>
    <span>{progressPercentage}%</span>
  </div>

  <div className="progress-track">
    <div
      className="progress-fill"
      style={{ width: `${progressPercentage}%` }}
    />
  </div>

  <p>
    {completedTasks} of {totalTasks} tasks completed
  </p>
</div>

</section>

<section className="task-section" id="tasks">
  <h2>My Tasks</h2>
  <p>Keep track of what you need to do.</p>

<form
  className="task-form"
  onSubmit={(e) => {
    e.preventDefault();

    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }}
>
  <input
    type="text"
    placeholder="What do you need to do?"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
  />

  <button type="submit">Add Task</button>
</form>

<div className="filter-buttons">
  <button
    className={filter === "all" ? "active" : ""}
    onClick={() => setFilter("all")}
  >
    All
  </button>

  <button
    className={filter === "pending" ? "active" : ""}
    onClick={() => setFilter("pending")}
  >
    Pending
  </button>

  <button
    className={filter === "completed" ? "active" : ""}
    onClick={() => setFilter("completed")}
  >
    Completed
  </button>
</div>

  <div className="task-list">
   
{filteredTasks.map((task) => (
  <div className="task-item" key={task.id}>
    <div className="task-details">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span className={task.completed ? "task-completed" : ""}>
        {task.title}
      </span>
    </div>

    <button
      className="delete-btn"
      onClick={() => deleteTask(task.id)}
    >
      Delete
    </button>
  </div>
))}

  </div>
</section>

      </main>
    </div>
  );
}

export default App;
