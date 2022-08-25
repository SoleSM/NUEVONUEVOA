import {View} from 'react-native'
import ListadoDeTareas from '../components/ListadoTareas'

function ToDoList() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListadoDeTareas/>
      </View>
    );
}

export default ToDoList;