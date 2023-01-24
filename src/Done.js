import{memo} from 'react';
import styles from './styles/style.module.css';
    
const Done = ({task, removeTask, index, addToInProgress}) => {
    {console.log('Done -> render')}
    return(
        <div className={styles.taskWrapper}>
            <p>{task}</p>
            <button className={styles.btn} onClick={() => removeTask('done',index)}>Remove Task</button>
            <button className={styles.btn} onClick={() => addToInProgress('done', index)}>Add to In Progress</button>
        </div>
    )
}
    


export default memo(Done);