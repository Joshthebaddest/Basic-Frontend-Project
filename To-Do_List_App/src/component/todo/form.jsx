import { useStateContext } from '../context/context';

function Form() {
    const { dispatch } = useStateContext()


    const handleChange = (e) =>{
      const { name, value } = e.target;
      dispatch({ type: "INPUT_CHANGE", payload: { name, value } })
    }

  return (
    <>
        <div>Form</div>
        <div>
            <input className='border border-solid outline-none' type="text" name="email" id="" onChange={handleChange}/><br />
            <input className='border border-solid outline-none' type="text" name="password" id="" onChange={handleChange} /><br />
        </div>
    </>
  )
}

export default Form