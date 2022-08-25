import React from 'react';
import { View } from 'react-native'
import { Button, Stack } from 'native-base'



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Stack mb="2.5" mt="1.5" direction={{
        base: "column",
        md: "row"
      }} space={2} mx={{
        base: "auto",
        md: "0"
      }}>

        <Button size="sm" variant="outline"
          onPress={() => navigation.navigate('Tarjeta')}
        >
          TARJETAS
        </Button>

        <Button size="sm" variant="outline" colorScheme="secondary"
          onPress={() => navigation.navigate('Tareas')}
          title='ToDoApp'>
          TO DO APP
        </Button>

      </Stack>

      

    </View>
  );
}

export default HomeScreen;

