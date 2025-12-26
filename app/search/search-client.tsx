'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { FilterSidebar } from '@/components/search/filter-sidebar'
import { PropertyCard } from '@/components/ui/property-card'
import { Button } from '@/components/ui/button'
import { Map, List } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Property } from '@/lib/data'

// Dynamic import for Map to avoid SSR issues with Leaflet
const MapView = dynamic(() => import('@/components/search/map-view'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">Loading Map...</div>
})

interface SearchClientProps {
    properties: Property[]
}

export function SearchClient({ properties }: SearchClientProps) {
    const [showMapMobile, setShowMapMobile] = useState(false)

    return (
        <div className="flex h-[calc(100vh-64px)] overflow-hidden">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block w-80 h-full border-r bg-white z-20 shadow-xl overflow-y-auto">
                <FilterSidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col md:flex-row relative">

                {/* List View */}
                <div className={cn(
                    "w-full md:w-[60%] lg:w-[55%] h-full overflow-y-auto bg-gray-50 p-4 md:p-6 transition-all duration-300",
                    showMapMobile ? "hidden md:block" : "block"
                )}>
                    <div className="mb-6 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {properties.length} Homes in New York
                        </h1>
                        <div className="md:hidden">
                            <Button variant="outline" size="sm" onClick={() => setShowMapMobile(!showMapMobile)}>
                                {showMapMobile ? <><List className="mr-2 h-4 w-4" /> List</> : <><Map className="mr-2 h-4 w-4" /> Map</>}
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20 md:pb-0">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>

                {/* Map View */}
                <div className={cn(
                    "w-full md:w-[40%] lg:w-[45%] h-full bg-gray-200 relative",
                    showMapMobile ? "block fixed inset-0 z-50 mt-16 md:static md:mt-0 md:block" : "hidden md:block"
                )}>
                    <MapView properties={properties} />

                    {/* Mobile Map Toggle Back */}
                    {showMapMobile && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[1000] md:hidden">
                            <Button className="rounded-full shadow-xl bg-black text-white px-6" onClick={() => setShowMapMobile(false)}>
                                View List
                            </Button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
