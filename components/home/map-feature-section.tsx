"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function MapFeatureSection() {
    const containerRef = useRef<HTMLElement>(null)
    const mapImageRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const pin1Ref = useRef<HTMLDivElement>(null)
    const pin2Ref = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        })

        tl.from(mapImageRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        })
            .from(contentRef.current, {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8")

        // Pins Pop In (Elastic)
        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            }
        });

        pinTl.from(pin1Ref.current, {
            scale: 0,
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
        })
            .from(pin2Ref.current, {
                scale: 0,
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            }, "-=0.6")

        // Floating Animations
        gsap.to(pin1Ref.current, {
            y: "-=15",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1 // Wait for pop in
        })

        gsap.to(pin2Ref.current, {
            y: "-=12",
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Map Image */}
                    <div ref={mapImageRef} className="flex-1 relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                                alt="Map"
                                className="w-full aspect-[4/3] object-cover"
                            />
                        </div>

                        {/* Floating Glassmorphic Pin Cards */}
                        <div
                            ref={pin1Ref}
                            className="absolute top-1/4 left-1/4 bg-white/80 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-white/50"
                        >
                            <div className="w-20 h-14 rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=100&q=80"
                                    alt="Property"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs font-semibold mt-2 text-gray-900">$2.4M</p>
                        </div>

                        <div
                            ref={pin2Ref}
                            className="absolute bottom-1/3 right-1/4 bg-white/80 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-white/50"
                        >
                            <div className="w-20 h-14 rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=100&q=80"
                                    alt="Property"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs font-semibold mt-2 text-gray-900">$1.8M</p>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div ref={contentRef} className="flex-1 space-y-6 max-w-lg">
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
                            Discover Properties with
                            <span className="block text-green-600">the Best Value</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Browse our interactive map to see property values, neighborhood stats, and local amenities at a glance. Make informed decisions with real-time data.
                        </p>
                        <div className="pt-2">
                            <Button className="rounded-full px-8 h-14 bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30 transition-all transform hover:scale-105">
                                Explore The Map
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
