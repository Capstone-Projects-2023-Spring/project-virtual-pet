---
sidebar_position: 6
---

# Database Diagrams

## Entity-Relation Diagram

<img src="https://raw.githubusercontent.com/Capstone-Projects-2023-Spring/project-virtual-pet/main/documentation/docs/system-architecture/database_diagram.png" alt="Entity-Relation Diagram"/>

````


erDiagram

    USER ||--|{ AVATAR : owns
    USER ||--o{ INVENTORY : owns
    USER ||--o{ TASK : owns
    USER ||--|| USERMETA : owns
    AVATAR }|--|| MOODSTORE : references
    USER {
        charfield username PK 
        string first_name
        string last_name
        string password_hash "PBKDF2 or similar"
        string email
        datetime last_login
        datetime date_joined
        int active_avatar FK "avatar_id from AVATAR table"        
    }

    AVATAR {
        int avatar_id PK
        charfield owner FK "USER - username"
        charfield avatar_name 
        enum avatar_type FK  
        int total_xp 
        datetime last_interaction
        datetime last_feed
        datetime birthday
        string flavour_text "u for uropian"
    }

    INVENTORY {
        int inventory_id PK
        charfield username FK
        enum candy_base_type "SMALL, MEDIUM, LARGE, CAKE"
        enum candy_level "multiplier for basetype, BEGINNER,
            NOVICE,INTERMEDIATE, ADVANCED, EXPERT"   
        int quantity
        
    }

    TASK {
        int task_id PK
        charfield username FK
        datetime due_date "optional"
        bool completed "default = False"
        bool recurring "default = False"
        int recurrence_time_delta "optional default = 0, required if recurring"
        int completion_status "1-4"
        charfield course "optional - link Canvas task with course"
        textfield description "optional field giving notes about task"

    }

    USERMETA {

        charfield username FK
        datetime birthday "Optional: Can get a birthday notification and Pet State will go to GREAT"
        textfield description "Optional: User can give a brief description of their goals for profile"

    }

    MOODSTORE {

        charfield avatar_type PK
        charfield moodpath_sad "filename in static store"
        charfield moodpath_neutral "filename in static store"
        charfield moodpath_happy "filename in static store"

    }



```


    This diagram shows the individual tables and their relations in our SQLite data-base. The tables are as follows:

	- USER the Django default user implementation 
	- AVATAR holds pet information and relate back to USER(many2one)
	- TASK holds tasks specified by USER(many2one)
	- INVENTORY holds inventory items currently held by USER(many2one)
	- USERMETA holds additional optional information about USER(one2one)
	- MOODSTORE relates animation frame palettes to AVATAR(one2many)






