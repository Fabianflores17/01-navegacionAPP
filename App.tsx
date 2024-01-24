import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { ContadorScreen } from './src/screens/ContadorScreen';





const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor : 'black'}}>
      <Text style={{
        color: 'white'
      }}>CONTADOR REACT NATIVE</Text>
      <Button
        title="IR AL CONTADOR"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}  



// function DetailsScreen({ navigation }) {
//   return (
//     <View style={
//       { flex: 2 ,alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Detalles del contador</Text>

//       <ContadorScreen/>

     
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

export const App = () => {

  

  return (
    // <HolaMundoScreen />
    // <ContadorScreen />
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
          <Stack.Screen  name="Details" component={ContadorScreen} />
       
    </Stack.Navigator>
  </NavigationContainer>
  )
}
