import { useState } from "react";
import { Button, Center, PresenceTransition } from "native-base";
import GatoImagen from "./gatoImagen";

const Example = () => {

    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Center>
            <Button onPress={() => setIsOpen(!isOpen)}>
                {isOpen ? "Hide" : "Show"}
            </Button>
            <PresenceTransition visible={isOpen} initial={{
                opacity: 0
            }} animate={{
                opacity: 1,
                transition: {
                    duration: 250
                }
            }}>

               <GatoImagen/>

            </PresenceTransition>
        </Center>
    )
};

export default Example;