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
          <FormLabel className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2">
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
          <FormLabel className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2">
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
            <button className="text-white" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </InputRightElement>
        </InputGroup>
      </div>
      {/*Confirmation of password*/}
      <div className="mt-18"></div>
      <div className={styles.inputContainer}>
        <FormControl id="password" isRequired>
          <FormLabel className="text-transparent tex bg-clip-text bg-gradient-to-l from-slate-500 via-red-800 to-purple-300  pl-2 mt-2">
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
            <button className="text-white" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </InputRightElement>
        </InputGroup>
      </div>
    </VStack>
  );
};

export default Signup;
