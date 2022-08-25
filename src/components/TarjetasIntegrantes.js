import { View, Image, Text} from "react-native-web";
import styles from '../styles/tarjetaStyle'
import { VStack, HStack} from "native-base";

const Tarjeta = (props) => {
    return(

        <View>
            <HStack w="70%" justifyContent="space-between" alignItems="center">
                
                <Image style={styles.imagen} source={require(`../assets/${props.imagen}.jpg`)}></Image>
                <VStack style={styles.contenedorTexto}>
                    <Text style={styles.nombre}>{props.nombre}</Text> 
                    
                    <Text style={styles.cargo}>{props.cargo}</Text>
                    
                    <Text style={styles.texto}>{props.texto}</Text>
                </VStack>
               
            </HStack>


        </View>


    )
}


export default Tarjeta;