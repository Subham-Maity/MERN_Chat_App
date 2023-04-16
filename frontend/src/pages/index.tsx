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
