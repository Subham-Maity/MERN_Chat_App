
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

