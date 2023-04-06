FROM node:14.17.3

# In the docker image, make the working directory the frontend directory. (If it doesn't exist it will create a directory called 'frontend')
WORKDIR /frontend

# copy contents of the folder where Dockerfile is to the working directory (frontend) of the docker image
COPY package.json ./
COPY package-lock.json ./

# RUN yarn install --frozen-lockfile
RUN npm install

COPY . .

RUN npm run build
