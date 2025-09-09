import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
}

export default function PlaceholderScreen({ title }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
});
