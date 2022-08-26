import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/components/Navigator2';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}