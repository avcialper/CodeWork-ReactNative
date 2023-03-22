import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import JobsPage from './pages/JobsPage'
import DetailPage from './pages/DetailPage'
import FavoritesPage from './pages/FavoritedJobsPage'
import SubmitesPage from './pages/SubmitedPage'
import store from './context/store'
import { Provider } from 'react-redux'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

const JobsStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#ef5350',
      headerTitleAlign: 'center',
    }} >
      <Stack.Screen name='JobsPage' component={JobsPage} options={{ title: 'JOBS' }} />
      <Stack.Screen name='DetailPage' component={DetailPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const FavoriteStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#ef5350',
      headerTitleAlign: 'center',
    }} >
      <Stack.Screen name='FavoritesPage' component={FavoritesPage} options={{ title: 'FAVORITED' }} />
      <Stack.Screen name='DetailPage' component={DetailPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const SubmitStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#ef5350',
      headerTitleAlign: 'center',
    }} >
      <Stack.Screen name='SubmitesPage' component={SubmitesPage} options={{ title: 'SUBMITED' }} />
      <Stack.Screen name='DetailPage' component={DetailPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#ef5350',
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: '#ef5350',
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: 'white',
          drawerStyle: { backgroundColor: '#161b22' }
        }}
        >
          <Drawer.Screen name='JOBS' component={JobsStack} />
          <Drawer.Screen name='FAVORITED' component={FavoriteStack}/>
          <Drawer.Screen name='SUBMITED' component={SubmitStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}