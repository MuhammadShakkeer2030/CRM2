import { useState ,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../redux/reducers/index';
import { addTo } from '../../redux/actions/TodoAction';

export const TodoList = () => {
const todos = useSelector((state:RootState)=>state?.todos)
const dispatch = useDispatch()
    // CONVERT TO REDUX
    const [tasks, setTasks] = useState(['Task 1', 'Task 2']); // Initial tasks
const [newTodo,setNewTodo]  = useState("")
    const addTask = (e) => {
        e.preventDefault()
        if(newTodo){
        
            dispatch(addTo(newTodo))
    }
    

    };
    useEffect(()=>{
        console.log(todos)

    },[todos])

    return (
        <div>

            <div className="md:col-span-2 xl:col-span-1 bg-white rounded-lg shadow-md">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">Todo List</h2>
                    <div className="mb-4">
                        <input type="text"  className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 px-3 py-2" placeholder="Enter task..." 
                        value={newTodo}
                        onChange={(e)=>setNewTodo(e.target.value)} />
                    </div>
                    <button onClick={addTask} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Add Task</button>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index} className="flex items-center mb-3">
                                <input type="checkbox" id={`todo${index + 1}`} className="mr-2" />
                                <label htmlFor={`todo${index + 1}`} className="text-sm">{task}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Other columns or cards */}
        </div>
    );
};

