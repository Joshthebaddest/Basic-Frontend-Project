import React, { useEffect, useRef, useState } from 'react'
import { VscDebugRestart } from "react-icons/vsc";
import { MyTimer } from '../../assets/timer/timer';

function StopwatchTimer() {
    const startButton =  useRef(null);
    const pauseButton = useRef(null);
    let circle = useRef(null);
    let result = useRef(null);
    const [ timerStart, setTimerStart  ] = useState(false)
    const [ hours, setHours ] = useState(0)
    const [ minutes, setMinutes ] = useState(0)
    const [ seconds, setSeconds ] = useState(0)
    const [totalDuration, setTotalDuration] = useState(0)

    let timeLeft = totalDuration
    let perimeter = circle?.current?.getAttribute("r") * Math.PI * 2;
    circle?.current?.setAttribute("stroke-dasharray", perimeter)
    let offsetVal;



    const handleStart = async() =>  {
        result.current.value = (parseInt(hours)*60)+(parseInt(minutes)*60)+parseInt(seconds)

        const timer = new MyTimer (result.current, setTotalDuration, startButton?.current, pauseButton, {
            startTimer(totalDuration){
                offsetVal = totalDuration;
            },
            startTick(timeLeft){
                circle.current.setAttribute("stroke-dashoffset",
                perimeter * timeLeft / offsetVal - perimeter
                );
            },
            endTimer(){
                console.log("timer has ended")
            }
        })

        timer.startButton()
        circle?.current?.setAttribute("stroke", "green")
        setTimerStart(true)
    }


    useEffect(()=>{
        console.log(result.current.value, hours, minutes, seconds)
        const resultVal = result.current.value === '' ? 0 : result.current.value 
        let hourVal = (parseInt(resultVal)-(parseInt(hours)+parseInt(minutes))).toFixed()
        let minuteVal = ((parseInt(resultVal)-(parseInt(hours)+parseInt(seconds)))/60).toFixed()
        let secondVal = ((parseInt(resultVal)-(parseInt(minutes)+parseInt(seconds)))/60 ).toFixed()

        setSeconds(secondVal.toString().length > 1 ? secondVal : `0${secondVal}`)
        setMinutes(hourVal.toString().length > 1 ? minuteVal : `0${minuteVal}`)
        setHours(hourVal.toString().length > 1 ? hourVal : `0${hourVal}`)

        if(minutes === 60){
            setHours(hours+1)
        }        
        else if(seconds === 60){
            setMinutes(minutes+1)
        }

    }, [result.current?.value])

    


    const handlePause = () =>  {
        timer.pauseButton()
    }
    
    const handleInputChange = (e) =>{
        const { name, value } = e.target
        if(name === "first"){
            setHours(value)
        }
        else if(name === "third"){
            setSeconds(value)
        }else{
            setMinutes(value)
        }
    }

  return (
    <>
        <div className="timer">
            {/* <div className="controls">
                <input id="duration" value="00.00" onChange={handleInputChange}/>
                <div>
                    <button id="start"><i className="fas fa-play"></i></button>
                    <button id="pause"><i className="fas fa-pause"></i></button>
                </div>
            </div> */}
            <div className='relative max-w-[410px] mx-auto'>
                <div className='absolute top-[35%] left-[25%] w-fit text-[50px] '>
                    <div className={timerStart ? "hidden" : "block"}>
                        <input className='border-solid border-b-2 w-[60px] outline-none' name='first' id="duration" value={hours} onChange={handleInputChange}/>
                        <span>:</span>
                        <input className='border-solid border-b-2 w-[60px] outline-none' name='second' id="duration" value={minutes} onChange={handleInputChange}/>
                        <span>:</span>
                        <input className='border-solid border-b-2 w-[60px] outline-none' name='third' id="duration" value={seconds} onChange={handleInputChange}/>
                        <input ref={result} type="text" />
                    </div>
                    <div className={!timerStart ? "hidden" : "block"}>
                        <span className='w-[60px] outline-none'>{hours}</span>
                        <span>:</span>
                        <span className='w-[60px] outline-none'>{minutes}</span>
                        <span>:</span>
                        <span className='w-[60px] outline-none'>{seconds}</span>
                    </div>
                
                    <button className='mt-10 ml-16 text-2xl rounded-full border-solid border-2 p-3'>
                        <VscDebugRestart />
                    </button>
                </div>
                <svg height="410" width="410" className=''>
                    <circle
                        fill="transparent"
                        stroke="black"
                        strokeWidth="15"
                        r="190"
                        cx="200"
                        cy="200"
   
                    />
                    <circle
                        ref={circle}
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth="15"
                        r="190"
                        cx="0"
                        cy="200"
                        transform="rotate(-90 100 100)"

                        // transform="rotate(-90 100 100)"
                    />
                </svg>
            </div>
            <button ref={startButton} className='p-10 bg-black text-white m-5' onClick={handleStart}>start</button>
            <button className='p-10 bg-black text-white m-5' onClick={handlePause}>Stop</button>
        
 
        </div>
    </>
  )
}

export default StopwatchTimer