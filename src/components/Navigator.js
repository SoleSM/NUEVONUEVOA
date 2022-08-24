import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import ViewTarjeta from "../screens/Tarjetas";
import HomeScreen from "../screens/Home";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tarjeta" component={ViewTarjeta} />
                <Stack.Screen name="Tareas" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigator;
