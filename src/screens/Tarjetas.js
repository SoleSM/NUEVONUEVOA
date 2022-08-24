import Tarjeta from "../components/TarjetasIntegrantes"
import {View, Button} from 'react-native'


function ViewTarjeta({ navigation }){
    return(
  
      <View>
  
          <Tarjeta
          nombre='Jeon Jungkook'
          imagen='jungkook1'
          cargo='Bailarín, cantante, compositor'
          texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla '/>
      
          <Button 
          onPress={()=> navigation.navigate('Tareas')}
          title='CLICK'
          />
  
          <Button
            title="Go to Tarjeta... again"
            onPress={() => navigation.push('Tarjeta')}
          />
          
          <Button title="Go back" onPress={() => navigation.goBack()} />
  
          <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
  
         
          </View>
      
  
  
    )
  }

  export default ViewTarjeta;
  