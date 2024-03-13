import React, { useState, useEffect } from 'react'
import { Button, Hero, Task, AddTask, ToDo } from '../../component/todo';
import { useStateContext } from '../../context/todo/context';
import CreateTask from '../../component/todo/CreateTask';
import { Nav } from '../../component/todo';

function Home() {
  const { taskList, setTaskList, addTask, taskState, taskDispatch } = useStateContext()

  useEffect(() => {
    // Function to handle window clicks
    function handleWindowClick(event) {
      // event.target.textContent === "ADD NEW TASK" ? setTaskList(true) : setTaskList(false)
      if(event.target.classList.contains("todoBackground")){ 
        taskDispatch({ type: "CANCEL_TODO" })
      }
      else if(event.target.classList.contains("taskBackground")){
        taskDispatch({ type: "CANCEL_TASK" })
      }
      else{
        event.target.textContent === "ADD NEW TASK" ? setTaskList(true) : setTaskList(false)
      }
    }

    // Attach event listener when component mounts
    window.addEventListener('click', handleWindowClick);

    // Detach event listener when component unmounts
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <>
        <Nav />
        <Hero />
        <Task />
        {!taskList? <Button /> : <AddTask />}
        {taskState.isTask && <>
          <div className='fixed top-0 left-0 w-full bg-gray-900 opacity-50 h-full taskBackground'></div>
          <div className='fixed top-[15%] left-0 w-full taskBackground'>
            <CreateTask />
          </div>
        </>}
        {taskState.isTodo && <>
        <div className='fixed top-0 left-0 w-full bg-gray-900 opacity-50 h-full todoBackground' ></div>
        <div className='fixed bottom-0 bg-white w-full'>
          <ToDo />
        </div>
        </>
        }


    </>
  )
}

export default Home