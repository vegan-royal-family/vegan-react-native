import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Restaurant: {
        screens: {
          RestaurantScreen: "restaurant",
        },
      },
      NotFound: "*",
    },
  },
};

export default linking;
