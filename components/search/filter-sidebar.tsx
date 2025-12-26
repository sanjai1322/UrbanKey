import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SlidersHorizontal } from "lucide-react"

export function FilterSidebar() {
    return (
        <div className="w-full p-6 bg-white border-b md:border-b-0 md:border-r h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Filters</h2>
                <Button variant="ghost" size="sm" className="text-gray-500">Reset</Button>
            </div>

            <div className="space-y-6">
                {/* Type */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold">Listing Type</label>
                    <div className="flex gap-2">
                        <Button variant="default" className="flex-1 rounded-xl bg-black text-white">Buy</Button>
                        <Button variant="outline" className="flex-1 rounded-xl">Rent</Button>
                    </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold">Price Range</label>
                    <div className="flex gap-2 items-center">
                        <Input placeholder="Min" className="h-10" />
                        <span className="text-gray-400">-</span>
                        <Input placeholder="Max" className="h-10" />
                    </div>
                </div>

                {/* Beds & Baths */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold">Bedrooms</label>
                    <div className="flex gap-2">
                        {['Any', '1+', '2+', '3+', '4+'].map(opt => (
                            <Button key={opt} variant={opt === '2+' ? 'default' : 'outline'} size="sm" className="rounded-lg flex-1">
                                {opt}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Property Type */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold">Property Type</label>
                    <div className="grid grid-cols-2 gap-2">
                        {['House', 'Apartment', 'Condo', 'Townhouse'].map(type => (
                            <div key={type} className="flex items-center space-x-2">
                                <input type="checkbox" id={type} className="rounded border-gray-300 text-green-700 focus:ring-green-500" />
                                <label htmlFor={type} className="text-sm">{type}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold">Amenities</label>
                    <div className="grid grid-cols-1 gap-2">
                        {['Parking', 'In-unit Laundry', 'Pet Friendly', 'Central Air', 'Doorman', 'Gym'].map(amenity => (
                            <div key={amenity} className="flex items-center space-x-2">
                                <input type="checkbox" id={amenity} className="rounded border-gray-300 text-green-700 focus:ring-green-500" />
                                <label htmlFor={amenity} className="text-sm">{amenity}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <Button className="w-full rounded-xl bg-green-700 hover:bg-green-800 text-white py-6">
                    Apply Filters
                </Button>
            </div>
        </div>
    )
}
