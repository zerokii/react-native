import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { Feed, Story } from "../components/InstagramComponent";

const InstagramHomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>

                <Text
                    style={{
                        fontFamily: "StyleScript-Regular",
                        fontSize: 40,
                        marginLeft: 16
                    }}>
                    Instagram
                </Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 8
                }}>

                    <View style={{ margin: 8 }}>

                        <Icon
                            name="plus-square-o"
                            type="font-awesome"
                            size={26}
                        />

                    </View>

                    <View style={{ margin: 8 }}>

                        <Icon
                            name="heart-o"
                            type="font-awesome"
                            size={26}
                        />

                    </View>

                    <View style={{ margin: 8 }}>

                        <Icon
                            name="paper-plane-outline"
                            type="ionicon"
                            size={26}
                        />

                    </View>

                </View>

            </View >

            <View style={{ flex: 1 }}>
                {/* custom font and icons */}
                <ScrollView>

                    <View style={{ flexDirection: "row", margin: 8 }}>
                        <ScrollView horizontal>
                            <Story
                                profile={require("../../assets/images/profilePicture1.png")}
                                username="catheryne"
                            />

                            <Story
                                profile={require("../../assets/images/profilePicture2.png")}
                                username="ben"
                            />

                            <Story
                                profile={require("../../assets/images/profilePicture3.png")}
                                username="bob"
                            />

                            <Story
                                profile={require("../../assets/images/profilePicture4.png")}
                                username="dennis"
                            />

                            <Story
                                profile={require("../../assets/images/profilePicture5.png")}
                                username="daniel"
                            />
                        </ScrollView>
                    </View>

                    <Feed
                        profile={require("../../assets/images/profilePicture1.png")}
                        username="catheryne"
                        post={{ uri: "https://wallpaperaccess.com/full/201215.jpg" }}
                    />

                    <Feed
                        profile={require("../../assets/images/profilePicture2.png")}
                        username="ben"
                        post={{ uri: "https://images4.alphacoders.com/292/292026.jpg" }}
                    />

                    <Feed
                        profile={require("../../assets/images/profilePicture3.png")}
                        username="bob"
                        post={{ uri: "https://wallpaperaccess.com/full/496881.jpg" }}
                    />

                    <Feed
                        profile={require("../../assets/images/profilePicture4.png")}
                        username="dennis"
                        post={{ uri: "https://images5.alphacoders.com/316/316297.jpg" }}
                    />

                    <Feed
                        profile={require("../../assets/images/profilePicture5.png")}
                        username="daniel"
                        post={{ uri: "https://wallpaperaccess.com/full/1403923.jpg" }}
                    />

                </ScrollView>
            </View >

        </View >
    )
};
export default InstagramHomeScreen;