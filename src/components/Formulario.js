import { FormControl, Input, Stack, Box, Button, Text } from "native-base";
import { useState } from "react";


const Formulario = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([{}]);

    const { Label, HelperText } = FormControl;


    const validate = () => {
        setError([{}]);

        if (user.length < 5) {
           const newError =  { username: "El usuario debe contener al menos 5 letras" }
           setError([...error, newError]);
            return false;
        }

        if (password.length < 3) {
             const newError = { password: "El password debe contener al menos 3 letras" }
             setError([...error, newError]);
            return false;
        }
        return true;
    }

    const onSubmit = () => {

        validate() ? console.log("todo ok :D") : console.log("no")
    }

    return (

        <Box alignItems="center">
            <Box w="100%" maxWidth="300px">
                <FormControl isRequired>
                    <Stack mx="4">
                        <Label>Username</Label>
                        <Input type="text" placeholder="username"
                            onChangeText={value => setUser(value)} />
                    </Stack>
                    {

                        error.username
                            ? <Text>Error en usuario</Text>
                            : <HelperText>
                                Name should contain atleast 5 character.
                            </HelperText>
                    }
                    <Stack mx="4">
                        <Label>Password</Label>
                        <Input type="password" placeholder="password"
                            onChangeText={value => setPassword(value)} />
                    </Stack>
                    {
                        error.password
                            ? <Text>Error en password</Text>
                            : <HelperText>
                                password should contain atleast 3 character.
                            </HelperText>
                    }
                    <Button onPress={onSubmit}>Enviar</Button>
                </FormControl>
            </Box>
        </Box>


    )
};

export default Formulario;