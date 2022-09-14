import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tarjetas, ToDoList, Home, Form } from '../screens/index'


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#FFFFFF"
      inactiveColor="#EE4BC7"
      shifting={true}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#000000' }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ToDoList}
        options={{
          tabBarLabel: 'Mis Tareas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Tarjetas}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Formulario"
        component={Form}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;