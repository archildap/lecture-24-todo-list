import {useState, useCallback} from 'react';
import './App.css';
import AddTask from './AddTask';
import Backlog from './Backlog';
import Done from './Done';
import InProgress from './InProgress';
import styles from './styles/style.module.css';


function App () {


  const [section, setSection] = useState({
    temp: {task: ''},
    backlog: [],
    done: [],
    inProgress: [],
  });


  const onChange = useCallback((event) => { 
    setSection((section) => {
      section.temp.task = event.target.value;
      return {...section}
    });
  }, [])


  const addTask = useCallback(() => {
    setSection((section)=> {
      if (section.temp.task !== '') {
        section.backlog.push(section.temp);
        section.temp = {
          task: ''
        }
        return {...section}
      } else {
        return {...section}
      }      
    });    

  }, [])

  const addToBacklog = useCallback((addFrom, index) => {
    setSection((section) => {
      section.backlog.push(section[addFrom][index]);
      section[addFrom].splice(index, 1);

      return {...section}
    });

  }, []);

  const addToInProgress = useCallback((addFrom, index) => {
    setSection((section) => {
      section.inProgress.push(section[addFrom][index]);
      section[addFrom].splice(index, 1)

      return {...section}
    });

  }, [])

  const addToDone = useCallback((addFrom, index) => {
    setSection((section) => {
      section.done.push(section[addFrom][index]);
      section[addFrom].splice(index, 1);

      return {...section}
    });

  }, []);


  const removeTask = useCallback((addFrom, index) => {
    setSection((section) => {
      section[addFrom].splice(index, 1);
      return {...section}
    });

  }, []);

  
    return (
      <div className={styles.app}>  
        <AddTask task = {section.temp.task} onChange = {onChange} addTask = {addTask} />
        <div className={styles.sectionsWrapper}>
          <div className={styles.boxWrapper}>
            <h1 className={`${styles.sectionHeader} ${styles.backlog}`}>Backlog | {section.backlog.length}</h1>
            {section.backlog.map((backlog, index) => {
              return <Backlog
                key={index}
                task={backlog.task}
                addToInProgress={addToInProgress}
                index={index} />
            })}
          </div>
          <div className={styles.boxWrapper}>
            <h1 className={`${styles.sectionHeader} ${styles.inProgress}`}>In Progress | {section.inProgress.length}</h1>
            {section.inProgress.map((inProgress, index) => {
              return <InProgress
                key={index}
                task={inProgress.task}
                addToDone={addToDone}
                addToBacklog={addToBacklog}
                index={index} />
            })}
          </div>
          <div className={styles.boxWrapper}>
            <h1 className={`${styles.sectionHeader} ${styles.done}`}>Done | {section.done.length}</h1>
            {section.done.map((done, index) => {
              return <Done
                key={index}
                task={done.task}
                removeTask={removeTask}
                addToInProgress={addToInProgress}
                index={index} />
            })}
          </div>
        </div>
      </div>
    );  
}

export default App;
