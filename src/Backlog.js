import{memo} from 'react';
import styles from './styles/style.module.css';

const Backlog = ({task, index, addToInProgress}) => {
    console.log('Backlog -> render')
    return (
        <div className={styles.taskWrapper}>
            <p>{task}</p>
            <button className={styles.btn} onClick={() => addToInProgress('backlog', index)}>Add to In Progress</button>
        </div>
    );
}    
    

export default memo(Backlog);
    