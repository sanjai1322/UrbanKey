"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { Bed, Bath, Move, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Property } from "@/lib/data"

interface PropertyCardProps {
    property: Property
    index?: number
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({ paused: true })

        // Hover animation
        tl.to(cardRef.current, {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            duration: 0.3,
            ease: "power2.out"
        })
            .to(imageRef.current, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out"
            }, 0)

        cardRef.current?.addEventListener("mouseenter", () => tl.play())
        cardRef.current?.addEventListener("mouseleave", () => tl.reverse())

        return () => {
            cardRef.current?.removeEventListener("mouseenter", () => tl.play())
            cardRef.current?.removeEventListener("mouseleave", () => tl.reverse())
        }
    }, { scope: cardRef })

    return (
        <div ref={cardRef} className="h-full">
            <Link href={`/property/${property.id}`} className="block h-full group">
                <Card className="overflow-hidden border-0 shadow-lg rounded-[2rem] h-full bg-white/80 backdrop-blur-sm transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                            ref={imageRef}
                            src={property.image}
                            alt={property.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute top-4 left-4">
                            <Badge className="bg-white/90 backdrop-blur-md text-gray-900 hover:bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-lg">
                                {property.listingType}
                            </Badge>
                        </div>

                        <button
                            className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all border border-white/30 transform hover:scale-110 active:scale-90"
                            onClick={(e) => {
                                e.preventDefault()
                                // Handle favorite logic here
                            }}
                        >
                            <Heart className="h-5 w-5 text-white" />
                        </button>
                    </div>

                    <CardContent ref={contentRef} className="p-6">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl font-semibold text-gray-900 truncate group-hover:text-green-700 transition-colors">
                                    {property.title}
                                </h3>
                                <p className="text-gray-500 text-sm truncate mt-1">{property.address}, {property.city}</p>
                            </div>
                        </div>

                        <span className="text-xl font-bold text-green-700">
                            {property.price.toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumFractionDigits: 0
                            })}
                            {property.listingType === 'Rent' && <span className="text-sm font-normal text-gray-500">/mo</span>}
                        </span>

                        <div className="flex gap-4 text-gray-500 text-sm font-medium pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-1.5">
                                <Bed className="h-4 w-4" /> {property.bedrooms} Beds
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Bath className="h-4 w-4" /> {property.bathrooms} Baths
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Move className="h-4 w-4" /> {property.sqft} sqft
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}
