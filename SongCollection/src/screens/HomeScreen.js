import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { songData } from "../../data/SongData";

const HomeScreen = () => {

    return (
        <View style={{ padding: 8 }}>

            <View style={styles.mainContainer}>

                <Image
                    style={styles.songImage}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/en/5/57/Girls_like_You_cover.png" }}
                />

                <View style={styles.songContainer}>

                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        Title
                    </Text>

                    <View style={styles.singerContainer}>
                        <Text>Singer</Text>
                    </View>

                    <Image
                        style={styles.ratingImage}
                        source={require("../../assets/images/five-stars.png")}
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.insideButtonContainer}>
                            <Text style={{ color: "white" }}>
                                SEE DETAILS
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 8,
        borderWidth: 2,
        borderColor: "#A6A6BD",
        padding: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    songImage: {
        width: 120,
        height: 120,
    },
    songContainer: {
        marginLeft: 8,
        flex: 1,
    },
    singerContainer: {
        marginTop: 8,
        marginBottom: 8
    },
    ratingImage: {
        width: 100,
        height: 20,
    },
    buttonContainer: {
        alignItems: "baseline",
        marginTop: 8,
    },
    insideButtonContainer: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#A6A6BD",
        backgroundColor: "#AFCAE8",
    },
});

export default HomeScreen;