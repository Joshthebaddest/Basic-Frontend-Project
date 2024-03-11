import React from 'react'
import { GoPlus } from "react-icons/go";
import { CgMenuLeft } from "react-icons/cg";
import ToDo from './ToDo';
import { useStateContext } from '../context/context';
import { Tooltip } from 'react-tooltip';

function Nav() {
    const { taskState, taskDispatch } = useStateContext()

    const handleToDo = () =>{
        taskDispatch({ type: 'ADDING_TODO' })
        console.log(taskState.isTodo)
    }


  return (
    <>
        <div className='flex justify-between px-5 pt-5'>
            <div>
                <button className="font-bold text-3xl" id="menu">
                <CgMenuLeft />
                </button>
                <Tooltip className='text-md' anchorSelect='#menu' place='bottom'>Menu</Tooltip>
            </div>

            <div className='font-bold'>
                <h1 className='text-2xl'>Tasks</h1>
            </div>

            <div>
                <button className='text-3xl' id="todo" onClick={handleToDo}>
                    <GoPlus />
                </button>
                <Tooltip className='text-md' anchorSelect='#todo' place='bottom'>Create Todo</Tooltip>
            </div>
        </div>
    </>
  )
}

export default Nav