import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function ChatScreen() {
    const messages = mockProvider.getMessages();

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={[styles.message, item.from === 'You' ? styles.me : styles.them]}>
                    <Text style={styles.text}>{item.text}</Text>
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
    message: {
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        maxWidth: '80%',
    },
    me: {
        backgroundColor: '#dcf8c6',
        alignSelf: 'flex-end',
    },
    them: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 16,
    },
});
