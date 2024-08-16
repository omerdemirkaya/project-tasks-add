import NewTask from "./NewTask";

export default function Tasks({tasks, onAdd, onDelete}){

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4 text-center">TASKS</h2>
            {tasks.length === 0 ? (
                <p className="text-stone-600 my-5">This project has no task</p> 
            ) : (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span> {/* Display task text here */}
                            <button 
                                className="text-stone-700 hover:text-red-500"
                                onClick={() => onDelete(task.id)} // Call onDelete with task.id
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
