import { useState } from "react";
import { Button, Center, PresenceTransition, Avatar } from "native-base";

const Example = () => {

    const uri = 'data:image/jpeg;base64,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'

    const [isOpen, setIsOpen] = useState(false);
    return <Center>
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

            <Avatar size='2xl' source={{ uri: uri }} />

        </PresenceTransition>
    </Center>;
};

export default Example;