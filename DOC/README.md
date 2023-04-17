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
  

## Frontend Setup

1. Open you root directory in the terminal and run the following command
```bash
npx create-next-app frontend
```

- Choose according to your choice

2. Now go to the frontend directory and run the following command
```bash
npm install axios
```

3. For now we will use charkra ui for styling
```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
go to `_app.tsx` and add the following code
```js
import { ChakraProvider } from "@chakra-ui/react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```
For testing purpose we will add a div in the `index.tsx` file
```js
import { Button } from "@chakra-ui/react";

function Home() {
  return (
    <div className="_app">
      <Button colorScheme="teal" variant="solid">
        {" "}
        Button{" "}
      </Button>
    </div>
  );
}

export default Home;
```
> It will create a button 

4. If you want to connect frontend to backend then you have to add proxy in the `package.json` file
```json
"proxy": "http://127.0.0.1:5000",
```
> Open your browser for frontend and hit `http://localhost:3000/` and you will see the button

5. Install react router dom
```bash
npm install react-router-dom
```
- In next js we don't need this react router dom but if you want to use it you can 

6. GO to `pages` folder and inside that create a two files `homepage.tsx` and `ChatPage.tsx` and add the following code
`Homepage.tsx`
```js
import React from "react";

const Homepage = () => {
  return <div>Homepage</div>;
};

export default Homepage;
```
`ChatPage.tsx`
```js
import React from "react";

const ChatPage = () => {
  return <div>ChatPage</div>;
};

export default ChatPage;
```
> You can also use `rafce` snippet to create a functional component

Now go to your index.tsx and add the following code
```js
import { Button } from "@chakra-ui/react";
import Homepage from "./Homepage";
import ChatPage from "./ChatPage";

function Home() {
  return (
    <div className="_app">
      <Homepage />
      <ChatPage />
    </div>
  );
}

export default Home;
```
> No in your browser you will see two divs one is `Homepage` and another is `ChatPage`



7. If you visit `http://localhost:3000/` you will see the homepage and chatpage both but we want to show only one page at a time 
- but in next js no need to use react router dom and exact keyword or path keyword you can you useRouter hook
- by default if you visit `http://localhost:3000/ChatPage` it will show you the ChatPage and if you visit `http://localhost:3000/Homepage` it will show you the Homepage

8. You want if you visit `http://localhost:3000/` it will show you the Homepage and if you visit `http://localhost:3000/Chats` it will show you the ChatPage (you don't wanna visit `http://localhost:3000/ChatPage` to see the ChatPage)

For that go to `index.tsx` and add the following code

```js
import Homepage from "./Homepage";

function Home() {
  return (
    <div className="_app">
      <Homepage />
    </div>
  );
}

export default Home;
```
> Now if you visit `http://localhost:3000/` you will see the Homepage

But if you visit `http://localhost:3000/Chats` it will show you the error page because we don't have any Chats page so we have to create a chats path

- go to `_app.tsx` and add the following code and use the useRouter hook and `router.asPath` to get the current path

```js
// pages/_app.tsx

import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import ChatPage from "./ChatPage";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.asPath === "/chats" || router.asPath === "/ChatPage") {
    return <ChatPage />;
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```

- Now create a dynamic route in the `index.tsx` file
`pages > chats > index.tsx`
```js
// pages/chats/index.js
import ChatPage from "../ChatPage";

export default function Chats() {
  return <ChatPage />;
}
```
> - Make sure you import the ChatPage component in the `index.tsx` file 

> Now if you visit `http://localhost:3000/` you will see the Homepage and if you visit `http://localhost:3000/Chats` you will see the ChatPage also if you visit `http://localhost:3000/ChatPage` you will see the ChatPage

> If you use dynamic route you can remove the `router.asPath === "/ChatPage"` from the `_app.tsx` file

`_app.tsx`

```js
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```

9. Let's make a api call to the backend and get the data and display it in the frontend

We need to install axios
```bash
npm install axios
```

Now go to the `ChatPage.tsx` file and add the following code

```js
import React from "react";
import axios from "axios";

const ChatPage = () => {
  const fetchChats = async () => {
    const data = await axios.get("http://localhost:5000/api/chats");
    console.log(data);
  };

  React.useEffect(() => {
    fetchChats();
  }, []);

  return <div>ChatPage</div>;
};

export default ChatPage;

```
> You can also destructure data from response so `const { data } = await axios.get("http://localhost:5000/api/chats");` 

- Now if you visit `http://localhost:3000/Chats` you will see the ChatPage and in the console you will see the data from the backend

10. Now let's try to render this data in the frontend

- Go to the `ChatPage.tsx` file and add the following code

> we need useState hook to store the data from the backend

```tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
interface Chat {
  _id: string;
  chatName: string;
  // ... other properties of the chat data
}
const ChatPage = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chats");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
```

> Now if you visit `http://localhost:3000/Chats` you will see the ChatPage and in the console you will see the data from the backend and also you will see the chatName in the frontend


- First we need to store data in the state (useState hook - you can think of it as a variable that can be changed and it will re-render the component When the state changes, the component will re-render with the updated state) and then we need to map over the data and display it in the frontend
- The useState hook returns an array with two elements: the current state value and a function to update the state. Chats is the current state value that holds the data from the backend, and setChats is the function to update the state with new data. The fetchChats function is used to fetch data from the backend and then update the state using setChats. This way, when new data is fetched, it can be stored in the chats state and the component will re-render with the updated data.
- Now pass the data to the `setChats` function so the data will be stored in the chats state and the component will re-render with the updated 
- Now we need to map over the data and display it in the frontend so in the return statement first use chats.map and then pass the chat as a parameter and then return the chatName 
- But you will get an error related to the key prop so add a key prop to the div and pass the chat._id as a value
- This is typescript so we need to add the type of the data so add the interface Chat and add the properties of the data and then pass the Chat type to the useState hook `useState<Chat[]>`


## Schema Design

- ChatName
- isGroupChat
- users
- latestMessage
- groupAdmin

1. First we need mongoose so install mongoose
```bash
npm install mongoose
```
2. In the backend folder create a folder called models and in the models folder create a file called chatModel.js
> Insde the codeblock you will understand what is going on

```js
// Import mongoose library
const mongoose = require("mongoose");
// Define a schema object using mongoose.Schema constructor
// A schema is a configuration object that defines the structure and properties of the documents in a MongoDB collection
// A schema also defines validation, getters, setters, virtuals, indexes and middleware for the documents
const chatModel = mongoose.Schema(
  {
    // chatName is a string property that holds the name of the chat
    chatName: {
      type: String, // Specify the type of the property using the type key
      // The type key tells mongoose what data type this property should have and how to cast it
      // Mongoose supports several built-in types like String, Number, Date, etc. as well as custom types
      trim: true // Specify additional options using other keys, such as trim
      // The trim option tells mongoose to remove any whitespace from the beginning and end of the value before saving it to the database
    },
    // isGroupChat is a boolean property that indicates whether the chat is a group chat or not
    isGroupChat: {
      type: Boolean,
      default: false // Specify a default value using the default key
      // The default option tells mongoose what value to use if this property is not specified when creating a new document
    },
    // users is an array property that references the User model
    users: [
      {
        type: mongoose.Schema.Types.ObjectId, // Specify the type of the elements in the array using mongoose.Schema.Types
        // mongoose.Schema.Types is an object that contains all the valid types for schema properties
        // ObjectId is a special type that represents a 12-byte MongoDB ObjectId
        ref: "User" // Specify the model that this property references using the ref key
        // The ref option tells mongoose which model to use when populating this property with actual documents from another collection
        // Population is a feature that lets you replace the ids in an array with the corresponding documents from another collection
      }
    ],
    // latestMessage is a property that references the Message model
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    },
    // groupAdmin is a property that references the User model
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true // Specify schema-level options using the second argument of the mongoose.Schema constructor
    // The timestamps option tells mongoose to automatically add createdAt and updatedAt fields to the chat document
    // These fields store the date and time when the chat was created and last modified
  }
);
// Convert the schema into a model using mongoose.model function
const Chat = mongoose.model("Chat", chatModel);
// A model is a class that represents a collection in MongoDB and provides methods to create, read, update and delete documents in that collection
// The first argument of mongoose.model is the name of the model and the collection in MongoDB (in singular form)
// The second argument is the schema that defines the structure and properties of the documents in that collection
// Export the model so it can be used in other modules
module.exports = Chat;
```

3. Now create message model so inside model folder create a file called messageModel.js

```js
// require mongoose, a library that provides a high-level interface for interacting with MongoDB
const mongoose = require("mongoose");
// require bcryptjs, a library that provides a secure way of hashing and comparing passwords
const bcrypt = require("bcryptjs");

// define a schema for the user collection using mongoose.Schema
const userSchema = mongoose.Schema(
  {
    // a string that contains the user's name, which is a required field
    name: { type: "String", required: true },
    // a string that contains the user's email address, which is a required and unique field
    email: { type: "String", unique: true, required: true },
    // a string that contains the user's password, which is a required field
    password: { type: "String", required: true },
    // a string that contains the user's profile picture URL, which is a required field with a default value
    pic: {
      type: "String",
      required: true,
      //if someone doesn't upload a profile picture, a default profile picture will be used
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    // a boolean that indicates whether the user is an administrator or not, which is a required field with a default value of false
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  // an option object that enables the creation of createdAt and updatedAt fields for each document in the collection
  { timestaps: true }
);

// create a User model using mongoose.model with the user schema
const User = mongoose.model("User", userSchema);

// export the User model for use in other modules using module.exports
module.exports = User;
```

## User Authentication Forms in NextJs

- Index.tsx for the background
```
import Homepage from "./Homepage";
import styles from "./index.module.css";
import { ChakraProvider } from "@chakra-ui/react";

function Home() {
  return (
    <ChakraProvider>
      <div className={styles.App}>
        <Homepage />
      </div>
    </ChakraProvider>
  );
}

export default Home;
```
- CSS file for the background(index.module.css)
```css
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap");

.App {
    min-height: 100vh;
    display: flex;
    background: #092756;
    background: -moz-radial-gradient(
            0% 100%,
            ellipse cover,
            rgba(104, 128, 138, 0.4) 10%,
            rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(
            0% 100%,
            ellipse cover,
            rgba(104, 128, 138, 0.4) 10%,
            rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
                    42,
                    60,
                    87,
                    0.4
            ) 100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -o-radial-gradient(
            0% 100%,
            ellipse cover,
            rgba(104, 128, 138, 0.4) 10%,
            rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -ms-radial-gradient(
            0% 100%,
            ellipse cover,
            rgba(104, 128, 138, 0.4) 10%,
            rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(
            0% 100%,
            ellipse cover,
            rgba(104, 128, 138, 0.4) 10%,
            rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
            to bottom,
            rgba(57, 173, 219, 0.25) 0%,
            rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3E1D6D', endColorstr='#092756', GradientType=1);
    background-position: center;
    background-size: cover;
}
```

1. Now use some Charkra ui and Tailwind then make a basic page so open your `Homepage.tsx` file and add the following code

```js
import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "@/components/Authentication/Login";
import Signup from "@/components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent mt="8">
      <Box
        bg="rgba(31, 41, 55, 0.8)"
        rounded="lg"
        border="1px"
        borderColor="gray.700"
        p="6"
        mb="4"
        w="full"
      >
        <h1 className="text-white text-4xl font-semibold">Octo Meet</h1>
      </Box>
      <Box
        bg="rgba(31, 41, 55, 0.4)"
        rounded="lg"
        border="1px"
        borderColor="gray.700"
        p="6"
        mb="4"
        w="full"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="4">
            <Tab
              className="rounded-lg border border-gray-700 p-2 m-2 w-full text-center transition-colors duration-300 hover:bg-gray-700 hover:border-gray-800 hover:text-gray-200"
              _focus={{ outline: "none", boxShadow: "outline" }}
            >
              Login
            </Tab>
            <Tab
              className="text-white rounded-lg border border-gray-700 p-2 m-2 w-full text-center transition-colors duration-300 hover:bg-gray-700 hover:border-gray-800 hover:text-gray-200"
              _focus={{ outline: "none", boxShadow: "outline" }}
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
```

2. Now create a folder called `components` and inside that folder create a folder called `Authentication` and inside that folder create two files `Login.tsx` and `Signup.tsx` and add the following code

- `Signup.tsx`

```tsx
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  const [show, setShow] = useState(false); //data type as boolean
  const [name, setName] = useState<string>(""); //data type as string
  const [email, setEmail] = useState<string>("");
  const [confirmpassword, setConfirmpassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pic, setPic] = useState();
  const handleClick = () => setShow(!show);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {};
  const postDetails = (pics: FileList | null) => {}; //We will change it future ❗
  return (
    <VStack spacing="5px" color="gray.700">
      {/*//Name of the user*/}
      <div className={styles.inputContainer} id="first-name">
        <input
          id={styles.inputField}
          type="text"
          required
          placeholder="What's should we call you? 🙂"
          onChange={(e) => setName(e.target.value)}
        />
        <label className={styles.usernameLabel} htmlFor={styles.inputField}>
          Name{" "}
        </label>

        <svg viewBox="0 0 448 512" className={styles.userIcon}>
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
        </svg>
      </div>

      {/*//Email of the user*/}
      <div className="mt-18"></div>

      <div className={styles.inputContainer}>
        <FormControl id="email" isRequired>
          <FormLabel
            style={{
              opacity: 0.2,
              fontFamily: "Helvetica Neue",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
            className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2"
          >
            Email Address
          </FormLabel>
        </FormControl>
        <input
          id={styles.inputField}
          type="email"
          required
          placeholder="Now Enter Your Email ✨"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/*//Password of the user*/}
      <div className="mt-18"></div>
      <div className={styles.inputContainer}>
        <FormControl id="password" isRequired>
          <FormLabel
            style={{
              opacity: 0.2,
              fontFamily: "Helvetica Neue",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
            className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2"
          >
            Password
          </FormLabel>
        </FormControl>
        <InputGroup>
          <input
            id={styles.inputField}
            type={show ? "text" : "password"}
            required
            className={`${styles.input} input`}
            placeholder="Enter Strong password 🔐"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              className="text-white input-group-button"
              onClick={handleClick}
              variant="ghost"
              fontSize="sm"
              fontFamily="sans-serif"
              colorScheme="gray"
              _hover={{ bg: "gray.700" }}
              bg="transparent"
              textColor={show ? "gray.300" : "gray.500"}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      {/*Confirmation of password*/}
      <div className="mt-18"></div>
      <div className={styles.inputContainer}>
        <FormControl id="password" isRequired>
          <FormLabel
            style={{
              opacity: 0.2,
              fontFamily: "Helvetica Neue",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
            className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2"
          >
            Confirm Password
          </FormLabel>
        </FormControl>
        <InputGroup>
          <input
            id={styles.inputField}
            type={show ? "text" : "password"}
            required
            className={`${styles.input} input`}
            placeholder="Confirm your password 🗝️"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              className="text-white input-group-button"
              onClick={handleClick}
              variant="ghost"
              fontSize="sm"
              fontFamily="sans-serif"
              colorScheme="gray"
              _hover={{ bg: "gray.700" }}
              bg="transparent"
              textColor={show ? "gray.300" : "gray.500"}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      {/*//Profile picture of the user*/}
      <div className="mt-18"></div>
      <div className={styles.inputContainer}>
        <FormControl id="pic" isRequired>
          <FormLabel
            style={{
              opacity: 0.2,
              fontFamily: "Helvetica Neue",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
            className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2"
          >
            Upload Profile Picture 📸
          </FormLabel>
        </FormControl>
        <InputGroup>
          <input
            id={styles.inputField}
            type="file"
            accept="image/*"
            className={`${styles.input} input`}
            placeholder="Upload Profile Pictur🗝️"
            //We will change it future ❗
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                postDetails(e.target.files);
              }
            }}
          />
        </InputGroup>
      </div>
      <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
```
- Add css file for the signup page so make a file named `Signup.module.css` in the same folder and add the following code in it.
```css
.inputContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#inputField {
    width: 460px;
    max-width: 100%;
    height: 45px;
    border: none;
    outline: none;
    padding: 0px 7px;
    font-size: 15px;
    color: white;
    background-color: transparent;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
    -1px -1px 6px rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    font-weight: 500;
    caret-color: rgb(155, 78, 255);
    transition: width 0.3s ease; /* add transition property */
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

#inputField:focus {
    width: 480px;
    max-width: 100%;
    height: 45px;
    border: none;
    outline: none;
    padding: 0px 7px;
    font-size: 15px;
    background-color: transparent;
    box-shadow: 3px 3px 10px rgb(26, 42, 44),
    -1px -1px 6px rgba(255, 255, 255, 0.4),
    inset 3px 3px 10px rgba(0, 0, 0, 1),
    inset -1px -1px 6px rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    color: #c17d97;
    font-weight: 500;
    caret-color: rgb(155, 78, 255);
    transition: width 0.3s ease; /* add transition property */
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

@media (max-width: 767px) {
    #inputField {
        width: 100%;
    }

    #inputField:focus {
        width: 100%;
    }
}

.userIcon {
    position: absolute;
    fill: rgb(155, 78, 255);
    width: 12px;
    height: 12px;
    top: -23px;
    left: -15px;
    opacity: 0;
    transition: .2s linear;
}

.usernameLabel {
    position: absolute;
    top: -25px;
    left: 5px;
    color: #b0afaf;
    font-size: 14px;
    font-weight: 500;
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    overflow: hidden;
    transition: .2s linear;
    opacity: 0;
}

#inputField:focus ~ .usernameLabel,
#inputField:valid ~ .usernameLabel {
    transform: translateX(20px);
    opacity: 1;
    font-size: 12px;
}

#inputField:focus ~ .userIcon,
#inputField:valid ~ .userIcon {
    transform: translateX(20px);
    opacity: 1;
}

#inputField:focus,
#inputField:valid {
    background-color: #37344f;
    transition-duration: .3s;
}

```

- Now just do same for the `login page` and you are done with the frontend part of the project.

```js
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";
import styles from "./Signup.module.css";

const Login = () => {
  const [show, setShow] = useState(false); //data type as boolean
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClick = () => setShow(!show);
  const submitHandler = () => {};

  return (
    <VStack spacing="5px" color="gray.700">
      {/*//Email of the user*/}
      <div className="mt-18"></div>

      <div className={styles.inputContainer}>
        <FormControl id="email" isRequired>
          <FormLabel
            style={{
              opacity: 0.2,
              fontFamily: "Helvetica Neue",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
            className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2"
          >
            Email Address
          </FormLabel>
        </FormControl>
        <input
          id={styles.inputField}
          type="email"
          required
          placeholder="Now Enter Your Email ✨"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/*//Password of the user*/}
      <div className="mt-18"></div>
      <div className={styles.inputContainer}>
        <FormControl id="password" isRequired>
          <FormLabel
            style={{
              opacity: 0.2,
              fontFamily: "Helvetica Neue",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
            className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2"
          >
            Password
          </FormLabel>
        </FormControl>
        <InputGroup>
          <input
            id={styles.inputField}
            type={show ? "text" : "password"}
            required
            className={`${styles.input} input`}
            placeholder="Enter Strong password 🔐"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              className="text-white input-group-button"
              onClick={handleClick}
              variant="ghost"
              fontSize="sm"
              fontFamily="sans-serif"
              colorScheme="gray"
              _hover={{ bg: "gray.700" }}
              bg="transparent"
              textColor={show ? "gray.300" : "gray.500"}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}>
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Access as a Guest User
      </Button>
    </VStack>
  );
};

export default Login;
```
> We borrow same css from the signup page and use it in the login page.

