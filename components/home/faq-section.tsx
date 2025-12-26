"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SimpleAccordion } from "@/components/ui/accordion"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const faqs = [
    {
        question: "What types of properties do you sell?",
        answer: "We specialize in residential real estate including luxury apartments, condos, townhouses, and lofts in major urban centers. Our portfolio ranges from starter homes to multi-million dollar penthouses."
    },
    {
        question: "How do I know if a property is a good investment?",
        answer: "Our team provides detailed market analysis and ROI projections for every property. We analyze historical appreciation, rental yield potential, and neighborhood development plans."
    },
    {
        question: "Do I need to hire a real estate agent?",
        answer: "While not legally required, having an expert agent can save you time and money. We handle negotiations, paperwork, and navigate complex regulations on your behalf."
    },
    {
        question: "What is the process for buying a property?",
        answer: "The process involves pre-approval, property search, making an offer, inspection, and closing. Our agents guide you through every step seamlessly."
    },
    {
        question: "Can I tour a property before purchasing?",
        answer: "Absolutely! We offer both in-person and virtual tours for all our listed properties. Schedule a viewing at your convenience through our platform."
    }
]

export function FaqSection() {
    const containerRef = useRef<HTMLElement>(null)
    const leftColRef = useRef<HTMLDivElement>(null)
    const rightColRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        // Left Column Animation
        gsap.from(leftColRef.current, {
            x: -30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        })

        // Right Column Animation
        gsap.from(rightColRef.current, {
            x: 30,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        })

        // Image Parallax
        if (rightColRef.current) {
            gsap.fromTo(imageRef.current,
                { scale: 1.1 },
                {
                    scale: 1,
                    scrollTrigger: {
                        trigger: rightColRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            )
        }

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left - Questions */}
                    <div ref={leftColRef} className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                                Frequently asked
                                <span className="block text-green-600">questions</span>
                            </h2>
                            <p className="text-gray-500 mt-4">Everything you need to know about buying your dream home.</p>
                        </div>
                        <SimpleAccordion items={faqs} />
                    </div>

                    {/* Right - Image */}
                    <div
                        ref={rightColRef}
                        className="rounded-3xl overflow-hidden aspect-[4/5] lg:sticky lg:top-24 shadow-2xl"
                    >
                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                            alt="Modern Home"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
