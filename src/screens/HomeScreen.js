import React from 'react';
import { View } from 'react-native'
import { Button, Stack, VStack } from 'native-base'
import Example from '../components/Icons';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <VStack style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Example/>
        </VStack>
        
      
    </View>
  );
}

export default HomeScreen;

