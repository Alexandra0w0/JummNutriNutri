import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import RegistroScreen from './screens/RegistroScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Splash'
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Registro"
        component={RegistroScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function inicia() {
      try {
        // Simula una carga de 5 segundos
        await new Promise((resolve) => {
          setTimeout(resolve, 5000);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsReady(true);
      }
    }
    inicia();
  }, []); // Agrega un array vacío para que useEffect solo se ejecute una vez al montar

  return (
    <NavigationContainer>
      {appIsReady ? <BottomTab /> : <NavStack />}
    </NavigationContainer>
  );
}
