import{memo} from 'react';

const Backlog = ({task, index, addToInProgress}) => {
    console.log('todo -> render')
    return (
        <div>
            <p>{task}</p>
            <button className="btn" onClick={() => addToInProgress('backlog', index)}>Add to In Progress</button>
        </div>
    );
}    
    

export default memo(Backlog);
    