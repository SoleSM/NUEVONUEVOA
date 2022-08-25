import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import {Home, Tarjetas, ToDoList} from '../screens/index'

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Tarjeta" component={Tarjetas} />
                <Stack.Screen name="Tareas" component={ToDoList}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigator;
