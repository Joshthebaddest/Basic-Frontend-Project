import { React, useEffect, useRef, useState } from 'react'
import { useStateContext } from '../../context/todo/context';
 

function Task() {
    const { setScrollVal, TaskData, taskDispatch } = useStateContext()
    const [isChecked, setIsChecked] = useState(false)

    // Convert object entries to an array of key-value pairs and sort based on values
    // const sortedEntries = Object.entries(TaskData).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    // Convert the sorted array back to an object
    // const sortedTaskData = Object.fromEntries(sortedEntries);

    TaskData.sort((a, b) => {
        if (parseInt(a.id) < parseInt(b.id)) return -1;
        if (parseInt(a.id) > parseInt(b.id)) return 1;
        return 0;
    });



    const percent = (allTask, completed) => {
        const val = (completed/allTask)*100;
        const total = val*((2*Math.PI*10)/100)
        const percentTotal = (Number.isNaN(total)) ? 2*Math.PI*10 : total;
        const percentVal = Number.isNaN(val) ? 100 : Math.round(val);
        
        return { total: percentTotal, val: percentVal }
    }


    const handleScroll = (e) => {
        const scrollValue =  e.target.scrollLeft; 
        if (scrollValue < 100) {
            setScrollVal("personal")
        }else{
            setScrollVal("work")
        }
    }

    const handleCheck = (id, name, task) => {
        const prevOne = TaskData.filter(task => task.name === name)[0];
        const prev = TaskData.filter(task => task.name !== name);
        const getTask = [...prevOne.completed, {id, task}]
        const newTask = {...prevOne, completed: getTask }
        const data = [...prev, newTask]
        taskDispatch({ type: "REMOVE_TASK_SUCCESS", payload: { data }  })
    }


  return (
    <>
        <div className='flex max-w-[500px] mx-auto overflow-auto scrollbar-hide whitespace-nowrap p-5' style={{scrollbarWidth: 'none', scrollBehavior: "smooth"}} onScroll={handleScroll} >
            {TaskData.map(item =>( 
            <div key={item.id} className={`flex-shrink-0 text-white py-5 px-7 border border-solid w-[250px] max-h-[300px] mx-auto rounded-lg  ml-[50px]`} style={{background: item.color}} >
                <div className='flex justify-between'>
                    <h3 className='text-xl font-bold'>{ item.name }</h3>
                    <div className='flex'>
                        <svg height="30" width="30">
                            <circle r="10" cx="15" cy="15" fill="transparent" stroke="black" strokeWidth="2" />
                            <circle r="10" cx="15" cy="15" fill="transparent" stroke="white" strokeWidth="2" strokeDasharray={2*Math.PI*10} strokeDashoffset={`-${percent(item.tasks.length, item.completed.length).total}`} transform='rotate(-90 15 15)' />
                        </svg>
                        <p className='text-sm text-black pt-1'>{percent(item.tasks.length, item.completed.length).val}%</p>
                    </div>
                </div>
                
                <div className='py-10 text-sm flex flex-col w-full max-h-[230px] mx-auto overflow-auto scrollbar-hide whitespace-nowrap' style={{scrollbarWidth: 'none', scrollBehavior: "smooth"}}>
                    {item.tasks.map(list =>(
                    <div key={list.id} className='pb-5 flex'>
                        <input className='accent-white mr-5' type="checkbox" name="" id={`${list.id}`}
                            checked={item.completed.some(itemComp => itemComp.id === list.id && itemComp.task === list.task)}
                            disabled={item.completed.some(itemComp => itemComp.id === list.id && itemComp.task === list.task)}
                            onChange={()=>handleCheck(list.id, item.name, list.task)}
                        /><br />
                        <p className={`${item.completed.some(itemComp => itemComp.id === list.id && itemComp.task === list.task) ? "line-through decoration-black" : '' }`}>{list.task}</p>
                    </div>
                    ))}
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default Task