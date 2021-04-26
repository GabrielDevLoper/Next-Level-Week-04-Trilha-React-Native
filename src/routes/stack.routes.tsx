import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";

import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";
import { PlantSave } from "../pages/PlantSave";
import { MyPlant } from "../pages/MyPlants";
import { AuthRoutes } from "./tab.routes";

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
      <StackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
      <StackRoutes.Screen name="PlantSave" component={PlantSave} />
      <StackRoutes.Screen name="MyPlants" component={AuthRoutes} />
    </StackRoutes.Navigator>
  );
}

export { AppRoutes };
