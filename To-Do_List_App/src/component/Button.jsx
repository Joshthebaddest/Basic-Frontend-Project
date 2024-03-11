import { useStateContext } from '../context/context';

function Button() {
  const { taskList, setTaskList } = useStateContext()


  return (
    <>
      <div className='pt-5 cursor-pointer' onClick={()=>{ setTaskList(!taskList) }} >
          <div className='bg-blue-800 w-fit rounded-full py-2 px-10 text-white text-md mx-auto'>
            ADD NEW TASK
          </div> 
      </div>:
    </>
  )
}

export default Button