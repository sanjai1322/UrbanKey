
export interface Property {
    id: string;
    title: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    lat: number;
    lng: number;
    price: number;
    listingType: 'Sale' | 'Rent';
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    type: string;
    image: string;
    images: string[];
    amenities: string[];
    description: string;
}

export const PROPERTIES: Property[] = [
    {
        id: '1',
        title: 'Luxury Sea-View Apartment',
        address: 'Worli Sea Face',
        city: 'Mumbai',
        state: 'MH',
        zip: '400030',
        lat: 19.0167,
        lng: 72.8167,
        price: 85000000,
        listingType: 'Sale',
        bedrooms: 3,
        bathrooms: 3,
        sqft: 2200,
        type: 'Apartment',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        ],
        amenities: ['Sea View', 'Gym', 'Swimming Pool', '24/7 Security'],
        description: 'Breathtaking sea-view apartment in the heart of South Mumbai. Features imported marble flooring, floor-to-ceiling windows, and world-class amenities.'
    },
    {
        id: '2',
        title: 'Modern Villa in Whitefield',
        address: 'Palm Meadows',
        city: 'Bangalore',
        state: 'KA',
        zip: '560066',
        lat: 12.9698,
        lng: 77.7500,
        price: 42000000,
        listingType: 'Sale',
        bedrooms: 4,
        bathrooms: 4,
        sqft: 3500,
        type: 'Villa',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
            'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=80'
        ],
        amenities: ['Private Garden', 'Clubhouse', 'Gated Community', 'Power Backup'],
        description: 'Spacious independent villa in a premium gated community. Offers a private garden, double-height living room, and access to a luxury clubhouse.'
    },
    {
        id: '3',
        title: 'Premium Penthouse',
        address: 'Golf Course Road',
        city: 'Gurgaon',
        state: 'HR',
        zip: '122002',
        lat: 28.4595,
        lng: 77.0266,
        price: 120000000,
        listingType: 'Sale',
        bedrooms: 5,
        bathrooms: 5,
        sqft: 5000,
        type: 'Penthouse',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
        ],
        amenities: ['Golf Course View', 'Private Elevator', 'Italian Kitchen', 'Concierge'],
        description: 'Ultra-luxury penthouse overlooking the golf course. Designed for the elite, featuring a private elevator, terrace garden, and smart home automation.'
    },
    {
        id: '4',
        title: 'Cozy Apartment in Indiranagar',
        address: '12th Main Road',
        city: 'Bangalore',
        state: 'KA',
        zip: '560038',
        lat: 12.9719,
        lng: 77.6412,
        price: 65000,
        listingType: 'Rent',
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        type: 'Apartment',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80'
        ],
        amenities: ['Fully Furnished', 'Metro Access', 'Gym', 'Parking'],
        description: 'Chic and modern 2BHK in the vibrant neighborhood of Indiranagar. Walking distance to cafes, metro station, and parks.'
    },
    {
        id: '5',
        title: 'Heritage Bungalow',
        address: 'Jubilee Hills',
        city: 'Hyderabad',
        state: 'TS',
        zip: '500033',
        lat: 17.4325,
        lng: 78.4070,
        price: 150000000,
        listingType: 'Sale',
        bedrooms: 6,
        bathrooms: 6,
        sqft: 6500,
        type: 'Villa',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
            'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80'
        ],
        amenities: ['Private Pool', 'Home Theater', 'Staff Quarters', 'Solar Power'],
        description: 'A majestic bungalow in the prestigious Jubilee Hills. Combines traditional architecture with modern luxury, featuring a sprawling lawn and pool.'
    },
    {
        id: '6',
        title: 'Seaside Villa',
        address: 'ECR',
        city: 'Chennai',
        state: 'TN',
        zip: '600115',
        lat: 12.9185,
        lng: 80.2464,
        price: 55000000,
        listingType: 'Sale',
        bedrooms: 4,
        bathrooms: 4,
        sqft: 3800,
        type: 'Villa',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
            'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800&q=80'
        ],
        amenities: ['Beach Access', 'Terrace Garden', 'Modular Kitchen', 'Spa'],
        description: 'Experience resort-style living in this stunning seaside villa on ECR. Direct access to the beach and a private terrace for sunset views.'
    },
    {
        id: '7',
        title: 'Skyline Apartment',
        address: 'Bandra West',
        city: 'Mumbai',
        state: 'MH',
        zip: '400050',
        lat: 19.0607,
        lng: 72.8362,
        price: 95000,
        listingType: 'Rent',
        bedrooms: 3,
        bathrooms: 3,
        sqft: 1500,
        type: 'Apartment',
        image: 'https://images.unsplash.com/photo-1570129477492-45f003f2df91?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1570129477492-45f003f2df91?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        ],
        amenities: ['Sea Link View', 'Concierge', 'Rooftop Lounge'],
        description: 'Luxurious 3BHK in Bandra with panoramic views of the city and sea. Perfect for expatriates and top executives.'
    },
    {
        id: '8',
        title: 'Colonial Style Home',
        address: 'Civil Lines',
        city: 'Delhi',
        state: 'DL',
        zip: '110054',
        lat: 28.6814,
        lng: 77.2228,
        price: 80000000,
        listingType: 'Sale',
        bedrooms: 4,
        bathrooms: 4,
        sqft: 4000,
        type: 'House',
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
        ],
        amenities: ['Large Garden', 'Servant Quarters', 'Garage', 'Fireplace'],
        description: 'A rare colonial-style bungalow in Civil Lines. High ceilings, wide verandas, and lush greenery make this a peaceful oasis in the city.'
    }
];
