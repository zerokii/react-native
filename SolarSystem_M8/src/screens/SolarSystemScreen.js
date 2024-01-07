import React from "react";
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { Planet } from "../components/PlanetComponent";

const SolarSystemScreen = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ padding: 16, alignItems: "center" }}>
                <Text style={{
                    textTransform: "uppercase",
                    fontSize: 30,
                    fontFamily: "serif",
                    textDecorationLine: "underline"
                }}>
                    solar system
                </Text>
            </View>

            <Planet
                planetImage={require("../../assets/images/mercury.png")}
                planetName="mercury"
                planetDescription="Mercury is the fastest planet, zipping around the sun every 88 earth days"
            />

            <Planet
                planetImage={require("../../assets/images/venus.png")}
                planetName="venus"
                planetDescription="Venus spins slowly in the opposite direction from most planets"
            />

            <Planet
                planetImage={require("../../assets/images/earth.png")}
                planetName="earth"
                planetDescription="Earth is the only place we know of so far that's inhabited by living things"
            />

            <Planet
                planetImage={require("../../assets/images/mars.png")}
                planetName="mars"
                planetDescription="Mars is a dusty, cold, desert world with a very thin atmosphere"
            />

            <Planet
                planetImage={require("../../assets/images/jupiter.png")}
                planetName="jupiter"
                planetDescription="Jupiter is more than twice as massive than the other planets of our solar system combined"
            />

            <Planet
                planetImage={require("../../assets/images/saturn.png")}
                planetName="saturn"
                planetDescription="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system"
            />

            <Planet
                planetImage={require("../../assets/images/uranus.png")}
                planetName="uranus"
                planetDescription="Uranus rotates at a nearly 90-degree angle from the plane of its orbit"
            />

            <Planet
                planetImage={require("../../assets/images/neptune.png")}
                planetName="neptune"
                planetDescription="Neptune is dark, cold, and whipped by supersonic winds"
            />

        </View>
    )
};

export default SolarSystemScreen;
