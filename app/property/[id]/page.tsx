import { prisma } from "@/lib/prisma"
import { ImageGallery } from "@/components/property/image-gallery"
import { ContactAgentForm } from "@/components/property/contact-form"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Move, Check } from "lucide-react"
import { notFound } from "next/navigation"

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const propertyData = await prisma.property.findUnique({
        where: { id }
    })

    if (!propertyData) {
        notFound()
    }

    const property = {
        ...propertyData,
        images: JSON.parse(propertyData.images as string),
        amenities: JSON.parse(propertyData.amenities as string)
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="container mx-auto px-4 md:px-6 pt-6 md:pt-12">

                {/* Gallery */}
                <div className="mb-8">
                    <ImageGallery images={[property.image, ...property.images]} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-2">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <Badge className="bg-black text-white px-3 py-1">{property.type}</Badge>
                                    <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50 px-3 py-1">For {property.listingType}</Badge>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.title}</h1>
                                <div className="flex items-center text-gray-500 font-medium">
                                    <MapPin className="h-5 w-5 mr-1 text-green-700" />
                                    {property.address}, {property.city}, {property.state} {property.zip}
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-green-700">
                                    ${property.price.toLocaleString()}
                                    {property.listingType === 'Rent' && <span className="text-base text-gray-500 font-normal">/mo</span>}
                                </div>
                            </div>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex flex-col items-center justify-center p-2 text-center">
                                <Bed className="h-6 w-6 text-gray-400 mb-2" />
                                <span className="text-xl font-bold">{property.bedrooms}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Bedrooms</span>
                            </div>
                            <div className="border-l flex flex-col items-center justify-center p-2 text-center">
                                <Bath className="h-6 w-6 text-gray-400 mb-2" />
                                <span className="text-xl font-bold">{property.bathrooms}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Bathrooms</span>
                            </div>
                            <div className="border-l flex flex-col items-center justify-center p-2 text-center">
                                <Move className="h-6 w-6 text-gray-400 mb-2" />
                                <span className="text-xl font-bold">{property.sqft}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Sq Ft</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">About this home</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {property.description}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">Features & Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {property.amenities.map((amenity: string) => (
                                    <div key={amenity} className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                                        <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                                            <Check className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-gray-700">{(amenity as string)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map (Static Placeholder or Dynamic) */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">Location</h2>
                            <div className="rounded-3xl overflow-hidden h-64 md:h-80 relative bg-gray-200">
                                {/* Simple placeholder map image since dynamic map is heavy */}
                                <img
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                                    alt="Map Location"
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="h-16 w-16 bg-green-700/20 rounded-full flex items-center justify-center animate-pulse">
                                        <div className="h-4 w-4 bg-green-700 rounded-full border-2 border-white shadow-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Form */}
                    <div className="lg:col-span-1">
                        <ContactAgentForm />
                    </div>

                </div>
            </div>
        </div>
    )
}
