/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListsView from './components/ListsView'
import ListDetailsView from './components/ListDetailsView'

const Stack = createStackNavigator()

const App = () => {
  const [headerTitle, setHeaderTitle] = useState('')

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{
            title: 'My Shopping Lists',
            headerStyle: {
              backgroundColor: '#E57F00'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 18,
              textTransform: 'uppercase'
            }
          }}
        >
          {props => <ListsView {...props} setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        <Stack.Screen
          name='List Details'
          component={ListDetailsView}
          options={{
            title: headerTitle,
            headerStyle: {
              backgroundColor: '#E57F00'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 18
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
