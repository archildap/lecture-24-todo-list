import{memo} from 'react';

const InProgress = ({task, addToDone, index, addToBacklog}) => {
    console.log('todo -> render')
    return (
        <div>
            <p>{task}</p>
            <button className="btn" onClick={(event) => addToDone('inProgress', index)}>Add to Done</button>
            <button className="btn" onClick={() => addToBacklog('inProgress', index)}>Add to Backlog</button>

        </div>
    );
}    
    

export default memo(InProgress);