import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const ThirdScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "mistyrose" }}>

            <View style={{ backgroundColor: "red", flex: 1 }}>
                <Text style={{ color: "white" }}>
                    Pikachu
                </Text>
            </View>

            <View style={{ backgroundColor: "orange", flex: 2 }}>
                <Text>
                    Flareon
                </Text>
            </View>

            <View style={{ backgroundColor: "yellow", flex: 3 }}>
                <Text>
                    Rapidash
                </Text>
            </View>

        </View>
    )
};

const AddImage = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <ScrollView horizontal={true}>

                <View style={{ margin: 8, padding: 8 }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: "green",
                        backgroundColor: "aliceblue"
                    }}
                        source={require('../../assets/images/pikachu.png')}
                    />
                </View>

                <View style={{ margin: 8, padding: 8 }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: "green",
                        backgroundColor: "aliceblue"
                    }}
                        source={require('../../assets/images/flareon.png')}
                    />
                </View>

                <View style={{ margin: 8, padding: 8 }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: "green",
                        backgroundColor: "aliceblue"
                    }}
                        source={require('../../assets/images/rapidash.png')}
                    />
                </View>

                <View style={{ margin: 8, padding: 8 }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: "green",
                        backgroundColor: "aliceblue"
                    }}
                        source={{uri:"https://i.ibb.co/bLz74hj/psyduck.png"}}
                    />
                </View>

                <View style={{ margin: 8, padding: 8 }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: "green",
                        backgroundColor: "aliceblue"
                    }}
                        source={{uri:"https://i.ibb.co/GQBLC7r/bulbasaur.png"}}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

export default AddImage;