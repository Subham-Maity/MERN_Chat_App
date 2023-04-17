import {VStack} from "@chakra-ui/layout";
import {FormControl, FormLabel, InputGroup, InputRightElement} from "@chakra-ui/react";
import React, {useState} from "react";
import styles from "./Signup.module.css";

const Signup = () => {
    const [show, setShow] = useState(false); //data type as boolean
    const [name, setName] = useState<string>(""); //data type as string
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const handleClick = () => setShow(!show);
    return (
        <VStack spacing='5px' color='gray.700'>
            <FormControl className={styles.container} id='first-name' isRequired>

                <FormLabel className="label" color='gray.200'>Name </FormLabel>
                <input
                    type="text"
                    className={`${styles.input} input`}
                    placeholder='Hey there, what’s your name?'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl className={styles.container} id='password' isRequired>

                <FormLabel className="label" color='gray.200'>Password </FormLabel>
                <InputGroup>
                    <input
                        type={show ? "text" : "password"}
                        className={`${styles.input} input`}
                        placeholder='Enter your password'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <button className="text-white" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </button>
                    </InputRightElement>

                </InputGroup>

            </FormControl>
        </VStack>
    );
};

export default Signup;
