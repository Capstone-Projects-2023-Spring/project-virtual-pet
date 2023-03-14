

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




# HOSTING WORKFLOW (notes for myself)


## [Connect to Droplet with SSH using doctl](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/#connect-to-droplet-with-ssh-using-doctl)

- Need to generate API Token
- Run: ```doctl compute ssh ubuntu-s-1vcpu-1gb-nyc1-01``` to connect to VM 

## Build Docker Images 

<details>
<summary> Method 1. </summary>

- Create individual images and push them to the registry
- ```cd /backend``` 
- ```docker build -t ccho508/backend-sb:latest .```
- ```cd ../frontend```
- ```docker build -t ccho508/frontend-sb:latest .```
- ```docker push ccho508/frontend-sb:latest```
- ```docker push ccho508/backend-sb:latest```


</details>


<details>
<summary> Method 2. (From /pocs-capstone) </summary>

- Create both images using docker compose, retag them, and then push them to the registry
- ```docker-compose build```
- ```docker tag pocs-capstone-web:latest ccho508/frontend-sb:latest```
- ```docker tag pocs-capstone-api:latest ccho508/backend-sb:latest```
- ```docker push ccho508/frontend-sb:latest```
- ```docker push ccho508/backend-sb:latest```

</details>


## From VM SSH 
- Install docker (use snap?)
- Pull docker images
- ```docker pull ccho508/frontend-sb:latest```
- ```docker pull ccho508/backend-sb:latest```
- ```touch docker-compose.yml```
    - Paste in docker-compose configuration (commented out in pocs-capstone/docker-compose.yml)
- ```docker-compose up```



#### Required Updates
- etc/nginx.conf in root : handles routing issue
    - 404 error due to React app being a SPA : no 'routes' seen by the server?
    - Need to configure nginx to deal with that :
    - Helpful tutorial: https://rsbh.dev/blogs/dockerize-react-app

- Update Dockerfile in frontend + .dockerignore file 
    - only need package.json files to install dependencies, create build, then run
    - add dockerignore file ignores node_modules, etc

- Update axios.js to use different URL based on the environment
    - When running with docker: will use the VM ip address (should probably update since docker containers run locally will use localhost address)
    - When running locally : 127.0.0.1
