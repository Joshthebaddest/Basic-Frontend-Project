import { createContext, useContext, useReducer, useState } from "react";
import { taskReducer, formReducer, form_state, task_state } from '../reducers/authReducers'


const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
    // const [ TaskData, setTaskData ] = useState()
    // const [ signupstate, dispatch ] = useReducer(signupReducer, signup_state);
    const [ formState, formDispatch ] = useReducer(formReducer, form_state)
    const [ taskState, taskDispatch ] = useReducer(taskReducer, task_state)
    const [ scrollVal, setScrollVal ] = useState("personal")
    const [ taskList, setTaskList ] = useState(false)
    const [ addTask, setAddTask ] = useState(false)

    return (
        <StateContext.Provider value={{ TaskData: taskState.data, taskState, taskDispatch, formState, formDispatch, scrollVal, setScrollVal, taskList, setTaskList, addTask, setAddTask  }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);