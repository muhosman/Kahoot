import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Category from "../screens/Category";
import CreatingCompetition from "../screens/CreatingCompetition";
import Register from "../screens/Register";
import AddingQuestion from "../screens/AddingQuestion";

const Stack = createStackNavigator();

const NavigationArchitect = () => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="CreatingCompetition">
        <Stack.Screen name="Welcome" component={Welcome} />
=======
      <Stack.Navigator initialRouteName="Category">
>>>>>>> 706f08b8f57e73c6d8b79006d6489270544b7f0a
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatingCompetition"
          component={CreatingCompetition}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="AddingQuestion" component={AddingQuestion} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationArchitect;
