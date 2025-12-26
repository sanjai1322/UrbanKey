'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Grid } from "lucide-react"

interface ImageGalleryProps {
    images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [mainImage, setMainImage] = useState(images[0])

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-gray-100 group">
                <img
                    src={mainImage}
                    alt="Property Main"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button variant="secondary" size="sm" className="bg-white/90 backdrop-blur">
                        <Grid className="h-4 w-4 mr-2" /> View All Photos
                    </Button>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {images.slice(0, 4).map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setMainImage(img)}
                        className={cn(
                            "relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all",
                            mainImage === img ? "border-green-600 ring-2 ring-green-600/20" : "border-transparent hover:border-gray-300"
                        )}
                    >
                        <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                        {mainImage === img && <div className="absolute inset-0 bg-black/10" />}
                    </button>
                ))}
            </div>
        </div>
    )
}
