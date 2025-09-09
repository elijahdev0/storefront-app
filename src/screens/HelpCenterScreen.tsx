import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { mockProvider } from '../mocks/mockProvider';

export default function HelpCenterScreen() {
    const faqs = mockProvider.getFaqs();
    return (
        <ScrollView style={styles.container}>
            {faqs.map((faq) => (
                <View key={faq.id} style={styles.item}>
                    <Text style={styles.question}>{faq.question}</Text>
                    <Text>{faq.answer}</Text>
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
    item: {
        marginBottom: 16,
    },
    question: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
});
