import { FormControl, Input, Stack, Box, Button, Text } from "native-base";
import { useState } from "react";


const Formulario = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const { HelperText } = FormControl;

    const dataBase = [
        { username: "Hola123", password: "Hola123" },
        { username: "Sole", password: "123" },
        { username: "Sole1", password: "123" },
        { username: "Sole2", password: "123" }
    ]


    const validate = () => {
        const newError = {}

        //Si entra en la validación, se agrega el atributo USERNAME al objeto de error
        if (user.length < 5) {
            newError.username = "El usuario debe contener al menos 5 letras"
        }

        //Si entra en la validación, se agrega el atributo PASSWORD al objeto de error
        if (password.length < 3) {
            newError.password = "El password debe contener al menos 3 letras"
        }

        
        if(user !== dataBase.find( objeto => objeto.username)){
            newError.account = "El usuario o la contraseña son incorrectos"
        } 
        
        

        setError(newError);

        //Niega que existan errores en ERROR
        return !(newError.username || newError.password || newError.account)
    }

    const onSubmit = () => {

        //si no hay errores, validate devuelve FALSE, si existen devuelve TRUE
        validate() ? console.log("todo ok :D") : console.log(error)
    }

    return (

        <Box alignItems="center">
            <Box w="100%" maxWidth="300px">
                <FormControl isRequired>
                    <Stack mx="4">
                        <Text>Username</Text>
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
                        <Text>Password</Text>
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


                {
                    !error.account
                    ? <Text>Logueado con exito!</Text>
                    : console.log(":DDD")
                }
                
            </Box>
        </Box>


    )
};

export default Formulario;