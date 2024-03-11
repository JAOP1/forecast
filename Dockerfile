# pull official base image
FROM node:latest

# set working directory
WORKDIR /app


# install app dependencies
COPY package.json .
RUN yarn install

# add app
COPY . .

# start app
CMD ["yarn","run", "dev", "--host"]