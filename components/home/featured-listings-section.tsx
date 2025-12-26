"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PropertyCard } from "@/components/ui/property-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Property } from "@/lib/data"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface FeaturedListingsSectionProps {
    properties: Property[]
}

export function FeaturedListingsSection({ properties }: FeaturedListingsSectionProps) {
    const containerRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)

    const featured = properties.slice(0, 6)

    useGSAP(() => {
        // Header Text Reveal (Clean "Line Slide Up" effect)
        const words = headerRef.current?.querySelectorAll(".word")
        if (words) {
            gsap.fromTo(words,
                { y: 50, opacity: 0, rotateX: -45 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                    }
                }
            )
        }

        const para = headerRef.current?.querySelector("p");
        if (para) {
            gsap.fromTo(para,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                    }
                }
            )
        }

        // Button Reveal
        const btn = headerRef.current?.querySelector(".explore-btn");
        if (btn) {
            gsap.fromTo(btn,
                { x: 20, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                    }
                }
            )
        }

        // Grid Items Stagger Animation with Scale
        gsap.fromTo(gridRef.current?.children || [],
            { y: 100, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 75%",
                }
            }
        )

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div
                    ref={headerRef}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="space-y-3 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight overflow-hidden">
                            <span className="inline-block mr-3 word">Explore</span>
                            <span className="inline-block mr-3 word">our</span>
                            <span className="inline-block mr-3 word text-green-600">premier</span>
                            <span className="inline-block word">houses</span>
                        </h2>
                        <p className="text-gray-500 text-lg">We'll find you the perfect property that fits your lifestyle</p>
                    </div>
                    <Link href="/search" className="explore-btn">
                        <Button variant="outline" className="rounded-full px-8 h-12 gap-2 border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 font-medium transition-all transform hover:scale-105 active:scale-95">
                            Explore All <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((property, idx) => (
                        <div key={property.id} className="h-full">
                            <PropertyCard property={property} index={idx} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
