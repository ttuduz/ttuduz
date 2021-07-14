import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { yourComponents } from './android/app/src/components'

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="character" component={}/>
      <Tab.Screen name="todo" component={}/>
      <Tab.Screen name="settings" component={}/>
    </Tab.Navigator>
  )
}

export default TabNav;