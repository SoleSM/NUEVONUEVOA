import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {Home, Tarjetas, ToDoList, Formulario} from '../screens/index'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (


        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Tarjeta" component={Tarjetas} />
                <Stack.Screen name="Tareas" component={ToDoList}/>
                <Stack.Screen name="Form" component={Formulario}/>
            </Stack.Navigator>
        </NavigationContainer>
        

    )
}

export default Navigator;
