import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function FoodScreen() {
    const restaurants = mockProvider.getRestaurants();
    const [active, setActive] = useState<typeof restaurants[0] | null>(null);

    if (active) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setActive(null)}>
                    <Text style={styles.back}>← Restaurants</Text>
                </TouchableOpacity>
                <Text style={styles.header}>{active.name}</Text>
                <FlatList
                    data={active.menu}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.menuItem}>
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={restaurants}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.restaurant} onPress={() => setActive(item)}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>{item.eta}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    restaurant: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: 80,
        height: 80,
    },
    info: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    back: {
        marginBottom: 12,
        color: '#00A86B',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
});
