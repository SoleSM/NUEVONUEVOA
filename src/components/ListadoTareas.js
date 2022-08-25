import { useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native-web';
import { Input, IconButton, Text, Box, VStack, HStack, Icon, Center, Checkbox, Stack} from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";




const ListadoDeTareas = () => {
  //Estado del input
  const [input, setinput] = useState("");
  //Estado del array de tareas
  const [list, setList] = useState([]);
  //Estado del check
  const [checked, setChecked] = useState(false)


  //Función que accede a la propiedad "checked" de los objetos de list y los modifica    
  function cambiarEstadoCheck(id) {
    const item = list[id];
    item.checked = !item.checked;
    setChecked([...list]);
    console.log("Tarea completada ? " +  item.checked)
  }

  //Borrar elemento de la lista
  const DeleteItems = id => {
    setList((list) => list.filter(item => item.id !== id))
    console.log(" el id numero " + id + " se ha eliminado")
   
  };



  const manejarEnvio = () => {
    let id = list.length

    //se setea la lista con todos los elementos existentes y se agrega el nuevo (texto y id)
    setList([...list, { input, id, checked }])
    //limpiar input
    setinput("");

    console.log("Nuevo elemento agregado. ID: " + id)
  };





  const Item = ({ title }) => (
    <View >
      <Text>{title}</Text>
    </View>

  );

  const renderItem = ({ item }) => (
    <View>

        <Stack >
          <HStack space={3} justifyContent="space-between">

             <Checkbox value="test" 
             checked={item.checked} 
             ariaLabel="ChangeState"
            onChange={() => cambiarEstadoCheck(item.id)} />

              <Text alignItems="left" style={ item.checked===true ? styles.textChecked : null}>
                {item.input}
             </Text>
        
              <IconButton size="sm" colorScheme="trueGray" 
              icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />}
              onPress={() => DeleteItems(item.id)} />
          </HStack>
        </Stack>  
    </View>

  )



  return (

    <Center w="100%">
      <Box maxW="300" w="100%">
        <VStack space={4}>
          <HStack space={2}>
            <Input flex={1}
              onChange={e => setinput(e.target.value)}
              value={input}
              placeholder="Add Task" />

            <IconButton borderRadius="sm"
              variant="solid"
              icon={<Icon as={Feather}
                name="plus"
                size="sm"
                color="warmGray.50" />} onPress={manejarEnvio}
            />
          </HStack>
          <VStack space={2}>


            <SafeAreaView >
              <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>

          </VStack>
        </VStack>
      </Box>
    </Center>


  )

}


const styles = StyleSheet.create({

  textChecked:{
    textDecorationLine:'line-through',

  },
});

export default ListadoDeTareas;