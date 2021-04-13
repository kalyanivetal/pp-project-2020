
# pull official base image
FROM node:13.12.0-alpine
#Owner
LABEL maintainer = "Kalyani Vetal"
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . ./
#COPY package-lock.json ./
#COPY src ./
RUN npm install 

# add app
COPY . ./

# start app
CMD ["npm", "start"]
