import { FiUser } from 'react-icons/fi';
import { FaBriefcase } from 'react-icons/fa';

// const TaskColor = {   
//     amber: "rgb(252 211 77)",
//     red: "rgb(252 165 165)",
//     yellow: "rgb(253 224 71)",
//     orange: "rgb(253 186 116)",
//     lime: "rgb(190 242 100)",
//     green: "rgb(134 239 172)",
//     emerald: "rgb(110 231 183)",
//     teal: "rgb(94 234 212)",
//     blue: "rgb(147 197 253)",
//     sky: "rgb(125 211 252)",
//     cyan: "rgb(103 232 249)",
//     indigo: "rgb(165 180 252)",
//     violet: "rgb(196 181 253)",
// }

export const TaskColor = [   
    "rgb(252 211 77)",
    "rgb(252 165 165)",
    "rgb(253 224 71)",
    "rgb(253 186 116)",
    "rgb(190 242 100)",
    "rgb(134 239 172)",
    "rgb(110 231 183)",
    "rgb(94 234 212)",
    "rgb(147 197 253)",
    "rgb(125 211 252)",
    "rgb(103 232 249)",
    "rgb(165 180 252)",
    "rgb(196 181 253)",
]

TaskColor


export const form_state = {}

export const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default: 
            break
    }
}

export const task_state= {
    data:[
        {
            id: "1",
            name: "Personal",
            tasks: [],
            completed: [],
            color: TaskColor[Math.floor(Math.random()*TaskColor.length)],
            icon: <FiUser />
        },
        {
            id: "2",
            name: "Work",
            tasks: [],
            completed: [],
            color: TaskColor[Math.floor(Math.random()*TaskColor.length)],
            icon: <FaBriefcase />
        },
    ],
    isTask: false,
    isTodo: false,
    isError: false,
    to: ''
}

export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADDING_TASK":
            return {
                ...state,
                isTask: true,
                to: action.payload.name
            }
        case "CANCEL_TASK":
            return {
                ...state,
                isTask: false,
            }
        case "ADD_TASK_SUCCESS":
            return {
                ...state,
                data: action.payload.data,
                isTask: false,
                isError: false,
                to: ''
            }
        case "REMOVE_TASK_SUCCESS":
            return {
                ...state,
                data: action.payload.data,
            }
        case "ADD_TASK_ERROR":
            return {
                ...state,
                isTask: true,
                isError: true,

            }
        case "ADDING_TODO":
            return {
                ...state,
                isTodo: true,
            }
        case "CANCEL_TODO":
            return {
                ...state,
                isTodo: false,
            }
        case "ADD_TODO_SUCCESS":
            return {
                ...state,
                data: action.payload.data,
                isTodo: false,
            }
        case "ADD_TODO_ERROR":
            return {
                ...state,
                isTodo: true,
                isError: true,

            }
        default: 
            break
    }
}