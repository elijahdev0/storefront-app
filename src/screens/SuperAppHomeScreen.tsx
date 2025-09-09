import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faCar,
    faUtensils,
    faBasketShopping,
    faBox,
    faWallet,
    faGift,
    faComments,
    faCircleInfo,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { mockProvider } from '../mocks/mockProvider';

const iconMap: Record<string, any> = {
    car: faCar,
    utensils: faUtensils,
    'basket-shopping': faBasketShopping,
    box: faBox,
    wallet: faWallet,
    gift: faGift,
    comments: faComments,
    'circle-info': faCircleInfo,
    star: faStar,
};

export default function SuperAppHomeScreen() {
    const navigation = useNavigation();
    const services = mockProvider.getServices();
    const promos = mockProvider.getPromotions();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerRow}>
                {promos.map((promo) => (
                    <Image key={promo.id} source={{ uri: promo.image }} style={styles.banner} />
                ))}
            </ScrollView>
            <View style={styles.grid}>
                {services.map((service) => (
                    <TouchableOpacity
                        key={service.key}
                        style={styles.tile}
                        onPress={() => navigation.navigate(service.route as never)}>
                        <FontAwesomeIcon icon={iconMap[service.icon]} size={24} color="#00A86B" />
                        <Text style={styles.tileText}>{service.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    bannerRow: {
        marginBottom: 16,
    },
    banner: {
        width: 300,
        height: 120,
        marginRight: 16,
        borderRadius: 8,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    tile: {
        width: '48%',
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 16,
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    tileText: {
        marginTop: 8,
        fontSize: 16,
    },
});
