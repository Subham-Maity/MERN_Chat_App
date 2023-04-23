import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {
  // Access environment variables
  const cloudinaryUploadPreset =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? "";
  const cloudinaryCloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "";
  const [show, setShow] = useState(false); //data type as boolean
  const [name, setName] = useState<string>(""); //data type as string
  const [email, setEmail] = useState<string>("");
  const [confirmpassword, setConfirmpassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleClick = () => setShow(!show);
  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill All Fields",
        status: "warning",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords do not match",
        status: "warning",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Account Created Successfully!",
        status: "success",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      router.push("/chats");
    } catch (error: any) {
      // add type annotation here
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setPicLoading(false);
    }
  };

  //pic upload - cloudinary (profile pic)
  const postDetails = (pics: File | undefined) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", cloudinaryUploadPreset);
      data.append("cloud_name", cloudinaryCloudName);
      fetch(
        `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setPicLoading(false);
      return;
    }
  };

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
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                postDetails(e.target.files[0]);
              }
            }}
          />
        </InputGroup>
      </div>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
