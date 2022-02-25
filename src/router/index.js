import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../pages';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;
