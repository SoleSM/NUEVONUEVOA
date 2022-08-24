import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from 'native-base';
import Navigator from './src/components/Navigator';


export default function App() {
  
  return (
    <NativeBaseProvider>
      <Navigator/>
    </NativeBaseProvider>
  );
}