import {useState, createContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import TaskData from "../Tasks/TaskData";

const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [taskList, setTaskList] = useState(TaskData);
    const [taskEdit, setTaskEdit] = useState({
        task: {},
        edit: false,
      });

    //To add the Task
    const addTask = (newTask) => {
        newTask.id = uuidv4();
        setTaskList([newTask, ...taskList]);
    };

    //To edit the Task
    const editTask = (task) => {
        setTaskEdit({ task, edit: true });
    };

    //To check the Task
    const checkTask = (id) => {
        setTaskList(taskList.map((task) => 
        task.id === id ? {...task, checked: !task.checked} : task));
    };

    //To delete the Task
    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    //To update the Task
    const updateTask = (id, updTask) => {
        setTaskList(
        taskList.map((task) => (task.id === id ? {...task, ...updTask} : task))
        );
    };

    return (
    <TaskContext.Provider value={{
        taskList, 
        taskEdit,
        checkTask, 
        deleteTask, 
        addTask, 
        editTask, 
        updateTask,
        }}>
        {children}
    </TaskContext.Provider>)
};

export default TaskContext;