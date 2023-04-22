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