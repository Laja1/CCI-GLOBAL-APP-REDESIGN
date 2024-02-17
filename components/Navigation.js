import { StyleSheet, Text, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";

import Give from "./Give";

import Media from "./Media";
import Account from "./Account";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Iconn from "react-native-vector-icons/EvilIcons";

export const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { borderTopWidth: 0, borderBottomWidth: 0 },
        backgroundColor: "#000000",
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",

          tabBarIcon: () => (
            <Ionicons name="home-outline" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={Media}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarIcon: () => (
            <FontAwesome name="podcast" size={25} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarIcon: () => (
            <FontAwesome name="credit-card" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Give}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarIcon: () => <Iconn name="user" size={30} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
};
export default function Navigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
