import { useState } from "react"
import NewProject from "./components/NewProject.jsx"
import NoProjectSelected from "./components/NoProjectSelected.jsx"
import ProjectSidebar from "./components/ProjectsSidebar.jsx"
import SelectedProject from "./components/SelectedProject.jsx" 

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  
  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId
      };
  
      const updatedProjects = prevState.projects.map(project => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: [newTask, ...(project.tasks || [])]
          };
        }
        return project;
      });
  
      return {
        ...prevState,
        projects: updatedProjects
      };
    });
  }
  
  function handleDeleteTask(taskId) {
    setProjectState(prevState => {
      const updatedProjects = prevState.projects.map(project => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter(task => task.id !== taskId)
          };
        }
        return project;
      });
  
      return {
        ...prevState,
        projects: updatedProjects
      };
    });
  }
  
  function handleStartAddProject(){
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }))
  }

  function handleDeleteProject(){
    setProjectState((prevState)=>{
        return{
          ...prevState,
          selectedProjectId:undefined,
          projects: prevState.projects.filter((project) => project.id!==prevState.selectedProjectId),
        }
    })
  }

  function handleCancelAddProject(){
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
    }))
  }

  function handleSelectProject(id){
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: id,
    }))
  }

  function handleAddProject(data) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...data,
        id: projectId,
        tasks: [] 
      };
  
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }
  

  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId)
  let content

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else {
    content = <SelectedProject tasks={projectState.tasks} project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>  
  }

  return (
    <main className="h-screen my-0 flex">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects} 
        onSelectProject={handleSelectProject} 
      />
      {content}
    </main>
  )
}

export default App
