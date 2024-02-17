import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyles } from "./styles/global";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={globalStyles.back}>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
            backgroundColor: "#000000",
          }}
        />

        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{
            headerShown: false,
            backgroundColor: "#000000",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
