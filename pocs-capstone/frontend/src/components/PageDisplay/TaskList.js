
import { ListGroup, Stack, Button } from 'react-bootstrap';
import TaskItem from './TaskItem'
import GlobalContext from "../../context/GlobalContext.js";
import { useContext } from 'react'

const TaskList = ({ showAll, filterTags, filterTaskType }) => {
    const handlers = useContext(GlobalContext)

    const taskFilterCondition = (item) => {
        if (filterTaskType.length === 1) {
            return filterTaskType[0] === 'canvas' ? item.course_id !== 0 && item.assignment_id !== 0 : item.course_id === 0 && item.assignment_id === 0
        }
        return true
    }
    const showTasks = handlers?.taskList.filter(task => task.completed !== showAll).filter(task => filterTags.every(fT => task.tags?.includes(fT))).filter(taskFilterCondition)

    const taskListHandlers = {
        updateTask: handlers.updateTask,
        deleteTask: handlers.deleteTask
    }

    // console.log(`TASKS: ${showTasks}`)
    

    return (
        <>
            {
                showTasks.length === 0 ?
                    <ListGroup variant="flush">
                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                            No tasks!
                        </ListGroup.Item>
                    </ListGroup>
                    :
                    <>
                        {showAll === false ?
                            (
                                <div className='delete-com-tasks "mb-2"'>
                                    <Stack className="col-md-5 mx-auto">
                                        <Button variant="outline-danger" size="sm" onClick={() => handlers?.deleteAllTasks(showTasks)}>Delete ALL Completed</Button>
                                    </Stack>

                                </div>

                            ) : null}

                        <ListGroup className="task-scroll">
                            {showTasks.map(t => <TaskItem key={t.task_id} task={t} {...taskListHandlers} />)}
                        </ListGroup>
                    </>
            }
        </>
    )
}


export default TaskList