"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

gsap.registerPlugin(useGSAP)

export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const searchCardRef = useRef<HTMLDivElement>(null)
    const floatRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Initial fade in and slide up for text content
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        tl.fromTo(badgeRef.current,
            { y: 20, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8 }
        )

        // Staggered Title Reveal
        const words = titleRef.current?.querySelectorAll(".hero-word");
        if (words) {
            tl.fromTo(words,
                { y: 50, opacity: 0, rotateX: -20 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
                "-=0.4"
            )
        }

        tl.fromTo(textRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        )
            .fromTo(searchCardRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "back.out(1.2)" },
                "-=0.6"
            )

        // Floating animation for the decorative element
        gsap.to(floatRef.current, {
            y: -20,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative h-[700px] md:h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover scale-105"
                    poster="https://images.unsplash.com/photo-1600596542815-e328700336f4?q=80&w=2675&auto=format&fit=crop"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 space-y-10">
                <div className="text-white space-y-6 max-w-2xl">
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm font-medium">Premium Real Estate Platform</span>
                    </div>

                    <h1 ref={titleRef} className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight overflow-hidden">
                        <span className="inline-block mr-4 hero-word">Build</span>
                        <span className="inline-block mr-4 hero-word">Your</span>
                        <span className="inline-block mr-4 hero-word">Future,</span>
                        <br className="hidden md:block" />
                        <span className="inline-block mr-4 hero-word">One</span>
                        <span className="inline-block mr-4 hero-word">Property</span>
                        <span className="inline-block mr-4 hero-word">at</span>
                        <span className="inline-block hero-word">a</span>
                        <span className="inline-block hero-word">Time.</span>
                    </h1>
                    <p ref={textRef} className="text-lg text-white/70 max-w-lg opacity-0">
                        Discover exceptional properties tailored to your lifestyle with our curated collection of premium homes.
                    </p>
                </div>

                {/* Glassmorphic Search Card */}
                <div
                    ref={searchCardRef}
                    className="w-full max-w-4xl rounded-3xl bg-white/90 backdrop-blur-xl p-5 shadow-2xl shadow-black/20 border border-white/50 opacity-0"
                >
                    <div className="flex items-center gap-4 mb-5">
                        <button className="px-5 py-2 bg-gray-900 text-white text-sm rounded-full font-medium transition-all hover:bg-gray-800 hover:scale-105">
                            For Sale
                        </button>
                        <button className="px-5 py-2 text-gray-600 text-sm font-medium rounded-full hover:bg-gray-100 transition-all">
                            For Rent
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1 relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-green-600" />
                            <Input
                                placeholder="Mumbai, Bandra West"
                                className="pl-12 h-14 rounded-2xl border-gray-200 bg-gray-50/80 text-base focus:bg-white focus:shadow-lg transition-all"
                            />
                        </div>

                        <div className="flex gap-3">
                            <select className="h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50/80 text-sm font-medium min-w-[130px] cursor-pointer hover:bg-gray-100 transition-all">
                                <option>Property Type</option>
                                <option>House</option>
                                <option>Apartment</option>
                                <option>Condo</option>
                            </select>

                            <select className="h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50/80 text-sm font-medium min-w-[120px] cursor-pointer hover:bg-gray-100 transition-all">
                                <option>Price Range</option>
                                <option>$100k - $500k</option>
                                <option>$500k - $1M</option>
                                <option>$1M+</option>
                            </select>
                        </div>

                        <Button className="h-14 px-8 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg shadow-green-600/30 hover:shadow-green-600/50 hover:scale-[1.02] transition-all">
                            <Search className="mr-2 h-5 w-5" /> Search
                        </Button>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div
                ref={floatRef}
                className="absolute bottom-20 right-20 hidden lg:block"
            >
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20" />
            </div>
        </section>
    )
}
