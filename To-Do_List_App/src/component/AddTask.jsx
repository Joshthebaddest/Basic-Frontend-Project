import { useEffect } from 'react'
import { useStateContext } from '../context/context';

function AddTask() {
    const { taskDispatch, TaskData } = useStateContext()
    
    const handleClick = (name) => {
      if(TaskData.length > 1){
        taskDispatch({ type: 'ADDING_TASK', payload: { name } })
      }
    }

    
  return (
    <>
        <div className='border-2 border-solid text-center'>
            <ul className='border-2 border-solid'>
              {TaskData.map(item => (
                <li key={item.id} className='py-2 border-b-2 border-solid cursor-pointer' onClick={()=>handleClick(item.name)}>{item.name} 
                    <button className='mx-4'>{item.icon}</button>
                </li>
              ))}
            </ul>
        </div>
    </>
  )
}

export default AddTask