# MERN app

> CRUD API to get all the users from the MySQL database and to view their friends.

## MySQL Database

The SQL commands for creating the tables of the database is in the root directory under the name code.sql. 


## Quick start

Launch the backend server locally and connect it to your MySQL database by providing your username, password and the database name in config/db.js.

```bash
# Install dependencies for backend server
npm install

# Install dependencies for frontend client
npm run client-install

# Run the backend nodejs(express) server only
npm run server

# Run the frontend React client only
npm run client

# Run the client & server with concurrently
npm run dev

# Backend Server runs on http://localhost:8000 and Frontend Client on http://localhost:3000
```


## Test API endpoints

Start the backend server locally and test any API endpoint using postman or any other API testing tool by adding the 'Content-type' header and set it to 'Application/json' and then if it is a POST, then add the appropriate post data in body by choosing raw and JSON option.


### Author

Abishek Srinivasan
