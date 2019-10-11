# WeMovie

Explore, rate and review Movies

### 1. List of Features 
  (Must)
  - [ ] API Health Check
  - [ ] User signup and send verification email
  - [ ] User verification endpoint
  - [ ] User login

  (Should) 
  - [ ] Upload Movie Trailer

  (Nice)
  - [ ] Understand user reviews sentiment (positive/negative)



## 2. Installation
  WeMovie requires [Docker](https://www.docker.com/) and [Docker-Compose](https://docs.docker.com/compose/) to run

  Previous Config:
  - Define environment variables:
    - .envs/.local/.postgres

    ```sh
    # PostgreSQL
    POSTGRES_HOST=postgres
    POSTGRES_PORT=5432
    POSTGRES_DB=wemovie
    POSTGRES_USER=<define-a-user>
    POSTGRES_PASSWORD=<define-a-password>
    ```

  For a development environment run:  

  ```sh
  export COMPOSE_FILE="docker-compose.yml"
  $ docker-compose build
  $ docker-compose up
  ```
