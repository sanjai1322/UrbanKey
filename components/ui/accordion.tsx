"use client"

import * as React from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function SimpleAccordion({ items }: { items: { question: string, answer: string }[] }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0)
    const containerRef = React.useRef<HTMLDivElement>(null)

    // We can use a ref array to store references to each content div
    const contentRefs = React.useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        // Animate content height when open state changes
        items.forEach((_, index) => {
            const content = contentRefs.current[index]
            if (!content) return

            const isOpen = openIndex === index

            if (isOpen) {
                gsap.to(content, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out"
                })
            } else {
                gsap.to(content, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                })
            }
        })
    }, { dependencies: [openIndex], scope: containerRef })

    return (
        <div ref={containerRef} className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm overflow-hidden hover:border-gray-300 transition-colors"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex w-full items-center justify-between p-6 text-left font-medium text-gray-900 hover:bg-gray-50/50 transition-colors"
                    >
                        <span className="text-lg">{item.question}</span>
                        <div className={cn(
                            "transform transition-transform duration-300",
                            openIndex === index ? "rotate-180" : "rotate-0"
                        )}>
                            <ChevronDown className={cn(
                                "h-5 w-5 text-gray-400 transition-colors",
                                openIndex === index && "text-green-600"
                            )} />
                        </div>
                    </button>

                    <div
                        ref={el => { contentRefs.current[index] = el }}
                        className="h-0 opacity-0 overflow-hidden"
                    >
                        <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
