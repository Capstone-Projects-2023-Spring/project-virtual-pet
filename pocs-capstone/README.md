

# Simple React + Django + SQLite Site
- Three containers running:
    - React frontend
    - Django API+SQLite database


# Canvas Instance
- For notes on how to get an instance of Canvas running read [CANVAS_SETUP.md](./CANVAS_SETUP.md)


# How to Run with Docker
- Make sure docker desktop is installed for non-Linux users!!! (Creates a linux vm so you can run containers).
- You need to build the container images for the site.
    - Run these commands in the `pocs-capstone` directory.
    - To build the frontend and backend container images, run: ```make build-site```.

### Start the site with: 
 - ```make start-all``` 
    - OR ```docker-compose up -d``` (run in /pocs-capstone)
 - Both containers (backend and frontend) will run.
 - Go to `localhost:3000` to access the site.
 - Remember to stop and remove the containers with ```make destroy-all``` OR ```docker-compose down``` command.
 - If changes are made to the django app or react app, make sure to run ```make build-site``` OR ```docker-compose build``` before running docker-compose up again. 

### Error when stopping+removing container:
- If there are ```Error while Stopping``` issues just rerun the command until it says ```Removed```.





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

- [More notes in NOTES.md](./NOTES.md)