# Forecast - reservamos

## How to start
To execute the web app, we have to overwrite the .env file with the Api key for the weather API.

### Execute Dockerfile
As we can see in the root folder, it has a dockerfile with the steps required (install dependencies, upload required files and subsequent commands).

Create the image:
- `docker build -t forecast-image .`

Create the container:
- `docker run --rm -it -p 5173:5173 --name forecast-container forecast-image`

After this steps, you can open a web browser as follow `http://localhost:5173/`

Delete the container:
-`docker container stop forecast-container ` 

### Execute in local machine
Before to start, you should install/update the node version to the latest ([here](https://nodejs.org/en)). Type the following commands in the console:

- `yarn install`
- `yarn run dev`
