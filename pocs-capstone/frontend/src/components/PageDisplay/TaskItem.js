
import './PageDisplay.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';


const TaskItem = ({ task, handleCompleteCheck, deleteTask }) => {



    const calculateDueDate = (date) => {
        const today_date = new Date()
        const due_date = new Date(`${date}T00:00:00`)
        const year_diff = due_date.getYear() - today_date.getYear()
        const mon_diff = due_date.getMonth() - today_date.getMonth()

        if (mon_diff === 0 && year_diff === 0) {
            const date_diff = Math.round((Date.parse(due_date) - Date.parse(today_date)) / 86400000) + 1
            return date_diff > 0 ? (date_diff === 1 ? `in ${date_diff} day` : `in ${date_diff} days`) : `Today`

        }
        if (mon_diff > 0 && mon_diff < 12 && year_diff === 0) {
            return mon_diff === 1 ? `in ${mon_diff} month` : `in ${mon_diff} months`
        }
        else {
            return year_diff === 1 ? `in ${year_diff} year` : `in ${year_diff} years`
        }

    }


    return (
        // <ListGroup.Item className="d-flex justify-content-between align-items-start card-customized"></ListGroup.Item>
        <ListGroup.Item>

            <Stack direction="horizontal" gap={3}>
                <div className='check-box-task'>
                    <Form>
                        <div key="default-checkbox" className="mb-3">
                            {/* need to add onClick attribute to handle updating tasklist (function should be passed from page display) */}
                            <Form.Check type="checkbox" id="default-checkbox" onClick={() => handleCompleteCheck(task.task_id)} />
                        </div>
                    </Form>
                </div>
                <div className="ms-2 me-auto">
                    <div className="fw-bold task-title">{task.title}</div>
                    <div>Due {calculateDueDate(task.due_date)}</div>
                </div>
                <div>
                    <CloseButton onClick={() => deleteTask(task.task_id)}/>
                </div>
                {/* <div className="bg-light border">Third item</div> */}
            </Stack>




        </ListGroup.Item>

    )
}


export default TaskItem