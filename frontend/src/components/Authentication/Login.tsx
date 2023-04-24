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
          id={styles.login_name}
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
            id={styles.login_password}
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
