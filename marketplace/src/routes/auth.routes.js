import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Catalog from '../pages/catalog';
const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes(){
  return(
    <Navigator>
      <Screen
        name='Catalog'
        component={Catalog}
        options={{
          title:'Catalog',
          headerTitleAlig:'center'
        }}
      />
    </Navigator>
  );
}
