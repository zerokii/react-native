import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { movieData } from '../../data/MovieData';

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={movieData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text>{item.year}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    flatListContainer: {
        padding: 8
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    dataContainer: {
        margin: 8,
        borderColor: "#96ceb4",
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        flexDirection: "row"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default HomeScreen;