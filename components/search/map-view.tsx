'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Property } from '@/lib/data'
import { Icon } from 'leaflet'
import { useEffect, useState } from 'react'

// Fix for Leaflet default icon issues in Next.js
const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
})

interface MapViewProps {
    properties: Property[]
}

export default function MapView({ properties }: MapViewProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">Loading Map...</div>
    }

    // Default center (NYC)
    const center: [number, number] = [40.7128, -74.0060]

    return (
        <div className="h-full w-full relative z-0">
            <MapContainer
                center={center}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {properties.map((property) => (
                    <Marker
                        key={property.id}
                        position={[property.lat, property.lng]}
                        icon={customIcon}
                    >
                        <Popup>
                            <div className="w-48">
                                <img src={property.image} className="w-full h-24 object-cover rounded-md mb-2" alt={property.title} />
                                <h3 className="font-bold text-sm truncate">{property.title}</h3>
                                <p className="font-semibold text-green-700">${property.price.toLocaleString()}</p>
                                <div className="text-xs text-gray-500 mt-1">
                                    {property.bedrooms}bd • {property.bathrooms}ba • {property.sqft}sqft
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
