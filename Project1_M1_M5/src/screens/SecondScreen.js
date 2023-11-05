import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ceil } from "react-native-reanimated";

const SecondScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'lavender', justifyContent: "center", alignItems: "center" }}>

            <View style={{ backgroundColor: 'skyblue', marginLeft: 17, marginRight: 17, marginBottom: 5, padding: 7, borderWidth: 1, borderColor: "red", borderStyle: "dashed", borderRadius: 7 }}>
                <Text>
                    Mobile Legends
                </Text>
            </View>

            <View style={{ backgroundColor: 'cornflowerblue', marginLeft: 17, marginRight: 17, marginTop: 5, padding: 7, borderWidth: 1, borderColor: "red", borderStyle: "dotted", borderRadius: 7 }}>
                <Text>
                    PUBG
                </Text>
            </View>

        </View>
    )
};

export default SecondScreen;