import NewTask from "./NewTask";
import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask }) {
    const tasks = project ? project.tasks : [];
  
    return (
      <section className="m-20">
        <h1 className="text-2xl font-bold text-stone-700 mb-4">{project.name}</h1>
        <NewTask onAdd={onAddTask} />
        <Tasks tasks={tasks} onDelete={onDeleteTask} />
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">Delete Project</button>
      </section>
    );
  }
  