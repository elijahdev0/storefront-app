import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function ParcelScreen() {
    const options = mockProvider.getParcelOptions();
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [selected, setSelected] = useState(options[0].id);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Sender address'
                value={sender}
                onChangeText={setSender}
            />
            <TextInput
                style={styles.input}
                placeholder='Receiver address'
                value={receiver}
                onChangeText={setReceiver}
            />
            {options.map((opt) => (
                <TouchableOpacity key={opt.id} style={styles.option} onPress={() => setSelected(opt.id)}>
                    <View style={[styles.radio, selected === opt.id && styles.radioSelected]} />
                    <View>
                        <Text style={styles.optionLabel}>{opt.label}</Text>
                        <Text>{opt.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send Parcel</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00A86B',
        marginRight: 12,
    },
    radioSelected: {
        backgroundColor: '#00A86B',
    },
    optionLabel: {
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
