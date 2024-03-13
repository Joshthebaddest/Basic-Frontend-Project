import { useEffect, useState } from 'react';
import './App.css'
import { Calculator, Home, StopwatchTimer } from './pages'
import { Routes, Route } from "react-router-dom";


function App() {
  const [size, setSize] = useState(false)


  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <>
      {!size ? 
      (
        <div className='min-h-screen min-w-screen'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/calculator' element={<Calculator />}></Route>
            <Route path='/timer' element={<StopwatchTimer />}></Route>
          </Routes>
        </div>

      ) : 
      (
        <>
          <div className='m-auto w-fit mt-[20%]'>
            <h1>ONLY WORKS ON MOBILE DEVICES</h1>
            <p>Please revert to your mobile device</p>
          </div>
        </>

      ) }

    </>
  )
}

export default App
