import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { movieData } from '../../data/MovieData';

const HomeScreen = () => {

    return (
        <View style={styles.mainContainer}>
            <Text>Home Screen</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
});

export default HomeScreen;