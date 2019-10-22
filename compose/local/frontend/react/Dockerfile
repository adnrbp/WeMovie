FROM node

ENV APP_HOME /usr/src/app

# 1-Set working directory
WORKDIR $APP_HOME

# 2-Install dependencies
COPY ./frontend/package*.json $APP_HOME/
RUN npm install

# 3-Add rest of the client code
#COPY ./frontend $APP_HOME

EXPOSE 3001

CMD ["npm", "run", "start"]