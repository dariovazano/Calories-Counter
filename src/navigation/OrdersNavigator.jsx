import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens";

const Stack = createNativeStackNavigator();

function OredersNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Oreders"
      screenOptions={() => ({ headerShown: false })}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
}
export default OredersNavigator;
