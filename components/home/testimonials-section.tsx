"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Quote, Star } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const testimonials = [
    {
        name: "Michael Scott",
        role: "Regional Manager",
        content: "We found our dream office space thanks to UrbanKey. The process was smooth, and the agent was incredibly knowledgeable about the local market.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        rating: 5
    },
    {
        name: "Sarah Jenning",
        role: "Interior Designer",
        content: "As a designer, I'm picky about aesthetics. UrbanKey's specific search filters helped me find an architecturally significant home in record time.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        rating: 5
    },
    {
        name: "David Chen",
        role: "Tech Entrepreneur",
        content: "The map features are a game changer. Being able to see neighborhood stats overlayed on the search made my decision much easier.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
        rating: 4
    }
]

export function TestimonialsSection() {
    const containerRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Header Reveal
        gsap.fromTo(headerRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        )

        // Grid Cards Stagger
        gsap.fromTo(gridRef.current?.children || [],
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                }
            }
        )

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
                        What our clients say
                        <span className="block text-green-600">about us</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Read success stories from people who found their perfect place with UrbanKey.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col"
                        >
                            <Quote className="h-10 w-10 text-green-200 mb-6" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < item.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8 flex-grow italic">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-green-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
