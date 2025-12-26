"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function StatsSection() {
    const containerRef = useRef<HTMLElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)

    const stats = [
        { value: "100%", label: "Customer satisfaction from our clients" },
        { value: "500+", label: "Luxury units sold across city" },
        { value: "150+", label: "Expert real estate agents" },
        { value: "2,000+", label: "Properties ready for occupancy" }
    ]

    useGSAP(() => {
        gsap.from(statsRef.current?.children || [], {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-16 bg-white border-t border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center md:text-left p-6 rounded-2xl hover:bg-gray-50 transition-colors cursor-default"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
