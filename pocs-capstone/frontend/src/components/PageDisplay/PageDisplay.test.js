
const fetchData = require('/components/PageDisplay/PageDisplay.js');
const axios = require('axios');


// WORK IN PROGRESS
jest.mock('axios');

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });

    it('returns taskList from backend', async () => {
        axios.get.fetchData({
            data: [
                {
                    "task_id": 0,
                    "title": "task1",
                    "due_date": "2023-03-24",
                    "created_date": "2023-03-24T00:01:05.611Z",
                    "completed_date": "2023-03-24",
                    "completed": true,
                    "active": true,
                    "task_type": "S",
                    "task_level": 1,
                    "recurring": true,
                    "recurring_time_delta": 0,
                    "description": "string",
                    "course_id": 0,
                    "assignment_id": 0
                },
                {
                    "task_id": 1,
                    "title": "task2",
                    "due_date": "2023-03-24",
                    "created_date": "2023-03-24T00:01:05.611Z",
                    "completed_date": "2023-03-24",
                    "completed": true,
                    "active": true,
                    "task_type": "S",
                    "task_level": 1,
                    "recurring": true,
                    "recurring_time_delta": 0,
                    "description": "string",
                    "course_id": 0,
                    "assignment_id": 0
                },
            ]
        });

        const title = await getFirstAlbumTitle();
        expect(title).toEqual('My First Album');
    });

});
