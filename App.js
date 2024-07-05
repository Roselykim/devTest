import React from 'react';
import { StyleSheet, View ,Text } from 'react-native';
import ReporterApp from './components/reporter';
import Login from './components/Login';
import Registration from './components/Registration';
import names from './utils';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './components/UserContext';
import Home from './components/Home';
import Away from './components/Away';
// import Map from './components/Map';

const Stack = createStackNavigator();

function App () {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={names.REGISTRATION} screenOptions={{headerShown: false}}>
        <Stack.Screen name={names.REGISTRATION} component={Registration} />
        <Stack.Screen name={names.LOGIN} component={Login} />
        <Stack.Screen name={names.HOME} component={Home} />
        <Stack.Screen name={names.AWAY} component={Away} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
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

export default App;

