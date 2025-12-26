"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

export function Navbar() {
    const navRef = useRef<HTMLElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const linksRef = useRef<HTMLDivElement>(null)
    const actionsRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.fromTo(navRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(logoRef.current,
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5 },
                "-=0.6"
            )
            // Check if children exist before animating
            .fromTo(linksRef.current?.children || [],
                { y: -10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
                "-=0.4"
            )
            .fromTo(actionsRef.current,
                { x: 20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5 },
                "-=0.6"
            )

    }, { scope: navRef })

    return (
        <header
            ref={navRef}
            className="absolute top-0 left-0 right-0 z-50 w-full opacity-0"
        >
            <div className="container mx-auto flex h-24 items-center justify-between px-6">
                <div ref={logoRef}>
                    <Link href="/" className="flex items-center gap-3 group relative">
                        {/* Logo Image */}
                        <div className="relative h-20 w-auto">
                            <img
                                src="/logo.png"
                                alt="UrbanKey Logo"
                                className="h-full w-auto object-contain drop-shadow-lg transition-transform hover:scale-105"
                            />
                        </div>
                    </Link>
                </div>

                <nav ref={linksRef} className="hidden md:flex gap-8 items-center bg-white/10 backdrop-blur-md rounded-full px-8 py-3 border border-white/20">
                    <Link href="/" className="text-sm font-medium text-white hover:text-green-300 transition-colors">
                        Home
                    </Link>
                    <Link href="/search" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        Listings
                    </Link>
                    <Link href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        Agents
                    </Link>
                    <Link href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        About
                    </Link>
                </nav>

                <div ref={actionsRef} className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-transform hover:scale-105">
                        <Search className="h-5 w-5" />
                    </Button>
                    <div className="hidden md:block">
                        <Button className="rounded-full px-6 h-11 bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95">
                            Sign Up
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="md:hidden text-white">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
