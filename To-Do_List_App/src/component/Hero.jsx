import React, { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi';
import { FaBriefcase } from 'react-icons/fa';
import { useStateContext } from '../context/context';

function Hero() { 
  const { scrollVal, TaskData } = useStateContext()
  const [ totalTask, setTotalTask ] = useState(0)

  useEffect(()=>{
    if(scrollVal === "personal"){
      getValue("left")
    }else{
      getValue("bottom")
    }
  }, [scrollVal])


  const user = {
    top: {
      dashOffset: '-267.7566',
      rotate: '-55'
    },
    right: {
      dashOffset: '-267.7566',
      rotate: '-320'
    },
    bottom: {
      dashOffset: '-267.7566',
      rotate: '-235'
    },
    left: {
      dashOffset: '-267.7566',
      rotate: '-150'
    }
  }

  const [value, setValue] =  useState({
    offsetVal: user.left.dashOffset,
    rotate: user.left.rotate,
    position: 'left'
  })
  

  const getValue = (positions) =>{
    const { offsetVal, position, rotate } = setCircleValue(positions)
    setValue((prev)=>({...prev, offsetVal, position, rotate}))
  }

  const setCircleValue = (position) => {
    switch (position) {
      case 'top':
        return{
          offsetVal: user.top.dashOffset,
          position,
          rotate: user.top.rotate
        }
      case 'left':
        return{
          offsetVal: user.left.dashOffset,
          position,
          rotate: user.left.rotate
        }
      case 'right':
        return{
          offsetVal: user.right.dashOffset,
          position,
          rotate: user.right.rotate
        }
      case 'bottom':
        return{
          offsetVal: user.bottom.dashOffset,
          position,
          rotate: user.bottom.rotate
        }
      default:
        return{
          offsetVal: user.top.dashOffset,
          position,
          rotate: user.top.rotate
        }
    }
  }

  useEffect(()=>{
    const getTask = () => {
      let total = 0
      if(TaskData.length > 0){
        for(let task of TaskData){
          total += task.tasks.length - task.completed.length
        }
        return setTotalTask(total)
      }
      return setTotalTask(total)
    }
    getTask()
  }, [TaskData])



  return (
    <>
        <div className='pt-10'>
          <div className='relative w-[150px] h-[150px] m-auto'>
            <svg height="150" width="150">
              <circle r="53" cx="72" cy="73" fill="transparent" stroke="black" strokeWidth="3" strokeDasharray={2*Math.PI*53} strokeDashoffset={value.offsetVal} transform={`rotate(${value.rotate } 72 73)`} />
            </svg>
            <div className='absolute top-[23px] left-[22px] w-[100px] h-[100px] rounded-full bg-blue-700'>
              <img className='' src="" alt="" />
            </div>
            <div className={`${value.position === "left" ? "block" : "hidden" } w-fit absolute top-[45%]`}>
                <FiUser />
              </div>
              <div className={`${value.position === "bottom" ? "block" : "hidden" } w-fit absolute bottom-0 left-[45%]`}>
                <FaBriefcase />
              </div>
          </div>
            <div className='pt-10 m-auto text-center w-[200px] h-[200px]'>
              <h1 className='text-bold text-2xl font-bold' >Hello, Max </h1>
              <p className='text-gray-400' >You have <span className='text-blue-700'> {totalTask} new tasks </span> today</p>
            </div>
        </div>
    </>
  )
}

export default Hero