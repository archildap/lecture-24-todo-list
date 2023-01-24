import{memo} from 'react';
import styles from './styles/style.module.css';

const InProgress = ({task, addToDone, index, addToBacklog}) => {
    console.log('InProgress -> render')
    return (
        <div className={styles.taskWrapper}>
            <p>{task}</p>
            <button className={styles.btn} onClick={(event) => addToDone('inProgress', index)}>Add to Done</button>
            <button className={styles.btn} onClick={() => addToBacklog('inProgress', index)}>Add to Backlog</button>

        </div>
    );
}    
    

export default memo(InProgress);