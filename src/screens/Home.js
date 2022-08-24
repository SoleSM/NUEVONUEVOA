import {View} from 'react-native'
import ListadoTareas from '../components/ListadoTareas';

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListadoTareas/>
      </View>
    );
}

export default HomeScreen;

  