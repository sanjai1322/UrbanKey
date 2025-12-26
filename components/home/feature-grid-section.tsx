"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function FeatureGridSection() {
    const containerRef = useRef<HTMLElement>(null)
    const leftColRef = useRef<HTMLDivElement>(null)
    const rightColRef = useRef<HTMLDivElement>(null)
    const image1Ref = useRef<HTMLDivElement>(null)
    const image2Ref = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Text Column Animation
        gsap.from(leftColRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: leftColRef.current,
                start: "top 80%",
            }
        })

        // Right Column Animation
        gsap.from(rightColRef.current, {
            y: 70,
            opacity: 0,
            duration: 1.2,
            delay: 0.2,
            scrollTrigger: {
                trigger: rightColRef.current,
                start: "top 80%",
            }
        })

        // Image Parallax Effects
        if (image1Ref.current) {
            gsap.to(image1Ref.current.querySelector("img"), {
                scale: 1.1,
                scrollTrigger: {
                    trigger: image1Ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            })
        }
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Text */}
                    <div ref={leftColRef} className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
                            Your primary home might<br />
                            begin to feel left out.
                        </h2>

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div ref={image1Ref} className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
                                    alt="Modern House"
                                    className="w-full h-full object-cover transition-transform duration-700"
                                />
                            </div>
                            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
                                    alt="Luxury Home"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Cards */}
                    <div ref={rightColRef} className="space-y-6">
                        {/* Glassmorphic Info Card */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 relative border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="absolute -top-4 right-8 bg-white rounded-2xl px-5 py-2.5 shadow-xl border border-gray-100 text-sm">
                                <span className="text-gray-500">Let's help you</span>
                                <span className="text-green-600 font-semibold ml-1">find a home →</span>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-1 space-y-4">
                                    <div className="bg-green-100 text-green-800 text-xs font-semibold px-4 py-1.5 rounded-full inline-block">
                                        Big things can happen if you dream.
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Find properties that match your lifestyle and budget with our expert guidance.
                                    </p>
                                    <button className="flex items-center text-green-700 font-medium text-sm hover:gap-3 transition-all gap-2 group">
                                        Complete on time
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg transition-transform hover:scale-105">
                                    <img
                                        src="https://images.unsplash.com/photo-1570129477492-45f003f2df91?auto=format&fit=crop&w=400&q=80"
                                        alt="Property"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Second Image with Hover Zoom */}
                        <div ref={image2Ref} className="rounded-3xl overflow-hidden aspect-[16/9] shadow-xl group">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                                alt="Modern Interior"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
