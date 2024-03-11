import React from 'react'
import Forms from './Forms'
import { useStateContext } from '../context/context'
import { v4 as id } from 'uuid';
import { TaskColor } from '../reducers/authReducers';

function ToDo() {
    const { formState, taskState, taskDispatch } = useStateContext()
    const handleSubmit =() => {
        if(formState.todo){
            const newData = {id: id(), name: formState.todo, tasks: [], completed: [], color: TaskColor[Math.floor(Math.random()*TaskColor.length)], icon: ''}
            const data =  [...taskState.data, newData] 
            taskDispatch({ type: "ADD_TODO_SUCCESS", payload: { data }  })
            formDispatch({ type: "INPUT_CHANGE", payload: {name: 'todo', value: ""} })
        }
        else{
            taskDispatch({ type: "ADD_TODO_ERROR" })
        }
    }

    return (
        <>
            <div className='py-5 text-center'>
                <h1 className='text-2xl text-black font-bold'>Todo</h1>
                {taskState.isError && <span className='text-red-700 text-[14px]'>input cannot be empty</span>}
                <div className='flex-col m-0 mx-10'>
                    <Forms name={"todo"} placeholder={"Your todo name here"} margin={"my-5 mt-5"} />
                    <button className='mt-5 py-2 px-6 bg-black text-white mx-5' onClick={handleSubmit}>Add</button> 
                </div>
                <div className=''>

                </div>
            </div>

        </>
    )
}

export default ToDo