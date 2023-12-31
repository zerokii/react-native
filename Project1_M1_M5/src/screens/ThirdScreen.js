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
                        source={{ uri: "https://i.ibb.co/bLz74hj/psyduck.png" }}
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
                        source={{ uri: "https://i.ibb.co/GQBLC7r/bulbasaur.png" }}
                    />
                </View>

            </ScrollView>
        </View>
    )
};

const ChallengeScreen = () => {
    return (
        <View>

            <View style={{ alignItems: 'center', margin: 8 }}>
                <Text style={{
                    textDecorationLine: "underline",
                    color: "navy",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "serif"
                }}>Pokemon's Profile
                </Text>
            </View>

            <ScrollView horizontal={true}>
                <ScrollView >

                    {/* Pikachu */}
                    <View style={{
                        margin: 8,
                        padding: 8,
                        flexDirection: 'row'
                    }}>

                        <Image style={{
                            width: 150,
                            height: 150,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: "green",
                            backgroundColor: "aliceblue"
                        }}

                            source={require('../../assets/images/pikachu.png')}

                        />

                        <View style={{
                            marginLeft: 20,
                            justifyContent: 'center'
                        }}>
                            <Text>
                                Name : Pikachu
                                {`\n`}
                                Category : Mouse
                                {`\n`}
                                Abilities : Static
                                {`\n`}
                                Weaknesses : Ground
                            </Text>
                        </View>

                    </View>

                    {/* Flareon */}
                    <View style={{
                        margin: 8,
                        padding: 8,
                        flexDirection: 'row'
                    }}>

                        <Image style={{
                            width: 150,
                            height: 150,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: "green",
                            backgroundColor: "aliceblue"
                        }}

                            source={require('../../assets/images/flareon.png')}

                        />

                        <View style={{
                            marginLeft: 20,
                            justifyContent: 'center'
                        }}>
                            <Text>
                                Name : Flareon
                                {`\n`}
                                Category : Flame
                                {`\n`}
                                Abilities : Flash Fire
                                {`\n`}
                                Weaknesses : Water, Ground, Rock
                            </Text>
                        </View>

                    </View>

                    {/* Rapidash */}
                    <View style={{
                        margin: 8,
                        padding: 8,
                        flexDirection: 'row'
                    }}>

                        <Image style={{
                            width: 150,
                            height: 150,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: "green",
                            backgroundColor: "aliceblue"
                        }}

                            source={require('../../assets/images/rapidash.png')}

                        />

                        <View style={{
                            marginLeft: 20,
                            justifyContent: 'center'
                        }}>
                            <Text>
                                Name : Rapidash
                                {`\n`}
                                Category : Fire Horse
                                {`\n`}
                                Abilities : Run Away, Flash Fire
                                {`\n`}
                                Weaknesses : Water, Ground, Rock
                            </Text>
                        </View>

                    </View>

                    {/* Psyduck */}
                    <View style={{
                        margin: 8,
                        padding: 8,
                        flexDirection: 'row'
                    }}>

                        <Image style={{
                            width: 150,
                            height: 150,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: "green",
                            backgroundColor: "aliceblue"
                        }}

                            source={{ uri: "https://i.ibb.co/bLz74hj/psyduck.png" }}

                        />

                        <View style={{
                            marginLeft: 20,
                            justifyContent: 'center'
                        }}>
                            <Text>
                                Name : Psyduck
                                {`\n`}
                                Category : Duck
                                {`\n`}
                                Abilities : Dump, Cloud Nine
                                {`\n`}
                                Weaknesses : Grass, Electric
                            </Text>
                        </View>

                    </View>

                    {/* Bulbasaur */}
                    <View style={{
                        margin: 8,
                        marginBottom: 70,
                        padding: 8,
                        flexDirection: 'row'
                    }}>

                        <Image style={{
                            width: 150,
                            height: 150,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: "green",
                            backgroundColor: "aliceblue"
                        }}

                            source={{ uri: "https://i.ibb.co/GQBLC7r/bulbasaur.png" }}

                        />

                        <View style={{
                            marginLeft: 20,
                            justifyContent: 'center'
                        }}>
                            <Text>
                                Name : Bulbasaur
                                {`\n`}
                                Category : Seed
                                {`\n`}
                                Abilities : Overgrow
                                {`\n`}
                                Weaknesses : Fire, Psychic, Flying, Ice
                            </Text>
                        </View>

                    </View>

                </ScrollView>
            </ScrollView >

        </View >
    )
}

export default ChallengeScreen;