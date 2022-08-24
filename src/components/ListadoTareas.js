import {useState} from "react";
import { Button, TextInput, View, FlatList, SafeAreaView, Text, StatusBar, StyleSheet} from 'react-native-web';
import { CheckBox} from "react-native-btr";



const ListadoTareas = () => {
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
  console.log(item.checked)
}

//Borrar elemento de la lista
const DeleteItems = id => {
  setList((list) => list.filter(item => item.id !== id))
  console.log(list)
};



    const manejarEnvio = () => {
        let id = list.length
        
        //se setea la lista con todos los elementos existentes y se agrega el nuevo (texto y id)
        setList([...list, {input, id, checked}]) 
        //limpiar input
        setinput("");
    };

  

  

    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={[styles.title, checked && styles.textChecked]}>{title}</Text>
        </View>
      
    );

    const renderItem = ({ item }) => (
      <View>

        <Item title={item.input} />
        <CheckBox
        checked={item.checked}
        onPress={()=> cambiarEstadoCheck(item.id)}
        style={styles.checkbox}
       />
        <Button
        title="X"
        onPress={() => DeleteItems(item.id)}/>

      </View>
      
    )

    

    return(
    <View style={styles.container}>

        <div style={styles.div}>

        <TextInput style={styles.input} placeholder= 'Ingrese la tarea'
        value={input}
        onChange={e => setinput(e.target.value)}
        />
        
        <Button style={styles.boton}
        disabled={input ? "" : "disabled"}
        onPress={manejarEnvio}
        title="agregar"/>


        </div>
      
        
       

        <SafeAreaView style={styles.container}>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          
            
          />
        </SafeAreaView>


    </View>
        
    )
  


}


const styles = StyleSheet.create({
    container: {
        alignItems: "normal",
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 10,
    },
    textChecked:{
      fontSize: 10,
      textDecorationLine:'line-through',
      textDecorationStyle:'solid'

    },
    checkbox: {
      alignSelf: "center",
    },
    div:{
        flexDirection: "row",
    }
   
  });
  
export default ListadoTareas;