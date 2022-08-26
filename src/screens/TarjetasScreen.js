import Tarjeta from "../components/TarjetasIntegrantes"
import { View } from 'react-native'
import { Button, HStack, Spacer } from 'native-base'


import Jungkook from '../assets/jungkook1.jpg'


function ViewTarjeta({ navigation }) {
  return (

    <View>

      <Tarjeta
        nombre='Jeon Jungkook'
        imagen={Jungkook}
        cargo='Bailarín, cantante, compositor'
        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' />

      <HStack>

        <Button size="sm" variant="outline"
          onPress={() => navigation.navigate('Home')}
        >
          ATRÁS
        </Button>

        <Spacer/>
        
        <Button size="sm" variant="outline"
          onPress={() => navigation.navigate('')}
        >
          SIGUIENTE
        </Button>


      </HStack>

   


    </View>



  )
}

export default ViewTarjeta;
