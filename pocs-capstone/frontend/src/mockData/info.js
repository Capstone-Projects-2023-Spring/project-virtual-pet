


const avatarInfo = {
    avatar_name: "",
    avatar_type: 0,
    total_xp: 0,
    last_interaction: new Date(2023, 1, 24),
    last_feed: new Date(2023, 1, 24),
    birthday: new Date(2002, 4, 8),
    flavour_text: "emngeing"

}


const tasks = [
    {
        taskId: 0,
        title: "Club meeting",
        dueDate: new Date(2023, 1, 28),
        completed: true,
        recurring: false,
        recurrenceTimeDelta: 0,
        completion_status: 4,
        course: "None",
        description: "HW"
    },
    {
        taskId: 1,
        title: "math exam",
        dueDate: new Date(2023, 2, 5),
        completed: false,
        recurring: false,
        recurrenceTimeDelta: 0,
        completion_status: 3,
        course: "None",
        description: "HW 2"
    },
    {
        taskId: 2,
        title: "bio exam",
        dueDate: new Date(2023, 2, 30),
        completed: false,
        recurring: false,
        recurrenceTimeDelta: 0,
        completion_status: 2,
        course: "None",
        description: "HW 3"
    },
    {
        taskId: 3,
        title: "feed plants",
        dueDate: new Date(2023, 2, 30),
        completed: false,
        recurring: true,
        recurrenceTimeDelta: 0,
        completion_status: 2,
        course: "None",
        description: "HW 3"
    },
]
// int task_id PK
// charfield username FK
// datetime due_date "optional"
// bool completed "default = False"
// bool recurring "default = False"
// int recurrence_time_delta "optional default = 0, required if recurring"
// int completion_status "1-4"
// charfield course "optional - link Canvas task with course"
// textfield description "optional field giving notes about task"


// -int taskId
// -String username
// -datetime dueDate
// -bool completed
// -bool recurring
// -int recurrenceTimeDelta
// -String course
// -String description






const inventory = [
    {
        inventoryId: 0,
        candyBaseType: "SMALL",
        candyLevel: "BEGINNER",
        quantity: 1
    },
    {
        inventoryId: 1,
        candyBaseType: "SMALL",
        candyLevel: "BEGINNER",
        quantity: 1
    },
    {
        inventoryId: 3,
        candyBaseType: "SMALL",
        candyLevel: "BEGINNER",
        quantity: 1
    },
    {
        inventoryId: 4,
        candyBaseType: "SMALL",
        candyLevel: "BEGINNER",
        quantity: 1
    },


]

export default tasks