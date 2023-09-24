
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import StackNavigator from './src/navigation/StackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigation/BottomTabNavigator'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  // if (!fontsLoaded) {
  //   return null
  // }

  return (<NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
  )

}
