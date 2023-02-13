FROM node:14.17.3

# In the docker image, make the working directory the frontend directory. (If it doesn't exist it will create a directory called 'frontend')
WORKDIR /frontend

# copy contents of the folder where Dockerfile is to the working directory (frontend) of the docker image
COPY . .

# run command npm install - node_modules folder ignored in build (.dockerignore), rerun command to create and update dependencies
RUN npm install

# create react app production version - build folder ignored in image build (.dockerignore), recreate to include any new updates from npm install 
RUN npm run build

# expose on port 3000
EXPOSE 3000

# run the build
CMD [ "npx", "serve", "build" ]