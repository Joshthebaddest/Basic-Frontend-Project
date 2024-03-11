import React from 'react'
import Forms from './Forms'
import { useStateContext } from '../context/context'
import { v4 as id } from 'uuid';



export default function CreateTask() {
    const { formState, formDispatch, taskState, taskDispatch, setAddTask, TaskData } = useStateContext()

    const handleSubmit = () => {
        if(formState.task){
            const prevOne = taskState.data.filter(task => task.name === taskState.to)[0];
            const prev = taskState.data.filter(task => task.name !== taskState.to);
            const getTask = [...prevOne.tasks, {id: id(), task: formState.task}]
            const newTask = {...prevOne, tasks: getTask }
            const data = [...prev, newTask]
            taskDispatch({ type: "ADD_TASK_SUCCESS", payload: { data }  })
            formDispatch({ type: "INPUT_CHANGE", payload: {name: 'task', value: ""} })
        }
        else{
            taskDispatch({ type: "ADD_TASK_ERROR" })
        }
         
    }


  return (
    <>
        <div className='my-[100px]'>
            <div className='w-[500px] text-center m-auto border-2 border-solid p-[50px] pb-[80px] bg-blue-700'>
                <h1 className='text-2xl text-white font-bold'>Add New <span> {taskState.to} </span> Task</h1>
                {taskState.isError && <span className='text-red-700 text-[14px]'>input cannot be empty</span>}
                <div className='flex mt-10'>
                    <Forms name={"task"} placeholder={"enter you task"} text={"text-white"} />
                    <button className='py-2 px-6 bg-black text-white mx-5' onClick={handleSubmit}>Add</button>    
                </div>            
            </div>
        </div>
    </>
  )
}
