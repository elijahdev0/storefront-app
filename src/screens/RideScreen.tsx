import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function RideScreen() {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const options = mockProvider.getRideOptions();

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Pickup location'
                value={pickup}
                onChangeText={setPickup}
            />
            <TextInput
                style={styles.input}
                placeholder='Drop-off location'
                value={dropoff}
                onChangeText={setDropoff}
            />
            <FlatList
                data={options}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.option}>
                        <Text style={styles.optionName}>{item.name}</Text>
                        <Text>{`${item.eta} • ${item.price}`}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Request Ride</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    option: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    optionName: {
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#00A86B',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
