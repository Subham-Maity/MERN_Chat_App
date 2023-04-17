import {VStack} from "@chakra-ui/layout";
import {FormControl, FormLabel} from "@chakra-ui/react";
import React, {useState} from "react";
import styles from "./Signup.module.css";

const Signup = () => {
    const [name, setName] = useState<string>(""); //data type as string
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

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
        </VStack>
    );
};

export default Signup;
