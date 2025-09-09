export interface Service {
    key: string;
    title: string;
    icon: string;
    route: string;
}

export interface Promotion {
    id: string;
    image: string;
}

export interface RideOption {
    id: string;
    name: string;
    eta: string;
    price: string;
}

export interface MenuItem {
    id: string;
    name: string;
    price: string;
}

export interface Restaurant {
    id: string;
    name: string;
    eta: string;
    image: string;
    menu: MenuItem[];
}

export interface GroceryItem {
    id: string;
    name: string;
    price: string;
}

export interface GroceryCategory {
    id: string;
    name: string;
    items: GroceryItem[];
}

export interface ParcelOption {
    id: string;
    label: string;
    description: string;
}

export interface Transaction {
    id: string;
    type: string;
    amount: string;
    date: string;
}

export interface Wallet {
    balance: string;
    transactions: Transaction[];
}

export interface Voucher {
    id: string;
    code: string;
    description: string;
}

export interface Message {
    id: string;
    from: string;
    text: string;
}

export interface Notification {
    id: string;
    title: string;
    body: string;
}

export interface Order {
    id: string;
    service: string;
    status: string;
    total: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

export interface Review {
    id: string;
    user: string;
    rating: number;
    comment: string;
}

export const services: Service[] = [
    { key: 'ride', title: 'Rides', icon: 'car', route: 'Ride' },
    { key: 'food', title: 'Food', icon: 'utensils', route: 'Food' },
    { key: 'grocery', title: 'Grocery', icon: 'basket-shopping', route: 'Grocery' },
    { key: 'parcel', title: 'Parcel', icon: 'box', route: 'Parcel' },
    { key: 'wallet', title: 'Wallet', icon: 'wallet', route: 'Wallet' },
    { key: 'promos', title: 'Promotions', icon: 'gift', route: 'Promotions' },
    { key: 'chat', title: 'Chat', icon: 'comments', route: 'Chat' },
    { key: 'help', title: 'Help', icon: 'circle-info', route: 'Help' },
    { key: 'reviews', title: 'Reviews', icon: 'star', route: 'Reviews' },
];

export const promotions: Promotion[] = [
    { id: '1', image: 'https://via.placeholder.com/300x120?text=Promo+1' },
    { id: '2', image: 'https://via.placeholder.com/300x120?text=Promo+2' },
];

export const rideOptions: RideOption[] = [
    { id: '1', name: 'Bike', eta: '2 min', price: '$3' },
    { id: '2', name: 'Car', eta: '3 min', price: '$5' },
    { id: '3', name: 'Premium', eta: '5 min', price: '$10' },
];

export const restaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Pizza Place',
        eta: '30 min',
        image: 'https://via.placeholder.com/80',
        menu: [
            { id: 'm1', name: 'Pepperoni', price: '$8' },
            { id: 'm2', name: 'Margherita', price: '$7' },
        ],
    },
    {
        id: '2',
        name: 'Burger Spot',
        eta: '25 min',
        image: 'https://via.placeholder.com/80',
        menu: [
            { id: 'm3', name: 'Cheeseburger', price: '$6' },
            { id: 'm4', name: 'Fries', price: '$3' },
        ],
    },
];

export const groceryCategories: GroceryCategory[] = [
    {
        id: '1',
        name: 'Snacks',
        items: [
            { id: 's1', name: 'Chips', price: '$2' },
            { id: 's2', name: 'Chocolate', price: '$1' },
        ],
    },
    {
        id: '2',
        name: 'Drinks',
        items: [
            { id: 'd1', name: 'Soda', price: '$1.5' },
            { id: 'd2', name: 'Water', price: '$1' },
        ],
    },
];

export const parcelOptions: ParcelOption[] = [
    { id: '1', label: 'Small', description: 'Fits in a backpack' },
    { id: '2', label: 'Medium', description: 'Fits in a tote bag' },
    { id: '3', label: 'Large', description: 'Fits in a car trunk' },
];

export const wallet: Wallet = {
    balance: '$100',
    transactions: [
        { id: 't1', type: 'Top-up', amount: '$50', date: '2024-01-01' },
        { id: 't2', type: 'Payment', amount: '-$15', date: '2024-01-05' },
    ],
};

export const vouchers: Voucher[] = [
    { id: 'v1', code: 'SAVE5', description: 'Save $5 on rides' },
    { id: 'v2', code: 'FOOD10', description: '10% off food orders' },
];

export const messages: Message[] = [
    { id: 'msg1', from: 'Driver', text: 'I am arriving.' },
    { id: 'msg2', from: 'You', text: 'Great, thanks!' },
];

export const notifications: Notification[] = [
    { id: 'n1', title: 'Welcome!', body: 'Thanks for trying the Super App.' },
    { id: 'n2', title: 'Promo', body: 'Use code SAVE5 for $5 off.' },
];

export const orders: Order[] = [
    { id: 'o1', service: 'Food', status: 'Delivered', total: '$20' },
    { id: 'o2', service: 'Ride', status: 'Completed', total: '$7' },
];

export const faqs: FAQ[] = [
    { id: 'f1', question: 'How to contact support?', answer: 'Email support@example.com' },
    { id: 'f2', question: 'How to reset password?', answer: 'Use the profile settings.' },
];

export const reviews: Review[] = [
    { id: 'r1', user: 'Alice', rating: 5, comment: 'Great service!' },
    { id: 'r2', user: 'Bob', rating: 4, comment: 'Good experience.' },
];

export const mockProvider = {
    getServices: () => services,
    getPromotions: () => promotions,
    getRideOptions: () => rideOptions,
    getRestaurants: () => restaurants,
    getGroceryCategories: () => groceryCategories,
    getParcelOptions: () => parcelOptions,
    getWallet: () => wallet,
    getVouchers: () => vouchers,
    getMessages: () => messages,
    getNotifications: () => notifications,
    getOrders: () => orders,
    getFaqs: () => faqs,
    getReviews: () => reviews,
};
