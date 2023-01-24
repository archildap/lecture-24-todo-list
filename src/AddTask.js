import{memo} from 'react';
import styles from './styles/style.module.css';


const AddTask = ({onChange, task, addTask}) => {
    {console.log('Addtask -> render')}
    return (
        <div className={styles.inputWrapper}>
            <input className={styles.taskInput} value={task} type='text' placeholder='Enter a task' onChange={(event) => onChange(event)} />
            <button onClick={addTask} className={styles.btn}>Add Task</button>
        </div>
    );
}        

export default memo(AddTask);