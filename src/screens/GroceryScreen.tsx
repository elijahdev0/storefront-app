import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function GroceryScreen() {
    const categories = mockProvider.getGroceryCategories();

    return (
        <ScrollView style={styles.container}>
            {categories.map((cat) => (
                <View key={cat.id} style={styles.category}>
                    <Text style={styles.categoryTitle}>{cat.name}</Text>
                    {cat.items.map((item) => (
                        <View key={item.id} style={styles.itemRow}>
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    category: {
        marginBottom: 24,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
});
