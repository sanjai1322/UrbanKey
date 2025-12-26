import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-white border-t py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="UrbanKey Logo" className="h-10 w-auto object-contain" />
                            <span className="text-2xl font-bold text-gray-900 hidden">UrbanKey</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Discover nature's wonders with expert guidance. We help you find your dream property.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-100 hover:text-green-700 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-100 hover:text-green-700 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-100 hover:text-green-700 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-100 hover:text-green-700 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><Link href="/search" className="hover:text-green-700 transition-colors">Search Properties</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Featured Listings</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Mortgage Calculator</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Agent Directory</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><Link href="#" className="hover:text-green-700 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Press</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-green-700 transition-colors">Cookie Settings</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t text-center text-sm text-gray-400">
                    © 2025 UrbanKey Real Estate. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
