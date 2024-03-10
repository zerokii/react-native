import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { ShowMovie } from '../components/MovieComponent';

const RecommendedScreen = ({ route }) => {

    const sortedRecommended = route.params.allRecommended;

    return (
        <View>
            <FlatList
                data={sortedRecommended}
                contentContainerStyle={styles.mainContainer}
                numColumns={2}
                key={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <ShowMovie
                            image={{ uri: item.imageLink }}
                            title={item.title}
                            isRecommended={true}
                            rating={item.rating}
                        />
                    )
                }}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 8
    }
});

export default RecommendedScreen;