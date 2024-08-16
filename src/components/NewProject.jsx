import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();
    const titleRef = useRef()
    const DescRef = useRef()
    const DueDateRef = useRef()

    function handleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDesc = DescRef.current.value;
        const enteredDue = DueDateRef.current.value;

        if(enteredTitle.trim() === "" || enteredDesc.trim() === "" || enteredDue.trim() === "")
        {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            duedate: enteredDue,
        })

    }

    const classes = "px-6 py-2 rounded-md text-stone-50 hover:text-stone-950 bg-stone-700"
    return(
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2>Invalid Input</h2>
            <p>Oops. forgot to enter a value</p>
        </Modal>
        <div className="w-[35rem] h-1/2 border m-10">
            <menu className="flex p-4 justify-end gap-4">
                <li><button className={classes} onClick={onCancel} >Cancel</button></li>
                <li><button className={classes} onClick={handleSave}>Save</button></li>
            </menu>
            <div>
               <Input ref={titleRef} label="Title"/>
               <Input ref={DescRef} label="Description" textarea={true}/>
               <Input ref={DueDateRef} label="Due Date" type="date"/> 
            </div>
        </div>
        </>
    )
}