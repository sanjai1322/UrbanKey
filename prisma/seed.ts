import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// NYC Data (Approximate centers)
// Center: 40.7128° N, 74.0060° W

const propertyTypes = ['Apartment', 'Condo', 'Loft', 'Penthouse', 'Townhouse']
const listingTypes = ['Sale', 'Rent']
const amenitiesList = [
    'Doorman', 'Gym', 'Pool', 'Elevator', 'Laundry in Building', 'Dishwasher',
    'Private Outdoor Space', 'Hardwood Floors', 'Pets Allowed', 'Parking',
    'Concierge', 'Roof Deck', 'Storage Available', 'Central Air'
]

const sampleImages = [
    'https://images.unsplash.com/photo-1600596542815-e328700336f4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&w=800&q=80'
]

function getRandomSubset(arr: string[], min = 3, max = 8) {
    const shuffled = arr.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, Math.floor(Math.random() * (max - min) + min))
}

function getRandomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const listings = [
    {
        title: 'Modern Loft in SoHo',
        address: '123 Mercer St',
        city: 'New York',
        state: 'NY',
        zip: '10012',
        lat: 40.725,
        lng: -73.999,
        price: 3500000,
        listingType: 'Sale',
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1800,
        type: 'Loft'
    },
    {
        title: 'Luxury High-Rise Condo',
        address: '450 W 42nd St',
        city: 'New York',
        state: 'NY',
        zip: '10036',
        lat: 40.759,
        lng: -73.995,
        price: 6500,
        listingType: 'Rent',
        bedrooms: 1,
        bathrooms: 1,
        sqft: 750,
        type: 'Apartment'
    },
    {
        title: 'Classic Brownstone',
        address: '50 W 70th St',
        city: 'New York',
        state: 'NY',
        zip: '10023',
        lat: 40.776,
        lng: -73.978,
        price: 4200000,
        listingType: 'Sale',
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3200,
        type: 'Townhouse'
    },
    {
        title: 'DUMBO Waterfront Penthouse',
        address: '1 John St',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11201',
        lat: 40.706,
        lng: -73.987,
        price: 12000,
        listingType: 'Rent',
        bedrooms: 3,
        bathrooms: 3,
        sqft: 2100,
        type: 'Penthouse'
    },
    {
        title: 'Chic Chelsea Apartment',
        address: '200 W 20th St',
        city: 'New York',
        state: 'NY',
        zip: '10011',
        lat: 40.741,
        lng: -73.998,
        price: 1800000,
        listingType: 'Sale',
        bedrooms: 2,
        bathrooms: 1,
        sqft: 950,
        type: 'Apartment'
    },
    {
        title: 'Spacious Family Home',
        address: '75 8th Ave',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11215',
        lat: 40.672,
        lng: -73.975,
        price: 2800000,
        listingType: 'Sale',
        bedrooms: 5,
        bathrooms: 3,
        sqft: 2800,
        type: 'Townhouse'
    }
]

// Generate 15 more random listings
for (let i = 0; i < 15; i++) {
    const isSale = Math.random() > 0.4;
    const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
    // Random loc around NYC
    const lat = getRandomFloat(40.700, 40.800);
    const lng = getRandomFloat(-74.020, -73.930);

    listings.push({
        title: `${type} with ${['Great View', 'Modern Finishes', 'Historic Charm', 'Spacious Layout', 'Luxury Amenities'][Math.floor(Math.random() * 5)]}`,
        address: `${Math.floor(Math.random() * 900) + 10} ${['Broadway', '5th Ave', 'Park Ave', 'Lexington Ave', 'Madison Ave', 'Wall St'][Math.floor(Math.random() * 6)]}`,
        city: 'New York',
        state: 'NY',
        zip: '10001',
        lat,
        lng,
        price: isSale ? Math.floor(Math.random() * 3000000) + 500000 : Math.floor(Math.random() * 8000) + 2500,
        listingType: isSale ? 'Sale' : 'Rent',
        bedrooms: Math.floor(Math.random() * 4) + 1,
        bathrooms: Math.floor(Math.random() * 3) + 1,
        sqft: Math.floor(Math.random() * 2000) + 600,
        type
    })
}

async function main() {
    console.log('Seeding data...')

    for (const listing of listings) {
        // Pick random image
        const mainImg = sampleImages[Math.floor(Math.random() * sampleImages.length)];
        // Pick 3 random images for gallery
        const gallery = [sampleImages[Math.floor(Math.random() * sampleImages.length)], sampleImages[Math.floor(Math.random() * sampleImages.length)], sampleImages[Math.floor(Math.random() * sampleImages.length)]]

        await prisma.property.create({
            data: {
                ...listing,
                image: mainImg,
                images: JSON.stringify(gallery),
                amenities: JSON.stringify(getRandomSubset(amenitiesList)),
                description: 'Experience luxury living in the heart of the city. This stunning property features modern finishes, open concept living areas, and breathtaking views. Perfectly situated near top-rated restaurants, shopping, and public transportation. Don\'t miss this opportunity to own a piece of the skyline.',
            }
        })
    }

    console.log('Seeding complete.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
