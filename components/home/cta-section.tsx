"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function CtaSection() {
    const containerRef = useRef<HTMLElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Card Scale & Fade In
        gsap.from(cardRef.current, {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        })

        // Content Popup
        gsap.from(contentRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.4,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24">
            <div className="container mx-auto px-6">
                <div
                    ref={cardRef}
                    className="rounded-[3rem] overflow-hidden relative shadow-2xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2670&auto=format&fit=crop"
                        alt="Modern Architecture"
                        className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

                    <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                        <div ref={contentRef} className="max-w-2xl space-y-8">
                            <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                                Ready to Make Your Dream Property a Reality?
                            </h2>
                            <p className="text-lg text-white/80">
                                Join thousands of happy homeowners who found their perfect match with us.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <Input
                                    placeholder="Enter your email"
                                    className="h-14 rounded-full bg-white/90 backdrop-blur-md border-0 px-6 text-base shadow-xl transition-all focus:bg-white"
                                />
                                <Button className="h-14 px-8 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-xl shadow-green-600/30 transition-transform hover:scale-105 active:scale-95">
                                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
