import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-1/5 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-3 hover:text-stone-50";
          if(project.id===selectedProjectId)
          {
            cssClasses+=" bg-white text-stone-200";
          }
          else{
            cssClasses+= ' text-stone-400';
          }
          return(
            <li
            key={project.id} 
          >
            <button onClick={() => onSelectProject(project.id)} className={cssClasses}>
            {project.title}
            </button>
          </li>
          )
        })}
      </ul>
    </aside>
  );
}
