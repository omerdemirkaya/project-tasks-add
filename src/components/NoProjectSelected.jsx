import noproject from "../assets/noproject.png"
import Button from "./Button"
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={noproject} alt="add project image" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold my-4">no project selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p>
                <Button onClick={onStartAddProject}>
                    Create New Project
                </Button>
            </p>
        </div>
    )
}