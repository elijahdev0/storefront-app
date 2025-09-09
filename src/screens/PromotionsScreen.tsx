import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function PromotionsScreen() {
    const vouchers = mockProvider.getVouchers();
    const [code, setCode] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Enter voucher code'
                value={code}
                onChangeText={setCode}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Redeem</Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>Available Vouchers</Text>
            <FlatList
                data={vouchers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.voucherRow}>
                        <Text style={styles.code}>{item.code}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
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
    button: {
        backgroundColor: '#00A86B',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 24,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    voucherRow: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    code: {
        fontWeight: 'bold',
    },
});
