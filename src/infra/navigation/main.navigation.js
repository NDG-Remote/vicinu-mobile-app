import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../../screens/home.screen";
import { MapScreen } from "../../screens/map.screen";
import { MessagesScreen } from "../../screens/messages.screen";
import { ProfileScreen } from "../../screens/profile.screen";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthNavigator } from "./auth.navigator";
import { AuthContext } from "../../provider/auth";
import { TodoScreen } from "../../screens/todo.screen";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Map" />
    <BottomNavigationTab title="Messages" />
    <BottomNavigationTab title="Profile" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Map" component={MapScreen} />
    <Screen name="Messages" component={MessagesScreen} />
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
);

export const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
