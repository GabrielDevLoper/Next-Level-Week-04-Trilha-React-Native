import React, { ReactNode } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";

const StackRoutes = createStackNavigator();

function AppRoutes() {
  return (
    <StackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
      initialRouteName="Welcome"
    >
      <StackRoutes.Screen name="Welcome" component={Welcome} />
      <StackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <StackRoutes.Screen name="Confirmation" component={Confirmation} />
    </StackRoutes.Navigator>
  );
}

export { AppRoutes };
