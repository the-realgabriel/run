import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";


import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './component/onboarding/Onboarding';
import Home from './screens/Home';
import Auth from './auth/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding/>
      <NavigationContainer>
        <Stack.Screen name="Auth" component={Auth}/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
