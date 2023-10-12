import { StyleSheet, View } from "react-native";

import CartNavigator from "./CartNavigator";
import Feather from "@expo/vector-icons/Feather";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";
import StackNavigator from "./StackNavigator";
import { colors } from "../constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Ionicons name="fast-food-outline" size={30} color="black" />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Ionicons name="today-outline" size={30} color="black" />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersNav"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="pie-chart" size={30} color={colors.white} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileNav"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Ionicons name="md-add-circle-outline" size={35} color="black" />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 1,
    borderColor: colors.secondary,
    borderWidth: 3,
  },
  iconContainer: {
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
