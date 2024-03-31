import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SongComponent = ({ name, description }) => {

    return (
        <View style={styles.mainContainer}>

            <View style={{ flex: 1 }}>
                <Text>{name}</Text>
            </View>

            <Text>:  </Text>

            <View style={{ flex: 3 }}>
                <Text style={{ textAlign: "left" }}>{description}</Text>
            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        marginTop: 8,
        marginBottom: 8,
    },

});

export default SongComponent;