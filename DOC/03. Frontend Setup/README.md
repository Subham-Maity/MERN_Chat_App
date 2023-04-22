

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
