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
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { View, Text } from "react-native";

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
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
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
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          shadowRadius: 4,
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
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Text>홈</Text>
              </View>
            );
          },
        }}
        // options={({ navigation }: RootTabScreenProps<"Home">) => ({
        //   title: "",
        //   tabBarIcon: ({ color }) => {
        //     return (
        //       <View>
        //         <Text>홈</Text>
        //       </View>
        //     );
        //   },
        // })}
      />
      <BottomTab.Screen
        name="Restaurant"
        component={TabTwoScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Text>식당</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Recipe"
        component={TabTwoScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Text>레시피</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={TabTwoScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Text>커뮤니티</Text>
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
