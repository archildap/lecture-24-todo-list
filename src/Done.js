import{memo} from 'react';
    
const Done = ({task, removeTask, index, addToInProgress}) => {
    {console.log('completed -> render')}
    return(
        <div>
            <p>{task}</p>
            <button className="btn" onClick={() => removeTask('done',index)}>Remove Task</button>
            <button className="btn" onClick={() => addToInProgress('done', index)}>Add to In Progress</button>
        </div>
    )
}
    


export default memo(Done);