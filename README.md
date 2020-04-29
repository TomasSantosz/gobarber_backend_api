# GoBarber Backend api

<h1 align="center">
    <img src="./tmp/gobarber_background2.png">
</h1>


## 📑About
This project is one application created in **Bootcamp GoStack**,for the purpose of recreating a **barber shop** application.

---

## 💻Technologies used

This project was developed using:

- NodeJS
- TypeScript
- Express
- Yarn
- Patterns
- Middlewares
- TypeORM
- Eslint
- Prettier
- Docker
- Migrations

---

## 💾How clone and use this project ?

```bash

    # Clone the repository
    $ git clone https://github.com/TomasSantosz/gobarber_backend_api.git

    # Enter directory
    $ cd gobarber_backend_api

    # Install dependencies
    $ yarn

```

## 🐳Docker

  ### Create new docker container

  ```bash
    docker run --name gostack-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  ```

  ### Open in postbird and connect
  <h1 align="left">
    <img src="./tmp/postbird.png">
  </h1>

  ### Create new database with name gostack_gobarber
  <h1 align="left">
    <img src="./tmp/postbird2.png">
    <img src="./tmp/postbird3.png">
  </h1>

  ### Run migrations
  ```bash
    yarn typeorm migration:run
  ```
  ```bash
    yarn dev:server
  ```
---
## Routes
  ### Users
  #### Update Avatar:
  - **URL:** localhost:3333/users
  - **Method http:** PACTH
  - **Structured:** Multipart Form **Name:** avatar **Value:** image
  #### Create:
  - **URL:** localhost:3333/users
  - **Method http:** POST
  - **Text:** JSON
  - **Params JSON:** {
      "name": "tomas",
      "email" : "email@email.com",
      "password": "tomas"
    }

  ### Sessions
  #### Login:
  - **URL:** localhost:3333/sessions
  - **Method http:** POST
  - **Params JSON:** {
    "email" : "email@email.com",
    "password": "tomas"
  }

  ### Appointment
  ***OBS:. THIS REQUIREMENT REQUIRES TOKEN GENERATED IN LOGIN, USING BEARER TOKEN IN HEADER***
  #### List Appointments:
  - **URL:** localhost:3333/appointments
  - **Method http:** GET

  ***OBS:. THIS REQUIREMENT REQUIRES TOKEN GENERATED IN LOGIN, USING BEARER TOKEN IN HEADER***

  #### Create Appointments:
  - **URL:** localhost:3333/appointments
  - **Method http:** POST
  - **Params JSON:** {
    "provider_id": "d169bdc7-7e17-48e5-b9b8-ae1bb2700a2e",
    "date": "{% now 'iso-8601', '' %}"
  }

  ***"provider_id" -> GENERATED IN CREATE USER. RETURN "ID".***

---

### Developer Tomás Santos
#### Github: https://github.com/TomasSantosz
#### LinkedIn: https://www.linkedin.com/in/tom%C3%A1s-santos-3b9617167/
