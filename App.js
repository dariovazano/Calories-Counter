
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigation/BottomTabNavigator'
import { Provider } from 'react-redux'
import { store } from './src/store'


export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  // if (!fontsLoaded) {
  //   return null
  // }

  return (
    <Provider store={store}>

      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  )

}
