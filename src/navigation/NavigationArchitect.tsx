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
      <Stack.Navigator  initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CreatingCompetition" component={CreatingCompetition} options={{headerShown: true}} />
        <Stack.Screen name="AddingQuestion" component={AddingQuestion} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationArchitect;