import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function NotificationsScreen() {
    const items = mockProvider.getNotifications();

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.body}</Text>
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
    title: {
        fontWeight: 'bold',
    },
});
