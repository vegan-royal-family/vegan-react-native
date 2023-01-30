//import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import TestScreen from "../screens/TestScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { StyleSheet, View, Text, Image } from "react-native";
import HomeIcon from "../assets/icons/HomeIcon";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerStyle: {
          backgroundColor: "#fff",
        },
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TestScreen}
        options={{
          title: "",
          headerLeft: () => (
            <Image
              source={require("../assets/images/headerLogo.png")}
              style={{ marginLeft: 20 }}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <TabbarItem title="홈" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Restaurant"
        component={TestScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabbarItem title="식당" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Recipe"
        component={TestScreen}
        options={{
          title: "레시피",
          tabBarIcon: ({ focused }) => (
            <TabbarItem title="레시피" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={TestScreen}
        options={{
          title: "커뮤니티",
          tabBarIcon: ({ focused }) => (
            <TabbarItem title="커뮤니티" focused={focused} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabbarItem = ({
  Icon,
  title,
  focused,
}: {
  Icon?: React.ReactNode;
  title: string;
  focused: boolean;
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 12,
      }}
    >
      <HomeIcon color={focused ? "#FF744D" : "#A4AAAF"} />
      <Text style={{ color: focused ? "#FF744D" : "#A4AAAF" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    elevation: 5,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    height: 80,
    backgroundColor: "#fff",
    borderTopWidth: 0,
  },
});
