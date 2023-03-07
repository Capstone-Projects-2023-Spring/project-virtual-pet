
import './PageDisplay.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const TaskItem = ({ task }) => {

    // https://stackoverflow.com/questions/542938/how-to-calculate-number-of-days-between-two-dates
    const treatAsUTC = (date) => {
        var result = new Date(date)
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset())
        return result
    }

    const calculateDueDate = (date) => {
        const today_date = new Date()
        const due_date = new Date(`${date}T00:00:00`)
        const year_diff = due_date.getYear() - today_date.getYear()
        const mon_diff = due_date.getMonth() - today_date.getMonth()

        if (mon_diff == 0 && year_diff == 0) {
            const date_diff = Math.round((Date.parse(due_date) - Date.parse(today_date)) / 86400000) + 1
            return date_diff > 0 ? (date_diff == 1 ? `in ${date_diff} day` : `in ${date_diff} days`) : `Today`

        }
        if (mon_diff > 0 && mon_diff < 12 && year_diff == 0) {
            return mon_diff == 1 ? `in ${mon_diff} month` : `in ${mon_diff} months`
        }
        else {
            return year_diff == 1 ? `in ${year_diff} year` : `in ${year_diff} years`
        }
    }
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-start card-customized">

            <Stack direction="horizontal" gap={3}>
                <div className='check-box-task'>
                    <Form>
                        <div key="default-checkbox" className="mb-3">
                            <Form.Check type="checkbox" id="default-checkbox" label="" />
                        </div>
                    </Form>
                </div>
                <div className="ms-2 me-auto">
                    <div className="fw-bold task-title">{task.title}</div>
                    <div>Due {calculateDueDate(task.completed_date)}</div>
                </div>
                {/* <div className="bg-light border">Third item</div> */}
            </Stack>




        </ListGroup.Item>

    )
}


export default TaskItem