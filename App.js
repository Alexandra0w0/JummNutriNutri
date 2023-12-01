import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Importa tus pantallas y componentes necesarios aquí
import SplashScreen from './screens/SplashScreen';
import Header from "./components/Header";
import Registration from './screens/Registration';
import LoginUsuario from './screens/LoginUsuario';
import Dashboard from './screens/Dashboard';
import AlimentosScreen from './screens/AlimentosScreen';
import Alimentos from './screens/Alimentos';
import suenio from './screens/suenio'
import Ejercicio from './screens/Ejercicio'
import Agua from './screens/Agua';
import { firebase } from './config';
//
const Stack = createStackNavigator();
//
function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [initializeApp, setInitializing] = useState(true);
  const [user, setUser] = useState();
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
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializeApp) setInitializing(false);
    });
    return () => subscriber(); // Detener el listener cuando el componente se desmonte
  }, [initializeApp]);
  if (!appIsReady) return <SplashScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {!user ? ( // Verificar si el usuario no está autenticado
          <>
            <Stack.Screen
              name="Login"
              component={LoginUsuario}
              options={{
                headerTitle: () => <Header name="" />,
                headerStyle: {
                }
              }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{
                headerTitle: () => <Header name="" />,
                headerStyle: {
                }
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerTitle: () => <Header name="JummNutri" />,
              headerStyle: {
              }
            }}

          />

        )}
        <Stack.Screen
          name="AlimentosScreen"
          component={AlimentosScreen}
          options={{
            // ...opciones de configuración si las tienes
          }}
        />
        <Stack.Screen
          name="Alimentos"
          component={Alimentos}
          options={{
            // ...opciones de configuración si las tienes
          }}
        />
        <Stack.Screen
          name="suenio"
          component={suenio}
          options={{
            // ...opciones de configuración si las tienes
          }}
        />
        <Stack.Screen
          name="Ejercicio"
          component={Ejercicio}
          options={{
            // ...opciones de configuración si las tienes
          }}
        />
        <Stack.Screen
          name="Agua"
          component={Agua}
          options={{
            // ...opciones de configuración si las tienes
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
