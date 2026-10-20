# DevTrack — Student Productivity Dashboard

DevTrack is a responsive student productivity dashboard built using React and Vite. It helps students organize their daily tasks, monitor their progress, and manage pending and completed work through a simple, interactive interface.

The project was developed to practice React fundamentals, state management, browser storage, and responsive web design while building a practical application.

## 🚀 Features

- **Task Management:** Add new tasks to your task list.
- **Task Completion:** Mark tasks as completed or pending.
- **Delete Tasks:** Remove tasks that are no longer needed.
- **Task Filtering:** Filter tasks by All, Pending, and Completed status.
- **Progress Tracking:** View task completion progress through a dynamic progress bar.
- **Dynamic Statistics:** Display task statistics based on the current task list.
- **Local Storage:** Save tasks in the browser so they remain available after refreshing the page.
- **Responsive Design:** Adapt the interface for desktop and mobile screens.
- **Interactive UI:** Update the dashboard dynamically as tasks change.

## 🛠️ Tech Stack

- **React** — Building reusable UI components and managing application state.
- **JavaScript (ES6+)** — Application logic and interactive functionality.
- **Vite** — Development server and build tool.
- **HTML5** — Application structure.
- **CSS3** — Styling, layout, and responsive design.
- **React Hooks** — `useState` for state management and `useEffect` for side effects and Local Storage synchronization.
- **Browser Local Storage** — Persistent task storage on the user's device.
- **Git and GitHub** — Version control and source code management.
- **Vercel** — Deployment and hosting.

## ⚙️ How It Works

1. Users can add tasks through the task input form.
2. The task list updates dynamically when tasks are added, completed, or deleted.
3. Users can filter the list to view all tasks, pending tasks, or completed tasks.
4. Dashboard statistics and the progress bar update according to the current task data.
5. Tasks are stored in browser Local Storage to preserve them across page refreshes.
6. The responsive layout allows the application to be used on different screen sizes.

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- A code editor such as Visual Studio Code

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tejas-code-web
   ```

2. Navigate to the project directory:

   ```bash
   cd DevTrack
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal to use the application.

### Build for Production

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## 📂 Project Structure

```text
DevTrack/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```



## 🧠 Key Learnings

Through this project, I practiced:

- Building a user interface using React components.
- Managing dynamic data with React's `useState` hook.
- Handling user interactions and form submissions.
- Using `useEffect` for side effects and synchronizing data with Local Storage.
- Implementing filtering and conditional rendering.
- Calculating and displaying dynamic statistics.
- Creating responsive layouts using CSS media queries.
- Using Git and GitHub to manage source code.
- Deploying a React application using Vercel.

## 🔮 Future Improvements

Potential enhancements for future versions include:

- Task deadlines and priority levels.
- Search and sorting functionality.
- Task categories and labels.
- Dark and light theme switching.
- User authentication.
- A backend API and database for cross-device task synchronization.
- Notifications and reminders.
- Improved accessibility and additional UI refinements.

## 📌 Current Limitations

- Tasks are stored locally in the browser.
- Data is not automatically synchronized across devices or browsers.
- There is currently no user authentication or shared database.

## 👨‍💻 Author

**Tejas S**

Information Science and Engineering Student

