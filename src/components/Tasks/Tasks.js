import Task from "./Task";
import {useState, useContext} from "react";
import TaskContext from "../context/TaskContext";
import SearchTask from "./SearchTask";


export default function Tasks(){
  const {taskList} = useContext(TaskContext);
  const [search, setSearch] = useState("");
  const result = taskList.filter((task) => 
    task.title.toLocaleLowerCase().includes(search.toLowerCase())
  )

  if(!result || result.length === 0){
    return <p>No Tasks</p>
  } 

  return(
      <div>
        <SearchTask search={search} setSearch={setSearch}/>
          {result.map((task) =>(
            <Task 
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            checked={task.checked}
            task={task}
            />
          ))}
      </div> 
  );
}
