import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function WalletScreen() {
    const wallet = mockProvider.getWallet();

    return (
        <View style={styles.container}>
            <View style={styles.balanceCard}>
                <Text style={styles.balanceLabel}>Balance</Text>
                <Text style={styles.balance}>{wallet.balance}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Top Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Transfer</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>Transactions</Text>
            <FlatList
                data={wallet.transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.transactionRow}>
                        <Text>{item.type}</Text>
                        <Text>{item.amount}</Text>
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
    balanceCard: {
        backgroundColor: '#00A86B',
        padding: 24,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    balanceLabel: {
        color: '#fff',
    },
    balance: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 12,
        marginHorizontal: 4,
        borderRadius: 8,
        alignItems: 'center',
    },
    actionText: {
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    transactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
});
