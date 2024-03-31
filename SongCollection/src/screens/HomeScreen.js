import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { songData } from "../../data/SongData";

const HomeScreen = ({ navigation }) => {

    const [song, setSong] = useState([]);

    const compareRating = (songA, songB) => {

        const ratingA = songA.rating;
        const ratingB = songB.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }

    };

    useEffect(() => {

        const sortedSong = [...songData].sort(compareRating);
        setSong(sortedSong);

    }, []);

    return (
        <View style={{ padding: 8 }}>

            <FlatList
                data={song}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.mainContainer}>

                            <Image
                                style={styles.songImage}
                                source={{ uri: item.imageLink }}
                            />

                            <View style={styles.songContainer}>

                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                    {item.title}
                                </Text>

                                <View style={styles.singerContainer}>
                                    <Text>{item.singer}</Text>
                                </View>

                                {
                                    item.rating === 5 ?
                                        <Image
                                            style={styles.ratingImage}
                                            source={require("../../assets/images/five-stars.png")}
                                        />
                                        :
                                        item.rating === 4 ?
                                            <Image
                                                style={styles.ratingImage}
                                                source={require("../../assets/images/four-stars.png")}
                                            />
                                            :
                                            item.rating === 3 ?
                                                <Image
                                                    style={styles.ratingImage}
                                                    source={require("../../assets/images/three-stars.png")}
                                                />
                                                :
                                                item.rating === 2 ?
                                                    <Image
                                                        style={styles.ratingImage}
                                                        source={require("../../assets/images/two-stars.png")}
                                                    />
                                                    :
                                                    <Image
                                                        style={styles.ratingImage}
                                                        source={require("../../assets/images/star.png")}
                                                    />
                                }

                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.insideButtonContainer}
                                        onPress={
                                            () => navigation.navigate("Detail", { item })
                                        }
                                    >
                                        <Text style={{ color: "white" }}>
                                            SEE DETAILS
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    )
                }}

                ListEmptyComponent={
                    <View style={{ alignItems: "center" }}>
                        <Text>
                            No items in this category.
                        </Text>
                    </View>
                }
            />



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