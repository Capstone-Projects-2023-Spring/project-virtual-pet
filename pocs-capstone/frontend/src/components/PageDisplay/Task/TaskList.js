
import { ListGroup, Stack, Button } from 'react-bootstrap';
import TaskItem from './TaskItem'
import GlobalContext from "../../../context/GlobalContext.js";
import { useContext, useState } from 'react'
import './TaskPage.css'

const TaskList = ({ showAll, filterTags, filterTaskType }) => {
    const handlers = useContext(GlobalContext)

    const taskFilterCondition = (item) => {
        if (filterTaskType.length === 1) {
            return filterTaskType[0] === 'canvas' ? item.course_id !== 0 && item.assignment_id !== 0 : item.course_id === 0 && item.assignment_id === 0
        }
        return true
    }
    let showTasks = handlers?.taskList.filter(task => {
        const now = new Date();
        const due = task.due_date ? new Date(task.due_date) : null;

        if (showAll === 'all') {
            if (task.completed) return false;
            if (due && due < now) return false;
        }
        if (showAll === 'completed' && !task.completed) {
            return false;
        }
        if (showAll === 'pastdue') {
            if (task.completed) return false;
            if (!due) return false;
            if (due >= now) return false;
        }

        if (!taskFilterCondition(task)) return false;

        if (filterTags.length > 0 && !filterTags.some(fT => task.tags?.includes(fT))) return false;

        return true;
    });

    showTasks = showTasks.sort((a, b) => {
        const da = a.due_date ? new Date(a.due_date) : Infinity;
        const db = b.due_date ? new Date(b.due_date) : Infinity;
        return da - db;
    });

    const taskListHandlers = {
        updateTask: handlers.updateTask,
        deleteTask: handlers.deleteTask
    }

    // console.log(`TASKS: ${showTasks}`)


    return (
        <>
            {
                showTasks.length === 0 ?
                    <ListGroup className='tasklist-position' variant="flush">
                        <ListGroup.Item className="d-flex justify-content-between align-items-start" style={{ backgroundColor: 'rgb(255, 214, 214' }}>
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