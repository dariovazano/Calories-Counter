import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Products, Details } from '../screens'



const Stack = createNativeStackNavigator()



function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={((route) => ({ headerShown: false }))}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator