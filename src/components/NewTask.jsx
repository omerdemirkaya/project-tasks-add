import { useState } from "react"

export default function NewTask({onAdd}){
    const [task,setTask] = useState();

    function handleChange(e){
        setTask(e.target.value)
    }

    function handleClick(e){
        onAdd(task)
        e.target.value=""
    }

    return(
        <div className="flex flex-col items-center gap-4">
            <h2>***</h2>
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200 rounded-xl" onChange={handleChange} autoFocus/>
            <button onClick={handleClick} className="text-stone-500 w-1/2 p-2 mb-10 bg-red-400 rounded-xl">Add Task</button>
        </div>
    )
}