"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function BottomFeatureSection() {
    const containerRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const imagesRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Content Slide In
        gsap.from(contentRef.current, {
            x: -40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        })

        // Images Slide/Rotate In
        if (imagesRef.current) {
            const img1 = imagesRef.current.children[0]
            const img2 = imagesRef.current.children[1]

            gsap.from(img1, {
                opacity: 0,
                x: 40,
                rotate: 5,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            })

            gsap.from(img2, {
                opacity: 0,
                x: 40,
                rotate: -5,
                duration: 1,
                delay: 0.4,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            })
        }
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div ref={contentRef} className="flex-1 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                            Discover Nature's Wonders
                            <span className="block text-green-300">with Expert Guidance</span>
                        </h2>
                        <p className="text-green-200/80 text-lg leading-relaxed max-w-lg">
                            Connect with our network of certified real estate professionals who understand your unique needs and can guide you to your dream property.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="rounded-full px-8 h-14 bg-white text-green-900 hover:bg-gray-100 font-semibold shadow-xl transition-transform hover:scale-105 active:scale-95">
                                Get Started
                            </Button>
                            <Button variant="outline" className="rounded-full px-8 h-14 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-medium transition-transform hover:scale-105 active:scale-95">
                                <Play className="mr-2 h-5 w-5 fill-white" /> Watch Video
                            </Button>
                        </div>
                    </div>

                    <div ref={imagesRef} className="flex-1 grid grid-cols-2 gap-6">
                        <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl transform transition-transform duration-500 hover:rotate-2 hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1600596542815-e328700336f4?auto=format&fit=crop&w=400&q=80"
                                alt="Property"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-3xl overflow-hidden aspect-square mt-12 shadow-2xl transform transition-transform duration-500 hover:-rotate-2 hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                                alt="Property"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
