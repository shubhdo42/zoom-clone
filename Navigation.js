import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import React from "react";
import MeetingRoom from "./screens/MeetingRoom";

function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName={Home}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Room"
          options={{
            title: "Start a Meeting",
            headerStyle: {
              backgroundColor: "#1c1c1c",
              shadowOpacity: 0,
            },
            headerTintColor: "white",
          }}
          component={MeetingRoom}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
