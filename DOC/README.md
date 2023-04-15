## What is MERN Stack?

MERN is a full stack JavaScript framework that is used to build web applications. It is a combination of four technologies: MongoDB, Express, React, and Node.js. 

- **React**
  1. FRONTEND LIBRARY BUILT BY FACEBOOK
  2. REUSABLE COMPONENT(Basically we don't need to write the same code again and again for different pages)
  3. VIRTUAL DOM(When you click on a button, it doesn't refresh the whole page, it just refreshes the part that you have clicked on)
  4. SUPER FAST

- **Node.js**  

  1. JAVASCRIPT RUNTIME BUILT ON CHROME'S V8 ENGINE(We can run javascript outside the browser)
  2. SCALABLE WEB SERVER(We can handle a lot of requests at the same time)
  3. NODE PACKAGE MANAGER(NPM)
  4. DEVELOP REAL TIME SYSTEMS(CHAT APPLICATIONS, REAL TIME DATA)

- **Express**
  
  1. NODE JS FRAMEWORK(We can use node js without express but express makes it easier)
  2. POWERFUL ROUTING API(We can create different routes for different pages)
  3. DETAILED DOCUMENTATION(https://expressjs.com/en/guide/routing.html)
  4. HIGH PERFORMANCE(We can handle a lot of requests at the same time)
  5. MANY THIRD PARTY PLUGINS(We can use many plugins to make our work easier)

- **MongoDB**
  1. CROSS PLATFORM, NO SQL AND DOCUMENT-ORIENTED(We can use it on any platform and we don't need to create tables)
  2. ALWAYS ON(We don't need to turn it on and off)
  3. HIGHLY SCALABLE(We can handle a lot of requests at the same time)
  4. FLEXIBLE SCHEMA(We can add or remove fields from the database without any problem)
### Data Flow in Our App

![image](https://user-images.githubusercontent.com/97989643/232187048-3d2b5f3c-d291-4835-a454-7c29bff45302.png)

First, our React app sends a request to the Express web framework using an endpoint such as `/api/chat` for a GET request to retrieve all chat data or `/api/chat/:id` for a GET request to retrieve a specific chat by its ID. The Express server receives the request and forwards it to the Node.js server. The Node.js server uses Mongoose to connect to the MongoDB database and makes a query to retrieve or manipulate data from the database. For example, for a GET request to retrieve all chat data, the query might look like `Chat.find({})`. For a POST request to create a new chat, the query might look like `Chat.create(newChat)`. For a PUT request to update an existing chat, the query might look like `Chat.findByIdAndUpdate(id, updatedChat)`. For a DELETE request to delete an existing chat, the query might look like `Chat.findByIdAndDelete(id)`. The MongoDB database processes the request and sends the data back to the Node.js server. The Node.js server then sends the data to the Express server, which formats it into JSON and sends it back to the React app. Finally, the React app receives the data and displays it on the screen.



## Tools Used

1. **Visual Studio Code** - https://code.visualstudio.com/
  - Extention 
    - **Prettier** - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
    - **ESLint** - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
    - **Material Icon Theme** - https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
    - **Live Server** - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    - **Bracket Pair Colorizer** - https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer
    - **AutRename Tag** - https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag
    - **Auto Close Tag** - https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
    - **ES7 React/Redux/GraphQL/React-Native snippets** - https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
    - **JavaScript (ES6) code snippets** - https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptS
    - **Use Formats on Save** - Settings > Text Editor > Formatting > Format On Save
2. **MongoDB Atlas** - https://www.mongodb.com/cloud/atlas
3. **Postman** - https://www.postman.com/
4. **Heroku** - https://www.heroku.com/
5. **Git** - https://git-scm.com/
6. **Github** - https://github.com/
7. **NPM** - https://www.npmjs.com/
8. **Node.js** - https://nodejs.org/en/
9. **Express** - https://expressjs.com/
10. **React** - https://reactjs.org/
11. **MongoDB** - https://www.mongodb.com/
12. **Mongoose** - https://mongoosejs.com/
13. **Socket.io** - https://socket.io/
14. **React Router** - https://reactrouter.com/
15. **React Scroll** - https://www.npmjs.com/package/react-scroll
16. **React Scroll To Bottom** - https://www.npmjs.com/package/react-scroll-to-bottom


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
  
