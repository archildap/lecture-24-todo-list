import{memo} from 'react';


const AddTask = ({onChange, task, addTask}) => {
    {console.log('task -> render')}
    return (
        <div className="task-container">
            <input className='task-input' value={task} type='text' placeholder='Enter a task' onChange={(event) => onChange(event)} />
            <button onClick={addTask} className='btn'>Add Task</button>
        </div>
    );
}        

export default memo(AddTask);