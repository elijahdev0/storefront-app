import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function ReviewsScreen() {
    const reviews = mockProvider.getReviews();
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={reviews}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.row}>
                    <Text style={styles.user}>{item.user}</Text>
                    <Text>{'⭐'.repeat(item.rating)}</Text>
                    <Text>{item.comment}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    row: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    user: {
        fontWeight: 'bold',
    },
});
