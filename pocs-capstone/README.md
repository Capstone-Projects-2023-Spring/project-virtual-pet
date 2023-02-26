

# Simple React + Django + SQLite Site with Canvas 
- Three containers running:
    - React frontend
    - Django API+SQLite database
    - Canvas Instance

# How to Run with Docker
- Make sure docker desktop is installed for non-Linux users!!! (Creates a linux vm so you can run containers).
- You need to build the container images for the site and the canvas instance:
    - Run these commands in the `pocs-capstone` directory.
    - To build the frontend and backend container images, run: ```make build-site```.
    - To build the canvas instance container image, run: ```make build-canvas```.
        - The build takes a while but pay attention to the prompts. Enter 'y' for everything and 'migrate' for the question about the database. 

### Start the site with: 
 - ```make start-site``` 
    - OR ```docker-compose up -d``` (run in /pocs-capstone)
 - Both containers (backend and frontend) will run.
 - Go to `localhost:3000` to access the site.
 - Remember to stop and remove the containers with ```make destroy-canvas``` OR ```docker-compose down``` command.
 - If changes are made to the django app or react app, make sure to run ```docker-compose build``` before running docker-compose up again. 

### Start the canvas instance with:
 - ```make start-canvas```
    - OR cd into /canvas-lms and run ```docker-compose up -d ```
 - Canvas instance container will run
 - Go to http://canvas.docker/ (Might take a LONG time to load at first)

### Start site AND canvas instance:
 - ```make start-all``` to run
 - ```make destroy-all``` to stop and remove

### Error when stopping+removing container:
- If there is are ```Error while Stopping``` issues just rerun the command until it says ```Removed```.



# Folders:
## frontend 
- React app
- Run: ```npm start```

## backend
- Django API + SQLite database 
- Run: ```python3 manage.py runserver```

## backend/tutorial-env
- [Virtual Environments and Packages](https://docs.python.org/3/tutorial/venv.html)
- Python virtual env, activate with:
    - MacOS/Unix: ```source tutorial-env/bin/activate```
    - Windows: ```tutorial-env\Scripts\activate.bat```


# Resources
- [How to Dockerize a Django and React Application](https://www.honeybadger.io/blog/docker-django-react/)
- [Using Docker to run Canvas](https://github.com/instructure/canvas-lms/tree/master/doc/docker)
- [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [Writing your first Django app, part 1](https://docs.djangoproject.com/en/4.1/intro/tutorial01/)
- [Build a REST API in 30 minutes with Django REST Framework](https://medium.com/swlh/full-stack-with-django-and-react-react-afae36017852)
- [When to run a command in docker compose and when in dockerfile?](https://stackoverflow.com/questions/69036887/when-to-run-a-command-in-docker-compose-and-when-in-dockerfile)
- [Simplifying docker-compose operations using Makefile](https://medium.com/freestoneinfotech/simplifying-docker-compose-operations-using-makefile-26d451456d63)
