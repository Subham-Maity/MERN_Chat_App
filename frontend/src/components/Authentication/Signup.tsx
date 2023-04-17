import { VStack } from "@chakra-ui/layout";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  const [show, setShow] = useState(false); //data type as boolean
  const [name, setName] = useState<string>(""); //data type as string
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pic, setPic] = useState();
  const handleClick = () => setShow(!show);
  return (
    <VStack spacing="5px" color="gray.700">
      <div className={styles.inputContainer} id="first-name">
        <input
          id={styles.inputField}
          type="text"
          required
          placeholder="What's should we call you?"
        />
        <label className={styles.usernameLabel} htmlFor={styles.inputField}>
          Name{" "}
        </label>

        <svg viewBox="0 0 448 512" className={styles.userIcon}>
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
        </svg>
      </div>
      <div className="mt-18"></div>
      <div className={styles.inputContainer} id="password">
        <InputGroup>
          <input
            id={styles.inputField}
            type={show ? "text" : "password"}
            required
            className={`${styles.input} input`}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <button className="text-white" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </InputRightElement>
        </InputGroup>
        <label className={styles.usernameLabel} htmlFor={styles.inputField}>
          Password{" "}
        </label>
      </div>

      <div className="mt-18"></div>
      <div className={styles.inputContainer} id="password">
        <InputGroup>
          <input
            id={styles.inputField}
            type={show ? "text" : "password"}
            required
            className={`${styles.input} input`}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <button className="text-white" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </InputRightElement>
        </InputGroup>
        <label className={styles.usernameLabel} htmlFor={styles.inputField}>
          Password{" "}
        </label>
      </div>
    </VStack>
  );
};

export default Signup;
