import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailMovieScreen from "../screens/DetailMovieScreen";
import MostViewedScreen from "../screens/MostViewedScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Movie Collection",
                        headerStyle: {
                            backgroundColor: "#65c3ba"
                        },
                        headerTitleStyle: {
                            color: "white",
                            fontSize: 24
                        },
                        headerTitleAlign: "center",
                        headerLeft: null
                    }}
                />

                <Stack.Screen
                    name="DetailMovie"
                    component={DetailMovieScreen}
                />

                <Stack.Screen
                    name="MostViewed"
                    component={MostViewedScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigator;