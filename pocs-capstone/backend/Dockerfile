
# Parent Image : Python 
FROM  python:3.8.13-bullseye

# Setting PYTHONUNBUFFERED to a non-empty value different from 0 ensures that the python output i.e. the stdout and stderr streams are sent straight to terminal (e.g. your container log) 
# without being first buffered and that you can see the output of your application (e.g. django logs) in real time.
# https://stackoverflow.com/questions/59812009/what-is-the-use-of-pythonunbuffered-in-docker-file
ENV PYTHONUNBUFFERED=1

# In the docker image filesystem, make the working directory the backend directory. (If it doesn't exist it will  create a directory called 'backend')
WORKDIR /backend
 
# Copy the contents of THIS directory (where Dockerfile is located) to the working directory of the Docker image (/backend)
COPY . .

# install requirements (should move to requirements.txt?)
RUN pip install django django-cors-headers

RUN pip install djangorestframework

RUN pip install python-decouple

# when the container runs it'll be listening on port 8000
EXPOSE 8000

