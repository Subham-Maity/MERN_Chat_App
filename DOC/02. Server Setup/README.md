## Creating Node JS Server and Express JS API
1. Create Folder of your project
2. Open terminal and type `npm init`

- You can follow this step according to your project

```bash
package name: (mern_chat_app) octochat-test
version: (1.0.0)
description:
entry point: (index.js) server.js
test command:
git repository: (https://github.com/Subham-Maity/MERN_Chat_App.git)
keywords:
author: Subham Maity
license: (ISC)
About to write to F:\mains\MERN_Chat_App\package.json:

{
  "name": "octochat-test",
  "version": "1.0.0",
  "description": "I'm trying",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Subham-Maity/MERN_Chat_App.git"
  },
  "author": "Subham Maity",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Subham-Maity/MERN_Chat_App/issues"
  },
  "homepage": "https://github.com/Subham-Maity/MERN_Chat_App#readme"
}


Is this OK? (yes)
```
3. Install Express
```bash
npm install express
```
- Express helps us to create server and routes easily
4. Create a folder named `backend` and create a file named `server.js` inside it and write the following code
```js
const express = require("express");
const app = express();

app.listen(5000, console.log("Server started on port 5000"));
```
- This code will create a server on port 5000 and will print `Server started on port 5000` in the terminal

5. Install nodemon because it will automatically restart the server when we make any changes in the code
```bash
npm install nodemon
```
- now change the `package.json` file
```json
"scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js"
  },
```
- It will do the same thing if you run `npm start` or `npm run server`

6. Let's create a small route
```js
app.get("/", (req, res) => {
  res.send("API is running...");
});
```
- Now run `npm run server` and go to `http://localhost:5000/` and you will see `API is running...` in the browser


7. Let's add some data to the server 

`backend> data > data.js`

- This is a dummy data

```json
const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Akshay Singh",
        email: "akshay.singh@yahoo.co.in",
      },
      {
        name: "Sudhanshu Patel",
        email: "sudhanshu54@rediffmail.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Akshay Singh",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Rajesh Sharma",
        email: "rajesh.sharma2@gmail.com",
      },
      {
        name: "Aakash Verma",
        email: "aakash.verma89@yahoo.co.in",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Rajesh Sharma",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Deepak Gupta",
        email: "deepak.gupta333@gmail.com",
      },
      {
        name: "Rudra Pratap Singh",
        email: "rudra_pratap_singh@hotmail.com",
      },
      {
        name: "Chhavi Malhotra",
        email: "chhavi_malhotra21@yahoo.co.in",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "College Friends",
    groupAdmin: {
      name: "Chhavi Malhotra",
      email: "chhavi_malhotra21@yahoo.co.in",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Vijay Kumar",
        email: "vijay_kumar72@rediffmail.com",
      },
      {
        name: "Arjun Singh",
        email: "arjun.singh3@yahoo.co.in",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = chats;
```
8. Make an another api to get all the chats
```js
app.get("/api/chats", (req, res) => {
  res.json(chats);
});
```
- Now run `npm run server` and go to `http://localhost:5000/api/chats` and you will see all the chats in the browser

9. Let's create a route to get a single chat by id

```js
app.get("/api/chats/:id", (req, res) => {
  //console.log(req);
  //console.log(req.params.id);
  const chat = chats.find((c) => c._id === req.params.id);
  res.send(chat);
});
```
- first if you hit on the browser `http://localhost:5000/api/chats/617a077e18c25468bc7c4dd4` using console.log(req) you will see the request object in the terminal

![image](https://user-images.githubusercontent.com/97989643/232196467-6b6e7c98-6715-459e-ab11-fbfd9134fc47.png)

- we are gonna take this id variable `req.params.id` and now reload the page and use `console.log(req.params.id);` and you will see the id in the terminal
- now we are gonna use this id to find the chat and send it to the browser
- now go to the browser and hit `http://localhost:5000/api/chats/617a077e18c25468bc7c4dd4` and you will see the chat in the browser
```json
 {"isGroupChat":false,"users":[{"name":"Akshay Singh","email":"akshay.singh@yahoo.co.in"},{"name":"Sudhanshu Patel","email":"sudhanshu54@rediffmail.com"}],"_id":"617a077e18c25468bc7c4dd4","chatName":"Akshay Singh"}
```
10. We will create a .env file to store the port number 
- create a file named `.env` in the root directory and write the following code
```js
PORT = 5000
```
> Install package dotenv `npm install dotenv`

11. Now we will use this port number in the server.js file
```js

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

```
  